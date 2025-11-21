export interface Project {
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

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor: string;
  iconColor: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}
