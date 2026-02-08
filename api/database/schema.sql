-- Database Schema for CodeHunts Application
-- MySQL/MariaDB

-- Create database (if not exists)
CREATE DATABASE IF NOT EXISTS codehunts CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE codehunts;

-- =====================================================
-- Contacts Table
-- Stores contact form submissions
-- =====================================================
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    budget VARCHAR(50),
    timeline VARCHAR(50),
    status ENUM('new', 'contacted', 'in_progress', 'completed', 'archived') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Projects Table
-- Stores portfolio projects
-- =====================================================
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    client VARCHAR(255),
    duration VARCHAR(100),
    team_size INT,
    technologies JSON,
    images JSON,
    demo_url VARCHAR(500),
    github_url VARCHAR(500),
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at),
    FULLTEXT idx_fulltext_search (title, description)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Team Members Table
-- Stores team member information
-- =====================================================
CREATE TABLE IF NOT EXISTS team_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50),
    bio TEXT,
    avatar VARCHAR(500),
    skills JSON,
    social_links JSON,
    display_order INT DEFAULT 999,
    status ENUM('active', 'inactive', 'archived') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_role (role),
    INDEX idx_status (status),
    INDEX idx_display_order (display_order),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Sample Data (Optional - Remove in production)
-- =====================================================

-- Sample Projects
INSERT INTO projects (title, description, category, client, duration, team_size, technologies, images, demo_url, status) VALUES
('E-Commerce Platform', 'A fully-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.', 'web-development', 'RetailCo', '6 months', 5, 
    '["React", "Node.js", "MongoDB", "Stripe", "AWS"]',
    '["/images/projects/ecommerce-1.jpg", "/images/projects/ecommerce-2.jpg"]',
    'https://demo.example.com',
    'published'),
    
('Mobile Banking App', 'Secure mobile banking application with biometric authentication and real-time transactions.', 'app-development', 'BankXYZ', '8 months', 6,
    '["React Native", "Firebase", "PostgreSQL", "Docker"]',
    '["/images/projects/banking-1.jpg", "/images/projects/banking-2.jpg"]',
    'https://apps.example.com',
    'published'),
    
('AI Chatbot Solution', 'Intelligent customer service chatbot with natural language processing and multi-language support.', 'ai-development', 'TechCorp', '4 months', 4,
    '["Python", "TensorFlow", "FastAPI", "Redis", "OpenAI"]',
    '["/images/projects/chatbot-1.jpg"]',
    'https://chatbot.example.com',
    'published');

-- Sample Team Members
INSERT INTO team_members (name, role, email, phone, bio, avatar, skills, social_links, display_order, status) VALUES
('John Doe', 'CEO & Founder', 'john@codehunts.com', '+92-300-1234567', 
    'Visionary leader with 10+ years of experience in software development and business strategy.',
    '/images/team/john-doe.jpg',
    '["Leadership", "Strategy", "Business Development"]',
    '{"linkedin": "https://linkedin.com/in/johndoe", "twitter": "https://twitter.com/johndoe", "github": "https://github.com/johndoe"}',
    1, 'active'),
    
('Jane Smith', 'CTO', 'jane@codehunts.com', '+92-300-7654321',
    'Tech enthusiast specializing in cloud architecture and scalable solutions.',
    '/images/team/jane-smith.jpg',
    '["Cloud Architecture", "DevOps", "System Design"]',
    '{"linkedin": "https://linkedin.com/in/janesmith", "github": "https://github.com/janesmith"}',
    2, 'active'),
    
('Mike Johnson', 'Lead Developer', 'mike@codehunts.com', '+92-300-1112233',
    'Full-stack developer passionate about creating elegant solutions to complex problems.',
    '/images/team/mike-johnson.jpg',
    '["React", "Node.js", "Python", "AWS", "Docker"]',
    '{"linkedin": "https://linkedin.com/in/mikejohnson", "github": "https://github.com/mikejohnson"}',
    3, 'active');

-- =====================================================
-- Admin User Table (Optional - for backend access)
-- =====================================================
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255),
    role ENUM('super_admin', 'admin', 'editor') DEFAULT 'editor',
    last_login TIMESTAMP NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin user (username: admin, password: Admin@123)
-- NOTE: Change this password immediately in production!
INSERT INTO admin_users (username, password_hash, email, full_name, role, status) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@codehunts.com', 'Administrator', 'super_admin', 'active');

-- =====================================================
-- Indexes for Performance
-- =====================================================

-- Add composite indexes for common queries
ALTER TABLE contacts ADD INDEX idx_status_created (status, created_at);
ALTER TABLE projects ADD INDEX idx_category_status (category, status);
ALTER TABLE team_members ADD INDEX idx_status_order (status, display_order);

-- =====================================================
-- Views for Common Queries
-- =====================================================

-- Active team members view
CREATE OR REPLACE VIEW active_team_members AS
SELECT id, name, role, email, phone, bio, avatar, skills, social_links, display_order
FROM team_members
WHERE status = 'active'
ORDER BY display_order ASC;

-- Published projects view
CREATE OR REPLACE VIEW published_projects AS
SELECT id, title, description, category, client, duration, team_size, 
       technologies, images, demo_url, github_url, created_at
FROM projects
WHERE status = 'published'
ORDER BY created_at DESC;

-- Recent contacts view
CREATE OR REPLACE VIEW recent_contacts AS
SELECT id, first_name, last_name, email, phone, company, service, 
       message, budget, timeline, status, created_at
FROM contacts
WHERE status IN ('new', 'contacted', 'in_progress')
ORDER BY created_at DESC;
