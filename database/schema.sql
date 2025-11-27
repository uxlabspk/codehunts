-- CodeHunts Database Schema
-- MySQL Database Setup

-- Create database
CREATE DATABASE IF NOT EXISTS codehunts_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE codehunts_db;

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT NOT NULL,
    image_url VARCHAR(500),
    tags JSON NOT NULL,
    category VARCHAR(50) NOT NULL,
    demo_url VARCHAR(500),
    github_url VARCHAR(500),
    completed_date VARCHAR(100),
    team_size INT DEFAULT 1,
    features JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    image_url VARCHAR(500),
    github_url VARCHAR(500),
    linkedin_url VARCHAR(500),
    twitter_url VARCHAR(500),
    website_url VARCHAR(500),
    display_order INT DEFAULT 999,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_active (is_active),
    INDEX idx_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Contact Submissions Table (for record keeping)
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(255),
    message TEXT NOT NULL,
    budget VARCHAR(100),
    timeline VARCHAR(100),
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed existing projects from hardcoded data
INSERT INTO projects (title, description, long_description, image_url, tags, category, demo_url, github_url, completed_date, team_size, features) VALUES
(
    'E-Commerce Platform',
    'Full-stack e-commerce solution with real-time inventory management and payment processing',
    'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory tracking, secure payment processing, and a responsive user interface.',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    '["React", "Node.js", "PostgreSQL", "Stripe", "Redis"]',
    'web',
    'https://demo.example.com',
    'https://github.com/example/ecommerce',
    'March 2024',
    4,
    '["Real-time inventory management", "Secure payment processing", "Admin dashboard", "Customer analytics", "Email notifications"]'
),
(
    'Social Media Dashboard',
    'Analytics dashboard for managing multiple social media accounts',
    'A powerful analytics dashboard that allows users to manage and monitor multiple social media accounts from a single interface, with comprehensive reporting and scheduling features.',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    '["Vue.js", "Express", "MongoDB", "Chart.js"]',
    'web',
    NULL,
    NULL,
    'January 2024',
    3,
    '["Multi-platform integration", "Scheduled posting", "Analytics & reporting", "Team collaboration", "Content calendar"]'
),
(
    'Mobile Banking App',
    'Secure mobile banking application with biometric authentication',
    'A secure and user-friendly mobile banking application featuring biometric authentication, real-time transaction monitoring, and comprehensive account management.',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    '["React Native", "Node.js", "PostgreSQL", "JWT"]',
    'mobile',
    NULL,
    NULL,
    'February 2024',
    5,
    '["Biometric authentication", "Real-time notifications", "Bill payments", "Fund transfers", "Transaction history"]'
),
(
    'Fitness Tracking App',
    'Comprehensive fitness and nutrition tracking application',
    'A complete fitness solution that helps users track workouts, monitor nutrition, set goals, and analyze their fitness progress over time.',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    '["Flutter", "Firebase", "TensorFlow"]',
    'mobile',
    'https://play.google.com/store',
    NULL,
    'April 2024',
    3,
    '["Workout tracking", "Nutrition logging", "Progress analytics", "Social features", "Goal setting"]'
),
(
    'Task Management System',
    'Collaborative project and task management platform',
    'A comprehensive task management system designed for teams to collaborate effectively, track project progress, and manage workflows efficiently.',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    '["React", "TypeScript", "Node.js", "MySQL"]',
    'web',
    'https://tasks.example.com',
    'https://github.com/example/tasks',
    'May 2024',
    4,
    '["Kanban boards", "Time tracking", "Team collaboration", "File attachments", "Gantt charts"]'
),
(
    'NFT Marketplace',
    'Decentralized marketplace for buying and selling NFTs',
    'A modern NFT marketplace built on blockchain technology, allowing users to mint, buy, sell, and trade digital assets securely.',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    '["React", "Solidity", "Ethereum", "Web3.js", "IPFS"]',
    'blockchain',
    'https://nft.example.com',
    NULL,
    'June 2024',
    6,
    '["NFT minting", "Wallet integration", "Auction system", "Royalty management", "IPFS storage"]'
);

-- Seed existing team members from hardcoded data
INSERT INTO team_members (name, position, image_url, github_url, linkedin_url, twitter_url, display_order) VALUES
('Muhammad Naveed', 'Software Engineer', 'team/naveed.png', 'https://github.com/naveed', 'https://linkedin.com/in/naveed', 'https://twitter.com/naveed', 1),
('Hamza Waheed', 'Data Scientist', 'team/hamza.png', 'https://github.com/hamza', 'https://linkedin.com/in/hamza', 'https://twitter.com/hamza', 2),
('Muhammad Usama', 'SEO Expert', 'team/Usama.png', 'https://github.com/usama', 'https://linkedin.com/in/usama', 'https://twitter.com/usama', 3),
('Muhammad Shazil', 'Web Developer', 'team/shazil-index.png', 'https://github.com/shazil', 'https://linkedin.com/in/shazil', 'https://twitter.com/shazil', 4);

-- Create default admin user (password: admin123)
-- IMPORTANT: Change this password immediately after first login!
INSERT INTO admin_users (name, email, password_hash) VALUES
('Admin', 'admin@codehuntspk.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');
-- Password: admin123 (change this immediately!)
