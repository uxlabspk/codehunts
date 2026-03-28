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
$totalProject = (int) ($input['totalProject'] ?? 0);
$totalEmployees = (int) ($input['totalEmployees'] ?? 0);
$totalRating = (int) ($input['totalRating'] ?? 0);

if ($totalProject < 0 || $totalEmployees < 0 || $totalRating < 0) {
    jsonResponse([
        'success' => false,
        'message' => 'Company values cannot be negative',
    ], 400);
}

$db = getDbConnection();

if ($id > 0) {
    $stmt = $db->prepare('UPDATE companyDetails SET totalProject = ?, totalEmployees = ?, totalRating = ? WHERE id = ?');
    if ($stmt === false) {
        jsonResponse([
            'success' => false,
            'message' => 'Failed to prepare company update query',
        ], 500);
    }

    $stmt->bind_param('iiii', $totalProject, $totalEmployees, $totalRating, $id);
    $stmt->execute();
    $stmt->close();
} else {
    $stmt = $db->prepare('INSERT INTO companyDetails (totalProject, totalEmployees, totalRating) VALUES (?, ?, ?)');
    if ($stmt === false) {
        jsonResponse([
            'success' => false,
            'message' => 'Failed to prepare company insert query',
        ], 500);
    }

    $stmt->bind_param('iii', $totalProject, $totalEmployees, $totalRating);
    $stmt->execute();
    $id = $db->insert_id;
    $stmt->close();
}

jsonResponse([
    'success' => true,
    'message' => 'Company details saved successfully',
    'data' => [
        'id' => $id,
        'totalProject' => $totalProject,
        'totalEmployees' => $totalEmployees,
        'totalRating' => $totalRating,
    ],
]);