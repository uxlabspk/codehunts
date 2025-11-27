import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced features and seamless user experience",
    longDescription: "Built with React, Node.js, and MongoDB, this platform offers a complete shopping experience with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    completedDate: "2024-10",
    teamSize: 4,
    features: [
      "Product catalog with search and filters",
      "Shopping cart and checkout",
      "Payment integration with Stripe",
      "Order tracking and management",
      "Admin dashboard"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application for teams",
    longDescription: "A comprehensive project management solution featuring real-time collaboration, task assignment, progress tracking, and team communication tools.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    category: "mobile",
    demoUrl: "https://example.com",
    completedDate: "2024-09",
    teamSize: 3,
    features: [
      "Real-time task updates",
      "Team collaboration",
      "File attachments",
      "Push notifications",
      "Analytics dashboard"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence platform with AI-driven insights",
    longDescription: "Advanced analytics platform that leverages machine learning to provide predictive insights and data visualization for business decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    category: "web",
    githubUrl: "https://github.com",
    completedDate: "2024-08",
    teamSize: 5,
    features: [
      "Machine learning predictions",
      "Interactive data visualizations",
      "Custom report generation",
      "Real-time data processing",
      "Multi-tenant support"
    ]
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description: "Personal fitness companion with workout tracking and nutrition planning",
    longDescription: "Comprehensive fitness application that helps users track workouts, monitor nutrition, set goals, and stay motivated with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB", "AWS"],
    category: "mobile",
    demoUrl: "https://example.com",
    completedDate: "2024-07",
    teamSize: 3,
    features: [
      "Workout tracking",
      "Nutrition planning",
      "Progress monitoring",
      "Social sharing",
      "Personalized recommendations"
    ]
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description: "Property listing and management platform",
    longDescription: "Full-featured real estate platform connecting buyers, sellers, and agents with advanced search capabilities, virtual tours, and property management tools.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
    category: "web",
    demoUrl: "https://example.com",
    completedDate: "2024-06",
    teamSize: 4,
    features: [
      "Advanced property search",
      "Virtual tours",
      "Agent dashboard",
      "Appointment scheduling",
      "Document management"
    ]
  },
  {
    id: 6,
    title: "Social Media Management Tool",
    description: "Unified platform for managing multiple social media accounts",
    longDescription: "Streamline social media management with scheduled posting, analytics, engagement tracking, and team collaboration across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "Redis", "MySQL"],
    category: "web",
    githubUrl: "https://github.com",
    completedDate: "2024-05",
    teamSize: 4,
    features: [
      "Multi-platform posting",
      "Content calendar",
      "Analytics and reporting",
      "Team collaboration",
      "Engagement tracking"
    ]
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};
