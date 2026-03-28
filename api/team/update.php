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
$profilePic = trim((string) ($input['profilePic'] ?? ''));
$fullName = trim((string) ($input['full_name'] ?? ''));
$jobTitle = trim((string) ($input['jobTitle'] ?? ''));
$portfolioUrl = trim((string) ($input['portfolioUrl'] ?? ''));
$username = trim((string) ($input['username'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$password = (string) ($input['password'] ?? '');
$isAdmin = (int) ($input['isAdmin'] ?? 0);

if ($id <= 0 || $fullName === '' || $jobTitle === '' || $email === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Id, full name, job title, and email are required',
    ], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse([
        'success' => false,
        'message' => 'Invalid email format',
    ], 400);
}

$db = getDbConnection();

if ($password !== '') {
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $db->prepare('UPDATE users SET profilePic = ?, full_name = ?, jobTitle = ?, portfolioUrl = ?, username = ?, email = ?, password = ?, isAdmin = ? WHERE id = ?');
    if ($stmt === false) {
        jsonResponse([
            'success' => false,
            'message' => 'Failed to prepare team member update query',
        ], 500);
    }

    $stmt->bind_param('sssssssii', $profilePic, $fullName, $jobTitle, $portfolioUrl, $username, $email, $passwordHash, $isAdmin, $id);
} else {
    $stmt = $db->prepare('UPDATE users SET profilePic = ?, full_name = ?, jobTitle = ?, portfolioUrl = ?, username = ?, email = ?, isAdmin = ? WHERE id = ?');
    if ($stmt === false) {
        jsonResponse([
            'success' => false,
            'message' => 'Failed to prepare team member update query',
        ], 500);
    }

    $stmt->bind_param('ssssssii', $profilePic, $fullName, $jobTitle, $portfolioUrl, $username, $email, $isAdmin, $id);
}

$stmt->execute();
$stmt->close();

jsonResponse([
    'success' => true,
    'message' => 'Team member updated successfully',
    'data' => [
        'id' => $id,
        'profilePic' => $profilePic,
        'full_name' => $fullName,
        'jobTitle' => $jobTitle,
        'portfolioUrl' => $portfolioUrl,
        'username' => $username,
        'email' => $email,
        'isAdmin' => $isAdmin,
    ],
]);