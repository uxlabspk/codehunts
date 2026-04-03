import { Brain, Calendar, Code, ExternalLink, Github, Globe, Palette, Smartphone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { projects as fallbackProjects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/config/env";

interface DisplayProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  completedDate: string;
}

interface ApiProject {
  id: number;
  imageDir: string;
  title: string;
  description: string;
  tags: string;
  url: string;
}

interface ProjectsApiResponse {
  success: boolean;
  data: ApiProject[];
}

const buildApiBase = () => {
  const appUrl = config.app.url.trim().replace(/\/+$/, "");
  return `${appUrl}/api`;
};

const resolveImage = (imagePath: string) => {
  if (!imagePath) {
    return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop";
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }

  return `${config.app.url.replace(/\/+$/, "")}/${imagePath.replace(/^\/+/, "")}`;
};

const parseTags = (tags: string) =>
  tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

const inferCategory = (tags: string[], initialCategory?: string) => {
  const normalizedInitial = (initialCategory || "").toLowerCase();
  if (["web", "mobile", "design", "ai"].includes(normalizedInitial)) {
    return normalizedInitial;
  }

  const normalized = tags.map((tag) => tag.toLowerCase());
  const isAi = normalized.some((tag) =>
    ["ai", "ml", "machine learning", "artificial intelligence", "tensorflow", "openai", "llm"].includes(tag)
  );
  if (isAi) {
    return "ai";
  }

  const isDesign = normalized.some((tag) =>
    ["design", "ui", "ux", "figma", "branding", "graphics", "graphic design"].includes(tag)
  );
  if (isDesign) {
    return "design";
  }

  const isMobile = normalized.some((tag) =>
    ["react native", "flutter", "android", "ios", "mobile"].includes(tag)
  );

  return isMobile ? "mobile" : "web";
};

const filterByCategory = (items: DisplayProject[], category: string) => {
  if (category === "all") {
    return items;
  }

  return items.filter((project) => project.category === category);
};

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [, setSelectedProject] = useState<DisplayProject | null>(null);
  const [apiProjects, setApiProjects] = useState<DisplayProject[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        const response = await fetch(`${buildApiBase()}/projects/public.php`, {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as ProjectsApiResponse;
        if (!payload.success || !Array.isArray(payload.data)) {
          return;
        }

        const mappedProjects: DisplayProject[] = payload.data.map((project) => {
          const parsedTags = parseTags(project.tags);
          return {
            id: project.id,
            title: project.title,
            description: project.description,
            image: resolveImage(project.imageDir),
            tags: parsedTags,
            category: inferCategory(parsedTags),
            demoUrl: project.url || undefined,
            completedDate: "Latest",
          };
        });

        setApiProjects(mappedProjects);
      } catch {
        // Keep fallback projects when API is unavailable.
      }
    };

    void loadProjects();
    return () => controller.abort();
  }, []);

  const displayProjects = useMemo<DisplayProject[]>(() => {
    if (apiProjects && apiProjects.length > 0) {
      return apiProjects;
    }

    return fallbackProjects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags,
      category: inferCategory(project.tags, project.category),
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      completedDate: project.completedDate,
    }));
  }, [apiProjects]);

  const projects = useMemo(
    () => filterByCategory(displayProjects, selectedCategory),
    [displayProjects, selectedCategory]
  );

  const categories = [
    { id: "all", name: "All Projects", icon: Code },
    { id: "web", name: "Web Applications", icon: Globe },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
    { id: "design", name: "Design", icon: Palette },
    { id: "ai", name: "AI", icon: Brain },
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-5 py-5 text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-white/[0.08] bg-transparent text-muted-foreground hover:border-primary/30 hover:text-white"
                  }`}
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 transition-all duration-500 hover:border-white/[0.12] hover:bg-card hover:scale-[1.02]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 text-base font-semibold text-white">{project.title}</h3>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-white/[0.06] px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-xs text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.completedDate}
                    </div>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                      )}
                      {project.githubUrl && (
                        <Github className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
