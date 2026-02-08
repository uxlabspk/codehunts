<?php
/**
 * Team Members API Endpoint
 * Handles CRUD operations for team members
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
    error_log("Error in team.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal server error'
    ]);
}

/**
 * Get all team members or a specific team member
 */
function handleGet($conn) {
    try {
        $id = $_GET['id'] ?? null;
        
        if ($id) {
            // Get single team member
            $stmt = $conn->prepare("SELECT * FROM team_members WHERE id = ?");
            $stmt->execute([$id]);
            $member = $stmt->fetch();
            
            if ($member) {
                // Parse JSON fields
                $member['skills'] = json_decode($member['skills'], true);
                $member['social_links'] = json_decode($member['social_links'], true);
                
                echo json_encode([
                    'success' => true,
                    'member' => $member
                ]);
            } else {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Team member not found'
                ]);
            }
        } else {
            // Get all team members
            $status = $_GET['status'] ?? 'active';
            $role = $_GET['role'] ?? null;
            
            $query = "SELECT * FROM team_members WHERE 1=1";
            $params = [];
            
            if ($status) {
                $query .= " AND status = ?";
                $params[] = $status;
            }
            
            if ($role) {
                $query .= " AND role = ?";
                $params[] = $role;
            }
            
            $query .= " ORDER BY display_order ASC, created_at DESC";
            
            $stmt = $conn->prepare($query);
            $stmt->execute($params);
            $members = $stmt->fetchAll();
            
            // Parse JSON fields for each member
            foreach ($members as &$member) {
                $member['skills'] = json_decode($member['skills'], true);
                $member['social_links'] = json_decode($member['social_links'], true);
            }
            
            echo json_encode([
                'success' => true,
                'members' => $members,
                'total' => count($members)
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Database error in handleGet: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to fetch team members'
        ]);
    }
}

/**
 * Create a new team member
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
        $required = ['name', 'role', 'email'];
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
        
        // Validate email
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Invalid email format'
            ]);
            return;
        }
        
        // Prepare data
        $skills = json_encode($data['skills'] ?? []);
        $socialLinks = json_encode($data['social_links'] ?? []);
        
        $stmt = $conn->prepare("
            INSERT INTO team_members 
            (name, role, email, phone, bio, avatar, skills, social_links, 
             display_order, status, created_at) 
            VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
        ");
        
        $stmt->execute([
            $data['name'],
            $data['role'],
            $data['email'],
            $data['phone'] ?? null,
            $data['bio'] ?? null,
            $data['avatar'] ?? null,
            $skills,
            $socialLinks,
            $data['display_order'] ?? 999,
            $data['status'] ?? 'active'
        ]);
        
        $memberId = $conn->lastInsertId();
        
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Team member created successfully',
            'id' => $memberId
        ]);
        
    } catch (PDOException $e) {
        error_log("Database error in handlePost: " . $e->getMessage());
        
        // Check for duplicate email
        if ($e->getCode() == 23000) {
            http_response_code(409);
            echo json_encode([
                'success' => false,
                'message' => 'Email already exists'
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to create team member'
            ]);
        }
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
}

/**
 * Update an existing team member
 */
function handlePut($conn) {
    try {
        // Verify API key for write operations
        verifyApiKey();
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if (!$data || empty($data['id'])) {
            throw new Exception('Team member ID is required');
        }
        
        $id = $data['id'];
        
        // Build update query dynamically
        $updates = [];
        $params = [];
        
        $allowedFields = [
            'name', 'role', 'email', 'phone', 'bio', 'avatar', 
            'display_order', 'status'
        ];
        
        foreach ($allowedFields as $field) {
            if (isset($data[$field])) {
                $updates[] = "$field = ?";
                $params[] = $data[$field];
            }
        }
        
        // Handle JSON fields
        if (isset($data['skills'])) {
            $updates[] = "skills = ?";
            $params[] = json_encode($data['skills']);
        }
        
        if (isset($data['social_links'])) {
            $updates[] = "social_links = ?";
            $params[] = json_encode($data['social_links']);
        }
        
        if (empty($updates)) {
            throw new Exception('No fields to update');
        }
        
        $updates[] = "updated_at = NOW()";
        $params[] = $id;
        
        $query = "UPDATE team_members SET " . implode(', ', $updates) . " WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute($params);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                'success' => true,
                'message' => 'Team member updated successfully'
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'message' => 'Team member not found or no changes made'
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Database error in handlePut: " . $e->getMessage());
        
        // Check for duplicate email
        if ($e->getCode() == 23000) {
            http_response_code(409);
            echo json_encode([
                'success' => false,
                'message' => 'Email already exists'
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to update team member'
            ]);
        }
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
}

/**
 * Delete a team member
 */
function handleDelete($conn) {
    try {
        // Verify API key for write operations
        verifyApiKey();
        
        $id = $_GET['id'] ?? null;
        
        if (!$id) {
            throw new Exception('Team member ID is required');
        }
        
        $stmt = $conn->prepare("DELETE FROM team_members WHERE id = ?");
        $stmt->execute([$id]);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                'success' => true,
                'message' => 'Team member deleted successfully'
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'message' => 'Team member not found'
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Database error in handleDelete: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to delete team member'
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
