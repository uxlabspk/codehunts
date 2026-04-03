<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../helpers/http.php';

sendCorsHeaders(['GET', 'OPTIONS']);
handlePreflight();
requireMethod('GET');

$db = getDbConnection();
$query = 'SELECT id, profilePic, full_name, jobTitle, portfolioUrl, isAdmin FROM users ORDER BY id DESC';
$result = $db->query($query);

if ($result === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to fetch team members',
    ], 500);
}

$members = [];
while ($row = $result->fetch_assoc()) {
    $members[] = [
        'id' => (int) $row['id'],
        'profilePic' => (string) $row['profilePic'],
        'full_name' => (string) $row['full_name'],
        'jobTitle' => (string) $row['jobTitle'],
        'portfolioUrl' => (string) $row['portfolioUrl'],
        'isAdmin' => (int) $row['isAdmin'],
    ];
}

jsonResponse([
    'success' => true,
    'data' => $members,
]);