<?php

declare(strict_types=1);

require_once __DIR__ . '/env.php';

if (!function_exists('getDbConnection')) {
    function getDbConnection(): mysqli
    {
        static $connection = null;

        if ($connection instanceof mysqli) {
            return $connection;
        }

        $env = loadEnv(dirname(__DIR__));

        $host = $env['DB_HOST'] ?? 'localhost';
        $name = $env['DB_NAME'] ?? '';
        $username = $env['DB_USERNAME'] ?? 'root';
        $password = $env['DB_PASSWORD'] ?? '';

        $connection = new mysqli($host, $username, $password, $name);
        if ($connection->connect_errno) {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode([
                'success' => false,
                'message' => 'Database connection failed',
            ]);
            exit();
        }

        $connection->set_charset('utf8mb4');
        return $connection;
    }
}