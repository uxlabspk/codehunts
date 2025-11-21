import { Calendar, Code, ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  completedDate: string;
  teamSize: number;
  features: string[];
}

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      longDescription:
        "A comprehensive e-commerce platform built with modern web technologies, featuring real-time inventory tracking, payment processing, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "web",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/ecommerce",
      completedDate: "March 2024",
      teamSize: 4,
      features: [
        "Real-time inventory",
        "Payment processing",
        "Admin dashboard",
        "Mobile responsive",
      ],
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile app for team collaboration and project management",
      longDescription:
        "A feature-rich mobile application that helps teams manage projects, track progress, and collaborate effectively with real-time synchronization across devices.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "TypeScript", "Redux"],
      category: "mobile",
      demoUrl: "https://apps.apple.com/example",
      completedDate: "January 2024",
      teamSize: 3,
      features: ["Real-time sync", "Offline support", "Push notifications", "Team collaboration"],
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning dashboard for business intelligence and predictive analytics",
      longDescription:
        "An intelligent analytics platform that leverages machine learning algorithms to provide actionable business insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
      category: "web",
      demoUrl: "https://analytics.example.com",
      completedDate: "February 2024",
      teamSize: 5,
      features: ["ML predictions", "Interactive charts", "Real-time data", "Custom reports"],
    },
    {
      id: 4,
      title: "IoT Device Management System",
      description: "Cloud-based platform for monitoring and controlling IoT devices",
      longDescription:
        "A scalable IoT management platform that enables real-time monitoring, remote control, and analytics for connected devices across multiple industries.",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop",
      tags: ["Node.js", "MQTT", "MongoDB", "Docker", "Kubernetes"],
      category: "web",
      githubUrl: "https://github.com/example/iot-platform",
      completedDate: "December 2023",
      teamSize: 6,
      features: [
        "Device monitoring",
        "Remote control",
        "Data visualization",
        "Scalable architecture",
      ],
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Personal fitness companion with workout plans and progress tracking",
      longDescription:
        "A comprehensive fitness application that provides personalized workout plans, nutrition tracking, and social features to help users achieve their fitness goals.",
      image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=800&h=600&fit=crop",
      tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
      category: "mobile",
      demoUrl: "https://play.google.com/example",
      completedDate: "November 2023",
      teamSize: 3,
      features: ["Workout tracking", "Nutrition logs", "Social features", "Progress analytics"],
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology",
      longDescription:
        "A revolutionary voting system built on blockchain technology ensuring transparency, security, and immutability for democratic processes and organizational decision-making.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      tags: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
      category: "web",
      githubUrl: "https://github.com/example/blockchain-voting",
      completedDate: "October 2023",
      teamSize: 4,
      features: [
        "Blockchain security",
        "Transparent voting",
        "Smart contracts",
        "Decentralized storage",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Code },
    { id: "web", name: "Web Applications", icon: Globe },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className={"bg-black"}>
      <div className={"container mx-auto px-4 py-8 sm:px-0"}>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                size={"md"}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center rounded-full px-4 py-6 font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "scale-105 transform bg-orange-400 text-white shadow-lg hover:bg-orange-500"
                    : "border border-white bg-transparent text-white shadow-md hover:border-orange-400 hover:bg-orange-400 hover:shadow-lg"
                }`}
              >
                <IconComponent className="h-5 w-5" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-accent group transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {project.completedDate}
                  </div>
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <ExternalLink className="h-5 w-5 transition-colors duration-200" />
                    )}
                    {project.githubUrl && (
                      <Github className="h-5 w-5 transition-colors duration-200" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
