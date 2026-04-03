<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../helpers/http.php';

sendCorsHeaders(['GET', 'OPTIONS']);
handlePreflight();
requireMethod('GET');

$db = getDbConnection();
$query = 'SELECT id, totalProject, totalEmployees, totalRating FROM companyDetails ORDER BY id ASC LIMIT 1';
$result = $db->query($query);

if ($result === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to fetch company details',
    ], 500);
}

$row = $result->fetch_assoc();

if (!$row) {
    jsonResponse([
        'success' => true,
        'data' => [
            'id' => 0,
            'totalProject' => 0,
            'totalEmployees' => 0,
            'totalRating' => 0,
        ],
    ]);
}

jsonResponse([
    'success' => true,
    'data' => [
        'id' => (int) $row['id'],
        'totalProject' => (int) $row['totalProject'],
        'totalEmployees' => (int) $row['totalEmployees'],
        'totalRating' => (int) $row['totalRating'],
    ],
]);