<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/http.php';
require_once __DIR__ . '/jwt.php';

if (!function_exists('requireAdminAuth')) {
    function requireAdminAuth(): array
    {
        $token = parseAuthHeaderToken();
        if ($token === null) {
            jsonResponse([
                'success' => false,
                'message' => 'Authorization token missing',
            ], 401);
        }

        $claims = verifyJwt($token);
        $userId = (int) ($claims['sub'] ?? 0);
        if ($userId <= 0) {
            jsonResponse([
                'success' => false,
                'message' => 'Invalid token subject',
            ], 401);
        }

        $db = getDbConnection();
        $stmt = $db->prepare('SELECT id, full_name, email, username, isAdmin FROM users WHERE id = ? LIMIT 1');
        if ($stmt === false) {
            jsonResponse([
                'success' => false,
                'message' => 'Failed to prepare auth query',
            ], 500);
        }

        $stmt->bind_param('i', $userId);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();
        $stmt->close();

        if (!$user || (int) $user['isAdmin'] !== 1) {
            jsonResponse([
                'success' => false,
                'message' => 'Unauthorized user',
            ], 403);
        }

        return [
            'id' => (int) $user['id'],
            'full_name' => (string) $user['full_name'],
            'email' => (string) $user['email'],
            'username' => (string) $user['username'],
            'isAdmin' => (int) $user['isAdmin'],
        ];
    }
}