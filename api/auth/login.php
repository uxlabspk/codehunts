<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../helpers/http.php';
require_once __DIR__ . '/../helpers/jwt.php';

sendCorsHeaders(['POST', 'OPTIONS']);
handlePreflight();
requireMethod('POST');

$input = readJsonBody();
$email = trim((string) ($input['email'] ?? ''));
$password = (string) ($input['password'] ?? '');

if ($email === '' || $password === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Email and password are required',
    ], 400);
}

$db = getDbConnection();
$stmt = $db->prepare('SELECT id, full_name, email, username, password, isAdmin FROM users WHERE email = ? LIMIT 1');
if ($stmt === false) {
    jsonResponse([
        'success' => false,
        'message' => 'Failed to prepare login query',
    ], 500);
}

$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$stmt->close();

if (!$user || (int) $user['isAdmin'] !== 1 || !password_verify($password, (string) $user['password'])) {
    jsonResponse([
        'success' => false,
        'message' => 'Invalid credentials',
    ], 401);
}

$token = createJwt([
    'sub' => (int) $user['id'],
    'role' => 'admin',
]);

jsonResponse([
    'success' => true,
    'message' => 'Login successful',
    'data' => [
        'token' => $token,
        'user' => [
            'id' => (int) $user['id'],
            'full_name' => (string) $user['full_name'],
            'email' => (string) $user['email'],
            'username' => (string) $user['username'],
            'isAdmin' => (int) $user['isAdmin'],
        ],
    ],
]);