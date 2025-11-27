import { Calendar, Code, ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { config } from "@/config/env";
import type { Project } from "@/types";

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, [selectedCategory]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const url = selectedCategory === 'all'
        ? `${config.api.baseUrl}/api/projects.php`
        : `${config.api.baseUrl}/api/projects.php?category=${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: "all", name: "All Projects", icon: Code },
    { id: "web", name: "Web Applications", icon: Globe },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
  ];

  if (loading) {
    return (
      <div className={"bg-black py-20"}>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
        </div>
      </div>
    );
  }

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
                className={`flex items-center rounded-full px-4 py-6 font-medium transition-all duration-200 ${selectedCategory === category.id
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
          {projects.map((project) => (
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
