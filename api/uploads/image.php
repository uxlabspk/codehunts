<?php

declare(strict_types=1);

require_once __DIR__ . '/../helpers/http.php';
require_once __DIR__ . '/../helpers/auth.php';

sendCorsHeaders(['POST', 'OPTIONS']);
handlePreflight();
requireMethod('POST');
requireAdminAuth();

$folder = trim((string) ($_POST['folder'] ?? ''));
$allowedFolders = ['projects', 'team'];

if (!in_array($folder, $allowedFolders, true)) {
    jsonResponse([
        'success' => false,
        'message' => 'Invalid upload folder',
    ], 400);
}

if (!isset($_FILES['image']) || !is_array($_FILES['image'])) {
    jsonResponse([
        'success' => false,
        'message' => 'Image file is required',
    ], 400);
}

$file = $_FILES['image'];
$uploadError = (int) ($file['error'] ?? UPLOAD_ERR_NO_FILE);
if ($uploadError !== UPLOAD_ERR_OK) {
    jsonResponse([
        'success' => false,
        'message' => 'File upload failed',
    ], 400);
}

$tmpPath = (string) ($file['tmp_name'] ?? '');
$fileSize = (int) ($file['size'] ?? 0);
if ($tmpPath === '' || $fileSize <= 0) {
    jsonResponse([
        'success' => false,
        'message' => 'Invalid upload file',
    ], 400);
}

$maxFileSize = 5 * 1024 * 1024;
if ($fileSize > $maxFileSize) {
    jsonResponse([
        'success' => false,
        'message' => 'Image must be 5MB or smaller',
    ], 400);
}

$allowedMimeToExt = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/webp' => 'webp',
    'image/gif' => 'gif',
];

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mimeType = (string) $finfo->file($tmpPath);
$extension = $allowedMimeToExt[$mimeType] ?? null;

if ($extension === null) {
    jsonResponse([
        'success' => false,
        'message' => 'Only JPG, PNG, WEBP, and GIF images are allowed',
    ], 400);
}

$projectRoot = dirname(__DIR__, 2);
$relativeDir = 'uploads/' . $folder;
$targetDir = $projectRoot . '/public/' . $relativeDir;

if (!is_dir($targetDir) && !mkdir($targetDir, 0755, true) && !is_dir($targetDir)) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare upload directory',
    ], 500);
}

try {
    $randomPart = bin2hex(random_bytes(8));
} catch (Throwable $exception) {
    $randomPart = uniqid('', true);
}

$fileName = $folder . '_' . $randomPart . '.' . $extension;
$targetPath = $targetDir . '/' . $fileName;

if (!move_uploaded_file($tmpPath, $targetPath)) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to save uploaded image',
    ], 500);
}

jsonResponse([
    'success' => true,
    'message' => 'Image uploaded successfully',
    'data' => [
        'path' => $relativeDir . '/' . $fileName,
    ],
], 201);