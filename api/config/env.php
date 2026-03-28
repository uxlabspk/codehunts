<?php

declare(strict_types=1);

if (!function_exists('loadEnv')) {
    function loadEnv(string $baseDir): array
    {
        static $cache = [];

        if (isset($cache[$baseDir])) {
            return $cache[$baseDir];
        }

        $envPath = rtrim($baseDir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . '.env';
        $env = [];

        if (is_file($envPath)) {
            $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            if ($lines !== false) {
                foreach ($lines as $line) {
                    $trimmed = trim($line);
                    if ($trimmed === '' || str_starts_with($trimmed, '#') || !str_contains($trimmed, '=')) {
                        continue;
                    }

                    [$key, $value] = explode('=', $trimmed, 2);
                    $key = trim($key);
                    $value = trim($value);
                    $env[$key] = $value;
                    $_ENV[$key] = $value;
                }
            }
        }

        $cache[$baseDir] = $env;
        return $env;
    }
}