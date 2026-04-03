import { config } from "@/config/env";
import type { AdminUser, CompanyDetails, ProjectItem, TeamMemberItem } from "@/types/admin";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

interface LoginPayload {
  token: string;
  user: AdminUser;
}

type UploadFolder = "projects" | "team";

interface UploadImageResponse {
  path: string;
}

const getApiBase = () => `${config.app.url}/api`;

async function request<T>(
  path: string,
  options: RequestInit = {},
  token?: string
): Promise<ApiResponse<T>> {
  const isFormData = options.body instanceof FormData;
  const headers = new Headers(options.headers ?? undefined);
  if (!isFormData && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${getApiBase()}${path}`, {
    ...options,
    headers,
  });

  const payload = (await response.json()) as ApiResponse<T>;
  if (!response.ok || !payload.success) {
    throw new Error(payload.message || "Request failed");
  }

  return payload;
}

export const adminApi = {
  login: async (email: string, password: string): Promise<LoginPayload> => {
    const result = await request<LoginPayload>("/auth/login.php", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    return result.data;
  },

  me: async (token: string): Promise<AdminUser> => {
    const result = await request<AdminUser>("/auth/me.php", { method: "GET" }, token);
    return result.data;
  },

  getCompany: async (token: string): Promise<CompanyDetails> => {
    const result = await request<CompanyDetails>("/company/get.php", { method: "GET" }, token);
    return result.data;
  },

  saveCompany: async (token: string, payload: CompanyDetails): Promise<CompanyDetails> => {
    const result = await request<CompanyDetails>(
      "/company/update.php",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
      token
    );

    return result.data;
  },

  listProjects: async (token: string): Promise<ProjectItem[]> => {
    const result = await request<ProjectItem[]>("/projects/list.php", { method: "GET" }, token);
    return result.data;
  },

  createProject: async (
    token: string,
    payload: Omit<ProjectItem, "id">
  ): Promise<ProjectItem> => {
    const result = await request<ProjectItem>(
      "/projects/create.php",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
      token
    );

    return result.data;
  },

  updateProject: async (token: string, payload: ProjectItem): Promise<ProjectItem> => {
    const result = await request<ProjectItem>(
      "/projects/update.php",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
      token
    );

    return result.data;
  },

  deleteProject: async (token: string, id: number): Promise<void> => {
    await request<null>(
      "/projects/delete.php",
      {
        method: "POST",
        body: JSON.stringify({ id }),
      },
      token
    );
  },

  listTeam: async (token: string): Promise<TeamMemberItem[]> => {
    const result = await request<TeamMemberItem[]>("/team/list.php", { method: "GET" }, token);
    return result.data;
  },

  createTeamMember: async (
    token: string,
    payload: Omit<TeamMemberItem, "id"> & { password?: string }
  ): Promise<TeamMemberItem> => {
    const result = await request<TeamMemberItem>(
      "/team/create.php",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
      token
    );

    return result.data;
  },

  updateTeamMember: async (
    token: string,
    payload: TeamMemberItem & { password?: string }
  ): Promise<TeamMemberItem> => {
    const result = await request<TeamMemberItem>(
      "/team/update.php",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
      token
    );

    return result.data;
  },

  deleteTeamMember: async (token: string, id: number): Promise<void> => {
    await request<null>(
      "/team/delete.php",
      {
        method: "POST",
        body: JSON.stringify({ id }),
      },
      token
    );
  },

  uploadImage: async (token: string, file: File, folder: UploadFolder): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("folder", folder);

    const result = await request<UploadImageResponse>(
      "/uploads/image.php",
      {
        method: "POST",
        body: formData,
      },
      token
    );

    return result.data.path;
  },
};