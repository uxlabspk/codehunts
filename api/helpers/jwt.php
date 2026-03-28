<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/env.php';
require_once __DIR__ . '/http.php';

if (!function_exists('base64UrlEncode')) {
    function base64UrlEncode(string $input): string
    {
        return rtrim(strtr(base64_encode($input), '+/', '-_'), '=');
    }
}

if (!function_exists('base64UrlDecode')) {
    function base64UrlDecode(string $input): string
    {
        $padding = 4 - (strlen($input) % 4);
        if ($padding < 4) {
            $input .= str_repeat('=', $padding);
        }

        $decoded = base64_decode(strtr($input, '-_', '+/'), true);
        return $decoded === false ? '' : $decoded;
    }
}

if (!function_exists('jwtSecret')) {
    function jwtSecret(): string
    {
        $env = loadEnv(dirname(__DIR__));
        return $env['JWT_SECRET'] ?? 'replace-this-secret';
    }
}

if (!function_exists('createJwt')) {
    function createJwt(array $claims, int $ttlSeconds = 86400): string
    {
        $header = ['alg' => 'HS256', 'typ' => 'JWT'];
        $now = time();

        $payload = array_merge($claims, [
            'iat' => $now,
            'exp' => $now + $ttlSeconds,
        ]);

        $headerEncoded = base64UrlEncode(json_encode($header, JSON_UNESCAPED_SLASHES));
        $payloadEncoded = base64UrlEncode(json_encode($payload, JSON_UNESCAPED_SLASHES));
        $signature = hash_hmac('sha256', $headerEncoded . '.' . $payloadEncoded, jwtSecret(), true);
        $signatureEncoded = base64UrlEncode($signature);

        return $headerEncoded . '.' . $payloadEncoded . '.' . $signatureEncoded;
    }
}

if (!function_exists('verifyJwt')) {
    function verifyJwt(string $token): array
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            jsonResponse([
                'success' => false,
                'message' => 'Invalid token format',
            ], 401);
        }

        [$headerEncoded, $payloadEncoded, $signatureEncoded] = $parts;
        $expectedSignature = base64UrlEncode(hash_hmac('sha256', $headerEncoded . '.' . $payloadEncoded, jwtSecret(), true));

        if (!hash_equals($expectedSignature, $signatureEncoded)) {
            jsonResponse([
                'success' => false,
                'message' => 'Invalid token signature',
            ], 401);
        }

        $payloadJson = base64UrlDecode($payloadEncoded);
        $payload = json_decode($payloadJson, true);
        if (!is_array($payload)) {
            jsonResponse([
                'success' => false,
                'message' => 'Invalid token payload',
            ], 401);
        }

        $exp = (int) ($payload['exp'] ?? 0);
        if ($exp <= time()) {
            jsonResponse([
                'success' => false,
                'message' => 'Token has expired',
            ], 401);
        }

        return $payload;
    }
}