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

if ($id <= 0) {
    jsonResponse([
        'success' => false,
        'message' => 'Valid project id is required',
    ], 400);
}

$db = getDbConnection();
$stmt = $db->prepare('DELETE FROM projects WHERE id = ?');
if ($stmt === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare project delete query',
    ], 500);
}

$stmt->bind_param('i', $id);
$executed = $stmt->execute();

if ($executed === false) {
    $error = $stmt->error;
    $stmt->close();
    jsonResponse([
        'success' => false,
        'message' => $error !== '' ? 'Failed to delete project: ' . $error : 'Failed to delete project',
    ], 500);
}

$affectedRows = $stmt->affected_rows;
$stmt->close();

if ($affectedRows < 1) {
    jsonResponse([
        'success' => false,
        'message' => 'Project not found or already deleted',
    ], 404);
}

jsonResponse([
    'success' => true,
    'message' => 'Project deleted successfully',
]);