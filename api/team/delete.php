<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../helpers/http.php';
require_once __DIR__ . '/../helpers/auth.php';

sendCorsHeaders(['POST', 'OPTIONS']);
handlePreflight();
requireMethod('POST');

$requestUser = requireAdminAuth();
$input = readJsonBody();
$id = (int) ($input['id'] ?? 0);

if ($id <= 0) {
    jsonResponse([
        'success' => false,
        'message' => 'Valid user id is required',
    ], 400);
}

if ($requestUser['id'] === $id) {
    jsonResponse([
        'success' => false,
        'message' => 'You cannot delete your own account',
    ], 400);
}

$db = getDbConnection();
$stmt = $db->prepare('DELETE FROM users WHERE id = ?');
if ($stmt === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare team member delete query',
    ], 500);
}

$stmt->bind_param('i', $id);
$executed = $stmt->execute();

if ($executed === false) {
    $error = $stmt->error;
    $stmt->close();
    jsonResponse([
        'success' => false,
        'message' => $error !== '' ? 'Failed to delete team member: ' . $error : 'Failed to delete team member',
    ], 500);
}

$affectedRows = $stmt->affected_rows;
$stmt->close();

if ($affectedRows < 1) {
    jsonResponse([
        'success' => false,
        'message' => 'Team member not found or already deleted',
    ], 404);
}

jsonResponse([
    'success' => true,
    'message' => 'Team member deleted successfully',
]);