<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/env.php';

if (!function_exists('jsonResponse')) {
    function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode($payload);
        exit();
    }
}

if (!function_exists('readJsonBody')) {
    function readJsonBody(): array
    {
        $rawBody = file_get_contents('php://input');
        if ($rawBody === false || trim($rawBody) === '') {
            return [];
        }

        $decoded = json_decode($rawBody, true);
        if (!is_array($decoded)) {
            jsonResponse([
                'success' => false,
                'message' => 'Invalid JSON payload',
            ], 400);
        }

        return $decoded;
    }
}

if (!function_exists('sendCorsHeaders')) {
    function sendCorsHeaders(array $methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']): void
    {
        $env = loadEnv(dirname(__DIR__));
        $allowedOrigins = array_map('trim', explode(',', $env['ALLOWED_ORIGINS'] ?? '*'));
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '*';

        $allowOrigin = '*';
        if (!in_array('*', $allowedOrigins, true)) {
            $allowOrigin = in_array($origin, $allowedOrigins, true) ? $origin : $allowedOrigins[0];
        }

        header('Access-Control-Allow-Origin: ' . $allowOrigin);
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: ' . implode(', ', $methods));
    }
}

if (!function_exists('handlePreflight')) {
    function handlePreflight(): void
    {
        if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }
}

if (!function_exists('requireMethod')) {
    function requireMethod(string $method): void
    {
        $requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';
        if (strtoupper($requestMethod) !== strtoupper($method)) {
            jsonResponse([
                'success' => false,
                'message' => 'Method not allowed',
            ], 405);
        }
    }
}

if (!function_exists('parseAuthHeaderToken')) {
    function parseAuthHeaderToken(): ?string
    {
        $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if ($header === '' && function_exists('getallheaders')) {
            $headers = getallheaders();
            $header = $headers['Authorization'] ?? $headers['authorization'] ?? '';
        }

        if (preg_match('/Bearer\s+(.*)$/i', $header, $matches) !== 1) {
            return null;
        }

        return trim($matches[1]);
    }
}