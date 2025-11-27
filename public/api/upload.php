<?php
/**
 * File Upload API
 * Handles image uploads for projects and team members
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/auth.php';

// Require authentication for uploads
AuthAPI::requireAuth();

class UploadAPI {
    private $uploadDir;

    public function __construct() {
        $this->uploadDir = __DIR__ . '/../uploads/';
        $this->ensureUploadDirs();
    }

    private function ensureUploadDirs() {
        $dirs = [
            $this->uploadDir,
            $this->uploadDir . 'projects/',
            $this->uploadDir . 'team/'
        ];

        foreach ($dirs as $dir) {
            if (!is_dir($dir)) {
                mkdir($dir, 0755, true);
            }
        }
    }

    public function handleRequest() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            return ['success' => false, 'error' => 'Method not allowed'];
        }

        return $this->uploadImage();
    }

    private function uploadImage() {
        if (!isset($_FILES['file'])) {
            http_response_code(400);
            return ['success' => false, 'error' => 'No file uploaded'];
        }

        $file = $_FILES['file'];
        $type = $_POST['type'] ?? 'projects'; // 'projects' or 'team'

        // Validate file
        $validation = $this->validateFile($file);
        if (!$validation['valid']) {
            http_response_code(400);
            return ['success' => false, 'error' => $validation['error']];
        }

        try {
            // Generate unique filename
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $filename = uniqid() . '_' . time() . '.' . $extension;
            $subfolder = $type === 'team' ? 'team/' : 'projects/';
            $filepath = $this->uploadDir . $subfolder . $filename;

            // Move uploaded file
            if (!move_uploaded_file($file['tmp_name'], $filepath)) {
                throw new Exception('Failed to move uploaded file');
            }

            // Optimize image (optional)
            $this->optimizeImage($filepath);

            // Return relative URL
            $url = '/uploads/' . $subfolder . $filename;

            return [
                'success' => true,
                'data' => [
                    'url' => $url,
                    'filename' => $filename
                ]
            ];
        } catch (Exception $e) {
            error_log("Upload error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to upload file'];
        }
    }

    private function validateFile($file) {
        // Check for upload errors
        if ($file['error'] !== UPLOAD_ERR_OK) {
            return ['valid' => false, 'error' => 'Upload error: ' . $file['error']];
        }

        // Check file size
        if ($file['size'] > MAX_FILE_SIZE) {
            return ['valid' => false, 'error' => 'File is too large. Maximum size is 5MB'];
        }

        // Check file type
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        if (!in_array($mimeType, ALLOWED_IMAGE_TYPES)) {
            return ['valid' => false, 'error' => 'Invalid file type. Only images are allowed'];
        }

        return ['valid' => true];
    }

    private function optimizeImage($filepath) {
        // Basic image optimization
        $imageInfo = getimagesize($filepath);
        if (!$imageInfo) return;

        $mimeType = $imageInfo['mime'];
        $maxWidth = 1200;
        $maxHeight = 1200;

        try {
            switch ($mimeType) {
                case 'image/jpeg':
                    $image = imagecreatefromjpeg($filepath);
                    break;
                case 'image/png':
                    $image = imagecreatefrompng($filepath);
                    break;
                case 'image/gif':
                    $image = imagecreatefromgif($filepath);
                    break;
                case 'image/webp':
                    $image = imagecreatefromwebp($filepath);
                    break;
                default:
                    return;
            }

            $width = imagesx($image);
            $height = imagesy($image);

            // Resize if necessary
            if ($width > $maxWidth || $height > $maxHeight) {
                $ratio = min($maxWidth / $width, $maxHeight / $height);
                $newWidth = round($width * $ratio);
                $newHeight = round($height * $ratio);

                $resized = imagecreatetruecolor($newWidth, $newHeight);
                imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

                // Save optimized image
                switch ($mimeType) {
                    case 'image/jpeg':
                        imagejpeg($resized, $filepath, 85);
                        break;
                    case 'image/png':
                        imagepng($resized, $filepath, 8);
                        break;
                    case 'image/gif':
                        imagegif($resized, $filepath);
                        break;
                    case 'image/webp':
                        imagewebp($resized, $filepath, 85);
                        break;
                }

                imagedestroy($resized);
            }

            imagedestroy($image);
        } catch (Exception $e) {
            error_log("Image optimization error: " . $e->getMessage());
        }
    }
}

// Handle request
$api = new UploadAPI();
echo json_encode($api->handleRequest());
