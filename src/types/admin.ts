export interface AdminUser {
  id: number;
  full_name: string;
  email: string;
  username: string;
  isAdmin: number;
}

export interface CompanyDetails {
  id: number;
  totalProject: number;
  totalEmployees: number;
  totalRating: number;
}

export interface ProjectItem {
  id: number;
  imageDir: string;
  title: string;
  description: string;
  tags: string;
  url: string;
}

export interface TeamMemberItem {
  id: number;
  profilePic: string;
  full_name: string;
  jobTitle: string;
  portfolioUrl: string;
  username: string;
  email: string;
  isAdmin: number;
}