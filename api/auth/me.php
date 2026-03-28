<?php

declare(strict_types=1);

require_once __DIR__ . '/../helpers/http.php';
require_once __DIR__ . '/../helpers/auth.php';

sendCorsHeaders(['GET', 'OPTIONS']);
handlePreflight();
requireMethod('GET');

$user = requireAdminAuth();

jsonResponse([
    'success' => true,
    'data' => $user,
]);