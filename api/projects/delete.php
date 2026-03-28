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
$stmt->execute();
$stmt->close();

jsonResponse([
    'success' => true,
    'message' => 'Project deleted successfully',
]);