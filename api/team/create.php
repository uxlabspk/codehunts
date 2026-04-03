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
$profilePic = trim((string) ($input['profilePic'] ?? ''));
$fullName = trim((string) ($input['full_name'] ?? ''));
$jobTitle = trim((string) ($input['jobTitle'] ?? ''));
$portfolioUrl = trim((string) ($input['portfolioUrl'] ?? ''));
$username = trim((string) ($input['username'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$password = (string) ($input['password'] ?? '');
$isAdmin = (int) ($input['isAdmin'] ?? 0);

if ($fullName === '' || $jobTitle === '' || $email === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Full name, job title, and email are required',
    ], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse([
        'success' => false,
        'message' => 'Invalid email format',
    ], 400);
}

$passwordHash = $password !== '' ? password_hash($password, PASSWORD_BCRYPT) : '';

$db = getDbConnection();
$stmt = $db->prepare('INSERT INTO users (profilePic, full_name, jobTitle, portfolioUrl, username, email, password, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
if ($stmt === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare team member insert query',
    ], 500);
}

$stmt->bind_param('sssssssi', $profilePic, $fullName, $jobTitle, $portfolioUrl, $username, $email, $passwordHash, $isAdmin);
$executed = $stmt->execute();

if ($executed === false) {
    $error = $stmt->error;
    $stmt->close();
    jsonResponse([
        'success' => false,
        'message' => $error !== '' ? 'Failed to create team member: ' . $error : 'Failed to create team member',
    ], 500);
}

$id = $db->insert_id;
$stmt->close();

jsonResponse([
    'success' => true,
    'message' => 'Team member created successfully',
    'data' => [
        'id' => (int) $id,
        'profilePic' => $profilePic,
        'full_name' => $fullName,
        'jobTitle' => $jobTitle,
        'portfolioUrl' => $portfolioUrl,
        'username' => $username,
        'email' => $email,
        'isAdmin' => $isAdmin,
    ],
], 201);