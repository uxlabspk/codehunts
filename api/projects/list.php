<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../helpers/http.php';
require_once __DIR__ . '/../helpers/auth.php';

sendCorsHeaders(['GET', 'OPTIONS']);
handlePreflight();
requireMethod('GET');
requireAdminAuth();

$db = getDbConnection();
$query = 'SELECT id, imageDir, title, description, tags, url FROM projects ORDER BY id DESC';
$result = $db->query($query);

if ($result === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to fetch projects',
    ], 500);
}

$projects = [];
while ($row = $result->fetch_assoc()) {
    $projects[] = [
        'id' => (int) $row['id'],
        'imageDir' => (string) $row['imageDir'],
        'title' => (string) $row['title'],
        'description' => (string) $row['description'],
        'tags' => (string) $row['tags'],
        'url' => (string) $row['url'],
    ];
}

$result->free();

jsonResponse([
    'success' => true,
    'data' => $projects,
]);