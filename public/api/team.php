<?php
/**
 * Team Members API
 * CRUD operations for team members
 */

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth.php';

class TeamAPI {
    private $db;

    public function __construct() {
        $this->db = getDB();
    }

    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];
        $id = $_GET['id'] ?? null;

        switch ($method) {
            case 'GET':
                return $id ? $this->getTeamMember($id) : $this->getAllTeamMembers();
            case 'POST':
                AuthAPI::requireAuth();
                return $this->createTeamMember();
            case 'PUT':
                AuthAPI::requireAuth();
                return $this->updateTeamMember($id);
            case 'DELETE':
                AuthAPI::requireAuth();
                return $this->deleteTeamMember($id);
            default:
                http_response_code(405);
                return ['success' => false, 'error' => 'Method not allowed'];
        }
    }

    private function getAllTeamMembers() {
        try {
            $sql = "SELECT * FROM team_members WHERE is_active = 1 ORDER BY display_order ASC, created_at ASC";
            $stmt = $this->db->query($sql);
            $members = $stmt->fetchAll();
            
            return ['success' => true, 'data' => $members];
        } catch (Exception $e) {
            error_log("Get team members error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to fetch team members'];
        }
    }

    private function getTeamMember($id) {
        if (!$id) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Team member ID is required'];
        }

        try {
            $stmt = $this->db->query("SELECT * FROM team_members WHERE id = ?", [$id]);
            $member = $stmt->fetch();
            
            if (!$member) {
                http_response_code(404);
                return ['success' => false, 'error' => 'Team member not found'];
            }
            
            return ['success' => true, 'data' => $member];
        } catch (Exception $e) {
            error_log("Get team member error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to fetch team member'];
        }
    }

    private function createTeamMember() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $required = ['name', 'position'];
        foreach ($required as $field) {
            if (!isset($data[$field])) {
                http_response_code(400);
                return ['success' => false, 'error' => ucfirst($field) . ' is required'];
            }
        }

        try {
            $sql = "INSERT INTO team_members (
                name, position, image_url, github_url, linkedin_url, 
                twitter_url, website_url, display_order
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            
            $params = [
                $data['name'],
                $data['position'],
                $data['image'] ?? null,
                $data['github'] ?? null,
                $data['linkedin'] ?? null,
                $data['twitter'] ?? null,
                $data['website'] ?? null,
                $data['displayOrder'] ?? 999
            ];
            
            $this->db->query($sql, $params);
            $id = $this->db->lastInsertId();
            
            return ['success' => true, 'data' => ['id' => $id], 'message' => 'Team member created successfully'];
        } catch (Exception $e) {
            error_log("Create team member error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to create team member'];
        }
    }

    private function updateTeamMember($id) {
        if (!$id) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Team member ID is required'];
        }

        $data = json_decode(file_get_contents('php://input'), true);

        try {
            $sql = "UPDATE team_members SET
                name = ?, position = ?, image_url = ?, github_url = ?,
                linkedin_url = ?, twitter_url = ?, website_url = ?,
                display_order = ?, is_active = ?, updated_at = NOW()
                WHERE id = ?";
            
            $params = [
                $data['name'],
                $data['position'],
                $data['image'] ?? null,
                $data['github'] ?? null,
                $data['linkedin'] ?? null,
                $data['twitter'] ?? null,
                $data['website'] ?? null,
                $data['displayOrder'] ?? 999,
                $data['isActive'] ?? 1,
                $id
            ];
            
            $stmt = $this->db->query($sql, $params);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                return ['success' => false, 'error' => 'Team member not found'];
            }
            
            return ['success' => true, 'message' => 'Team member updated successfully'];
        } catch (Exception $e) {
            error_log("Update team member error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to update team member'];
        }
    }

    private function deleteTeamMember($id) {
        if (!$id) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Team member ID is required'];
        }

        try {
            // Soft delete
            $stmt = $this->db->query("UPDATE team_members SET is_active = 0 WHERE id = ?", [$id]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                return ['success' => false, 'error' => 'Team member not found'];
            }
            
            return ['success' => true, 'message' => 'Team member deleted successfully'];
        } catch (Exception $e) {
            error_log("Delete team member error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to delete team member'];
        }
    }
}

// Handle request
$api = new TeamAPI();
echo json_encode($api->handleRequest());
