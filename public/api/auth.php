<?php
/**
 * Authentication API
 * Handles admin login, logout, and session management
 */

require_once __DIR__ . '/db.php';

class AuthAPI {
    private $db;

    public function __construct() {
        $this->db = getDB();
    }

    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_GET['action'] ?? '';

        switch ($method) {
            case 'POST':
                if ($path === 'login') {
                    return $this->login();
                } elseif ($path === 'logout') {
                    return $this->logout();
                } elseif ($path === 'register') {
                    return $this->register();
                }
                break;
            case 'GET':
                if ($path === 'check') {
                    return $this->checkAuth();
                }
                break;
        }

        http_response_code(404);
        return ['success' => false, 'error' => 'Endpoint not found'];
    }

    private function login() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['email']) || !isset($data['password'])) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Email and password are required'];
        }

        try {
            $stmt = $this->db->query(
                "SELECT * FROM admin_users WHERE email = ? AND is_active = 1",
                [$data['email']]
            );
            $user = $stmt->fetch();

            if (!$user || !password_verify($data['password'], $user['password_hash'])) {
                http_response_code(401);
                return ['success' => false, 'error' => 'Invalid credentials'];
            }

            // Update last login
            $this->db->query(
                "UPDATE admin_users SET last_login = NOW() WHERE id = ?",
                [$user['id']]
            );

            // Create session
            $_SESSION['admin_id'] = $user['id'];
            $_SESSION['admin_email'] = $user['email'];
            $_SESSION['admin_name'] = $user['name'];

            return [
                'success' => true,
                'data' => [
                    'id' => $user['id'],
                    'email' => $user['email'],
                    'name' => $user['name']
                ]
            ];
        } catch (Exception $e) {
            error_log("Login error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Login failed'];
        }
    }

    private function logout() {
        session_destroy();
        return ['success' => true, 'message' => 'Logged out successfully'];
    }

    private function checkAuth() {
        if (isset($_SESSION['admin_id'])) {
            return [
                'success' => true,
                'data' => [
                    'id' => $_SESSION['admin_id'],
                    'email' => $_SESSION['admin_email'],
                    'name' => $_SESSION['admin_name']
                ]
            ];
        }

        http_response_code(401);
        return ['success' => false, 'error' => 'Not authenticated'];
    }

    private function register() {
        // Only allow registration if no admin exists (first-time setup)
        $stmt = $this->db->query("SELECT COUNT(*) as count FROM admin_users");
        $result = $stmt->fetch();
        
        if ($result['count'] > 0) {
            http_response_code(403);
            return ['success' => false, 'error' => 'Registration is disabled'];
        }

        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['email']) || !isset($data['password']) || !isset($data['name'])) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Name, email and password are required'];
        }

        try {
            $passwordHash = password_hash($data['password'], PASSWORD_DEFAULT);
            
            $this->db->query(
                "INSERT INTO admin_users (name, email, password_hash) VALUES (?, ?, ?)",
                [$data['name'], $data['email'], $passwordHash]
            );

            return ['success' => true, 'message' => 'Admin registered successfully'];
        } catch (Exception $e) {
            error_log("Registration error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Registration failed'];
        }
    }

    public static function requireAuth() {
        if (!isset($_SESSION['admin_id'])) {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Authentication required']);
            exit();
        }
    }
}

// Handle request
$api = new AuthAPI();
echo json_encode($api->handleRequest());
