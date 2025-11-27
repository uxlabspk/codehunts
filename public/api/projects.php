<?php
/**
 * Projects API
 * CRUD operations for portfolio projects
 */

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth.php';

class ProjectsAPI {
    private $db;

    public function __construct() {
        $this->db = getDB();
    }

    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];
        $id = $_GET['id'] ?? null;

        switch ($method) {
            case 'GET':
                return $id ? $this->getProject($id) : $this->getAllProjects();
            case 'POST':
                AuthAPI::requireAuth();
                return $this->createProject();
            case 'PUT':
                AuthAPI::requireAuth();
                return $this->updateProject($id);
            case 'DELETE':
                AuthAPI::requireAuth();
                return $this->deleteProject($id);
            default:
                http_response_code(405);
                return ['success' => false, 'error' => 'Method not allowed'];
        }
    }

    private function getAllProjects() {
        try {
            $category = $_GET['category'] ?? null;
            
            $sql = "SELECT * FROM projects WHERE 1=1";
            $params = [];
            
            if ($category && $category !== 'all') {
                $sql .= " AND category = ?";
                $params[] = $category;
            }
            
            $sql .= " ORDER BY created_at DESC";
            
            $stmt = $this->db->query($sql, $params);
            $projects = $stmt->fetchAll();
            
            // Parse JSON fields
            foreach ($projects as &$project) {
                $project['tags'] = json_decode($project['tags'], true);
                $project['features'] = json_decode($project['features'], true);
            }
            
            return ['success' => true, 'data' => $projects];
        } catch (Exception $e) {
            error_log("Get projects error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to fetch projects'];
        }
    }

    private function getProject($id) {
        if (!$id) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Project ID is required'];
        }

        try {
            $stmt = $this->db->query("SELECT * FROM projects WHERE id = ?", [$id]);
            $project = $stmt->fetch();
            
            if (!$project) {
                http_response_code(404);
                return ['success' => false, 'error' => 'Project not found'];
            }
            
            $project['tags'] = json_decode($project['tags'], true);
            $project['features'] = json_decode($project['features'], true);
            
            return ['success' => true, 'data' => $project];
        } catch (Exception $e) {
            error_log("Get project error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to fetch project'];
        }
    }

    private function createProject() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $required = ['title', 'description', 'longDescription', 'category', 'tags', 'features'];
        foreach ($required as $field) {
            if (!isset($data[$field])) {
                http_response_code(400);
                return ['success' => false, 'error' => ucfirst($field) . ' is required'];
            }
        }

        try {
            $sql = "INSERT INTO projects (
                title, description, long_description, image_url, tags, category,
                demo_url, github_url, completed_date, team_size, features
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            $params = [
                $data['title'],
                $data['description'],
                $data['longDescription'],
                $data['image'] ?? null,
                json_encode($data['tags']),
                $data['category'],
                $data['demoUrl'] ?? null,
                $data['githubUrl'] ?? null,
                $data['completedDate'] ?? null,
                $data['teamSize'] ?? 1,
                json_encode($data['features'])
            ];
            
            $this->db->query($sql, $params);
            $id = $this->db->lastInsertId();
            
            return ['success' => true, 'data' => ['id' => $id], 'message' => 'Project created successfully'];
        } catch (Exception $e) {
            error_log("Create project error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to create project'];
        }
    }

    private function updateProject($id) {
        if (!$id) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Project ID is required'];
        }

        $data = json_decode(file_get_contents('php://input'), true);

        try {
            $sql = "UPDATE projects SET
                title = ?, description = ?, long_description = ?, image_url = ?,
                tags = ?, category = ?, demo_url = ?, github_url = ?,
                completed_date = ?, team_size = ?, features = ?, updated_at = NOW()
                WHERE id = ?";
            
            $params = [
                $data['title'],
                $data['description'],
                $data['longDescription'],
                $data['image'] ?? null,
                json_encode($data['tags']),
                $data['category'],
                $data['demoUrl'] ?? null,
                $data['githubUrl'] ?? null,
                $data['completedDate'] ?? null,
                $data['teamSize'] ?? 1,
                json_encode($data['features']),
                $id
            ];
            
            $stmt = $this->db->query($sql, $params);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                return ['success' => false, 'error' => 'Project not found'];
            }
            
            return ['success' => true, 'message' => 'Project updated successfully'];
        } catch (Exception $e) {
            error_log("Update project error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to update project'];
        }
    }

    private function deleteProject($id) {
        if (!$id) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Project ID is required'];
        }

        try {
            $stmt = $this->db->query("DELETE FROM projects WHERE id = ?", [$id]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                return ['success' => false, 'error' => 'Project not found'];
            }
            
            return ['success' => true, 'message' => 'Project deleted successfully'];
        } catch (Exception $e) {
            error_log("Delete project error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to delete project'];
        }
    }
}

// Handle request
$api = new ProjectsAPI();
echo json_encode($api->handleRequest());
