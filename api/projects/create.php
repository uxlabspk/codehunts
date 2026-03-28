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
$imageDir = trim((string) ($input['imageDir'] ?? ''));
$title = trim((string) ($input['title'] ?? ''));
$description = trim((string) ($input['description'] ?? ''));
$tags = trim((string) ($input['tags'] ?? ''));
$url = trim((string) ($input['url'] ?? ''));

if ($title === '' || $description === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Title and description are required',
    ], 400);
}

$db = getDbConnection();
$stmt = $db->prepare('INSERT INTO projects (imageDir, title, description, tags, url) VALUES (?, ?, ?, ?, ?)');
if ($stmt === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare project insert query',
    ], 500);
}

$stmt->bind_param('sssss', $imageDir, $title, $description, $tags, $url);
$stmt->execute();
$id = $db->insert_id;
$stmt->close();

jsonResponse([
    'success' => true,
    'message' => 'Project created successfully',
    'data' => [
        'id' => $id,
        'imageDir' => $imageDir,
        'title' => $title,
        'description' => $description,
        'tags' => $tags,
        'url' => $url,
    ],
], 201);