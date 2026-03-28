<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../helpers/http.php';
require_once __DIR__ . '/../helpers/auth.php';

sendCorsHeaders(['POST', 'OPTIONS']);
handlePreflight();
requireMethod('POST');
requireAdminAuth();

$input = readJsonBody();
$id = (int) ($input['id'] ?? 0);
$imageDir = trim((string) ($input['imageDir'] ?? ''));
$title = trim((string) ($input['title'] ?? ''));
$description = trim((string) ($input['description'] ?? ''));
$tags = trim((string) ($input['tags'] ?? ''));
$url = trim((string) ($input['url'] ?? ''));

if ($id <= 0 || $title === '' || $description === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Id, title, and description are required',
    ], 400);
}

$db = getDbConnection();
$stmt = $db->prepare('UPDATE projects SET imageDir = ?, title = ?, description = ?, tags = ?, url = ? WHERE id = ?');
if ($stmt === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare project update query',
    ], 500);
}

$stmt->bind_param('sssssi', $imageDir, $title, $description, $tags, $url, $id);
$stmt->execute();
$stmt->close();

jsonResponse([
    'success' => true,
    'message' => 'Project updated successfully',
    'data' => [
        'id' => $id,
        'imageDir' => $imageDir,
        'title' => $title,
        'description' => $description,
        'tags' => $tags,
        'url' => $url,
    ],
]);