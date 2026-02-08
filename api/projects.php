<?php
/**
 * Projects API Endpoint
 * Handles CRUD operations for projects
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];

try {
    $db = Database::getInstance();
    $conn = $db->getConnection();
    
    switch ($method) {
        case 'GET':
            handleGet($conn);
            break;
            
        case 'POST':
            handlePost($conn);
            break;
            
        case 'PUT':
            handlePut($conn);
            break;
            
        case 'DELETE':
            handleDelete($conn);
            break;
            
        default:
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Method not allowed']);
            break;
    }
    
} catch (Exception $e) {
    error_log("Error in projects.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal server error'
    ]);
}

/**
 * Get all projects or a specific project
 */
function handleGet($conn) {
    try {
        $id = $_GET['id'] ?? null;
        
        if ($id) {
            // Get single project
            $stmt = $conn->prepare("SELECT * FROM projects WHERE id = ?");
            $stmt->execute([$id]);
            $project = $stmt->fetch();
            
            if ($project) {
                // Parse JSON fields
                $project['technologies'] = json_decode($project['technologies'], true);
                $project['images'] = json_decode($project['images'], true);
                
                echo json_encode([
                    'success' => true,
                    'project' => $project
                ]);
            } else {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Project not found'
                ]);
            }
        } else {
            // Get all projects
            $category = $_GET['category'] ?? null;
            $status = $_GET['status'] ?? 'published';
            
            $query = "SELECT * FROM projects WHERE 1=1";
            $params = [];
            
            if ($category) {
                $query .= " AND category = ?";
                $params[] = $category;
            }
            
            if ($status) {
                $query .= " AND status = ?";
                $params[] = $status;
            }
            
            $query .= " ORDER BY created_at DESC";
            
            $stmt = $conn->prepare($query);
            $stmt->execute($params);
            $projects = $stmt->fetchAll();
            
            // Parse JSON fields for each project
            foreach ($projects as &$project) {
                $project['technologies'] = json_decode($project['technologies'], true);
                $project['images'] = json_decode($project['images'], true);
            }
            
            echo json_encode([
                'success' => true,
                'projects' => $projects,
                'total' => count($projects)
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Database error in handleGet: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to fetch projects'
        ]);
    }
}

/**
 * Create a new project
 */
function handlePost($conn) {
    try {
        // Verify API key for write operations
        verifyApiKey();
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if (!$data) {
            throw new Exception('Invalid JSON data');
        }
        
        // Validate required fields
        $required = ['title', 'description', 'category'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => ucfirst($field) . ' is required'
                ]);
                return;
            }
        }
        
        // Prepare data
        $technologies = json_encode($data['technologies'] ?? []);
        $images = json_encode($data['images'] ?? []);
        
        $stmt = $conn->prepare("
            INSERT INTO projects 
            (title, description, category, client, duration, team_size, 
             technologies, images, demo_url, github_url, status, created_at) 
            VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
        ");
        
        $stmt->execute([
            $data['title'],
            $data['description'],
            $data['category'],
            $data['client'] ?? null,
            $data['duration'] ?? null,
            $data['team_size'] ?? null,
            $technologies,
            $images,
            $data['demo_url'] ?? null,
            $data['github_url'] ?? null,
            $data['status'] ?? 'draft'
        ]);
        
        $projectId = $conn->lastInsertId();
        
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Project created successfully',
            'id' => $projectId
        ]);
        
    } catch (PDOException $e) {
        error_log("Database error in handlePost: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to create project'
        ]);
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
}

/**
 * Update an existing project
 */
function handlePut($conn) {
    try {
        // Verify API key for write operations
        verifyApiKey();
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if (!$data || empty($data['id'])) {
            throw new Exception('Project ID is required');
        }
        
        $id = $data['id'];
        
        // Build update query dynamically
        $updates = [];
        $params = [];
        
        $allowedFields = [
            'title', 'description', 'category', 'client', 'duration', 
            'team_size', 'demo_url', 'github_url', 'status'
        ];
        
        foreach ($allowedFields as $field) {
            if (isset($data[$field])) {
                $updates[] = "$field = ?";
                $params[] = $data[$field];
            }
        }
        
        // Handle JSON fields
        if (isset($data['technologies'])) {
            $updates[] = "technologies = ?";
            $params[] = json_encode($data['technologies']);
        }
        
        if (isset($data['images'])) {
            $updates[] = "images = ?";
            $params[] = json_encode($data['images']);
        }
        
        if (empty($updates)) {
            throw new Exception('No fields to update');
        }
        
        $updates[] = "updated_at = NOW()";
        $params[] = $id;
        
        $query = "UPDATE projects SET " . implode(', ', $updates) . " WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute($params);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                'success' => true,
                'message' => 'Project updated successfully'
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'message' => 'Project not found or no changes made'
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Database error in handlePut: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to update project'
        ]);
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
}

/**
 * Delete a project
 */
function handleDelete($conn) {
    try {
        // Verify API key for write operations
        verifyApiKey();
        
        $id = $_GET['id'] ?? null;
        
        if (!$id) {
            throw new Exception('Project ID is required');
        }
        
        $stmt = $conn->prepare("DELETE FROM projects WHERE id = ?");
        $stmt->execute([$id]);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                'success' => true,
                'message' => 'Project deleted successfully'
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'message' => 'Project not found'
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Database error in handleDelete: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to delete project'
        ]);
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
}

/**
 * Verify API key for protected operations
 */
function verifyApiKey() {
    $headers = getallheaders();
    $apiKey = $headers['X-API-Key'] ?? $headers['x-api-key'] ?? null;
    
    if (!$apiKey || $apiKey !== API_SECRET_KEY) {
        throw new Exception('Unauthorized: Invalid API key');
    }
}
