import { useCallback, useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { BriefcaseBusiness, Building2, LogOut, ShieldCheck, Users } from "lucide-react";
import { useAdminAuth } from "@/contexts/admin-auth-context";
import { adminApi } from "@/services/admin-api";
import type { CompanyDetails, ProjectItem, TeamMemberItem } from "@/types/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type AdminTab = "company" | "projects" | "team";

const emptyProjectForm: Omit<ProjectItem, "id"> = {
    imageDir: "",
    title: "",
    description: "",
    tags: "",
    url: "",
};

const emptyTeamForm: Omit<TeamMemberItem, "id"> & { password?: string } = {
    profilePic: "",
    full_name: "",
    jobTitle: "",
    portfolioUrl: "",
    username: "",
    email: "",
    password: "",
    isAdmin: 0,
};

export default function AdminDashboardPage() {
    const { user, token, logout } = useAdminAuth();
    const [activeTab, setActiveTab] = useState<AdminTab>("company");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [company, setCompany] = useState<CompanyDetails>({
        id: 0,
        totalProject: 0,
        totalEmployees: 0,
        totalRating: 0,
    });

    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
    const [projectForm, setProjectForm] = useState<Omit<ProjectItem, "id">>(emptyProjectForm);
    const [projectImageFile, setProjectImageFile] = useState<File | null>(null);
    const [isProjectUploading, setIsProjectUploading] = useState(false);
    const [projectFileInputKey, setProjectFileInputKey] = useState(0);

    const [teamMembers, setTeamMembers] = useState<TeamMemberItem[]>([]);
    const [editingTeamId, setEditingTeamId] = useState<number | null>(null);
    const [teamForm, setTeamForm] = useState<Omit<TeamMemberItem, "id"> & { password?: string }>(
        emptyTeamForm
    );
    const [teamImageFile, setTeamImageFile] = useState<File | null>(null);
    const [isTeamUploading, setIsTeamUploading] = useState(false);
    const [teamFileInputKey, setTeamFileInputKey] = useState(0);

    const safeToken = token ?? "";

    const loadDashboardData = useCallback(async () => {
        if (!safeToken) {
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const [companyData, projectData, teamData] = await Promise.all([
                adminApi.getCompany(safeToken),
                adminApi.listProjects(safeToken),
                adminApi.listTeam(safeToken),
            ]);

            setCompany(companyData);
            setProjects(projectData);
            setTeamMembers(teamData);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Failed to load dashboard");
        } finally {
            setIsLoading(false);
        }
    }, [safeToken]);

    useEffect(() => {
        void loadDashboardData();
    }, [loadDashboardData]);

    const stats = useMemo(
        () => [
            {
                label: "Projects",
                value: company.totalProject,
                icon: BriefcaseBusiness,
            },
            {
                label: "Employees",
                value: company.totalEmployees,
                icon: Users,
            },
            {
                label: "Rating",
                value: company.totalRating,
                icon: ShieldCheck,
            },
        ],
        [company.totalEmployees, company.totalProject, company.totalRating]
    );

    const saveCompany = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const saved = await adminApi.saveCompany(safeToken, company);
            setCompany(saved);
            setError(null);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Failed to save company");
        }
    };

    const resetProjectForm = () => {
        setEditingProjectId(null);
        setProjectForm(emptyProjectForm);
        setProjectImageFile(null);
        setProjectFileInputKey((value) => value + 1);
    };

    const handleProjectImageFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setProjectImageFile(file);
    };

    const submitProject = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            let imageDir = projectForm.imageDir;
            if (projectImageFile) {
                setIsProjectUploading(true);
                imageDir = await adminApi.uploadImage(safeToken, projectImageFile, "projects");
            }

            if (editingProjectId === null) {
                const created = await adminApi.createProject(safeToken, {
                    ...projectForm,
                    imageDir,
                });
                setProjects((current) => [created, ...current]);
            } else {
                const updated = await adminApi.updateProject(safeToken, {
                    ...projectForm,
                    imageDir,
                    id: editingProjectId,
                });
                setProjects((current) => current.map((item) => (item.id === updated.id ? updated : item)));
            }

            resetProjectForm();
            setError(null);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Failed to save project");
        } finally {
            setIsProjectUploading(false);
        }
    };

    const editProject = (project: ProjectItem) => {
        setEditingProjectId(project.id);
        setProjectForm({
            imageDir: project.imageDir,
            title: project.title,
            description: project.description,
            tags: project.tags,
            url: project.url,
        });
        setProjectImageFile(null);
        setProjectFileInputKey((value) => value + 1);
    };

    const deleteProject = async (id: number) => {
        try {
            await adminApi.deleteProject(safeToken, id);
            setProjects((current) => current.filter((item) => item.id !== id));
            if (editingProjectId === id) {
                resetProjectForm();
            }
            setError(null);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Failed to delete project");
        }
    };

    const resetTeamForm = () => {
        setEditingTeamId(null);
        setTeamForm(emptyTeamForm);
        setTeamImageFile(null);
        setTeamFileInputKey((value) => value + 1);
    };

    const handleTeamImageFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setTeamImageFile(file);
    };

    const submitTeam = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            let profilePic = teamForm.profilePic;
            if (teamImageFile) {
                setIsTeamUploading(true);
                profilePic = await adminApi.uploadImage(safeToken, teamImageFile, "team");
            }

            if (editingTeamId === null) {
                const created = await adminApi.createTeamMember(safeToken, {
                    ...teamForm,
                    profilePic,
                });
                setTeamMembers((current) => [created, ...current]);
            } else {
                const updated = await adminApi.updateTeamMember(safeToken, {
                    ...teamForm,
                    profilePic,
                    id: editingTeamId,
                });
                setTeamMembers((current) => current.map((item) => (item.id === updated.id ? updated : item)));
            }

            resetTeamForm();
            setError(null);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Failed to save team member");
        } finally {
            setIsTeamUploading(false);
        }
    };

    const editTeam = (member: TeamMemberItem) => {
        setEditingTeamId(member.id);
        setTeamForm({
            profilePic: member.profilePic,
            full_name: member.full_name,
            jobTitle: member.jobTitle,
            portfolioUrl: member.portfolioUrl,
            username: member.username,
            email: member.email,
            password: "",
            isAdmin: member.isAdmin,
        });
        setTeamImageFile(null);
        setTeamFileInputKey((value) => value + 1);
    };

    const deleteTeam = async (id: number) => {
        try {
            await adminApi.deleteTeamMember(safeToken, id);
            setTeamMembers((current) => current.filter((item) => item.id !== id));
            if (editingTeamId === id) {
                resetTeamForm();
            }
            setError(null);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Failed to delete team member");
        }
    };

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
                Loading admin dashboard...
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 md:px-8">
            <div className="mx-auto max-w-7xl space-y-6">
                <header className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-amber-500/15 p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">CodeHunts Admin</p>
                            <h1 className="text-3xl font-bold">Control Center</h1>
                            <p className="text-slate-300">Signed in as {user?.full_name ?? "Admin"}</p>
                        </div>
                        <Button variant="outline" className="border-white/20 bg-white/5" onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </header>

                {error ? (
                    <div className="rounded-lg border border-red-500/40 bg-red-600/10 px-4 py-3 text-sm text-red-200">
                        {error}
                    </div>
                ) : null}

                <section className="grid gap-4 md:grid-cols-3">
                    {stats.map((item) => (
                        <Card key={item.label} className="border-white/10 bg-slate-900/70">
                            <CardContent className="flex items-center justify-between pt-6">
                                <div>
                                    <p className="text-sm text-slate-400">{item.label}</p>
                                    <p className="text-3xl font-bold text-white">{item.value}</p>
                                </div>
                                <item.icon className="h-8 w-8 text-cyan-300" />
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="flex flex-wrap gap-2">
                    <Button
                        variant={activeTab === "company" ? "default" : "outline"}
                        onClick={() => setActiveTab("company")}
                    >
                        <Building2 className="mr-2 h-4 w-4" />
                        Company
                    </Button>
                    <Button
                        variant={activeTab === "projects" ? "default" : "outline"}
                        onClick={() => setActiveTab("projects")}
                    >
                        <BriefcaseBusiness className="mr-2 h-4 w-4" />
                        Projects
                    </Button>
                    <Button
                        variant={activeTab === "team" ? "default" : "outline"}
                        onClick={() => setActiveTab("team")}
                    >
                        <Users className="mr-2 h-4 w-4" />
                        Team
                    </Button>
                </section>

                {activeTab === "company" ? (
                    <Card className="border-white/10 bg-slate-900/70">
                        <CardHeader>
                            <CardTitle>Company Statistics</CardTitle>
                            <CardDescription>Update the numbers displayed on landing and contact pages.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4 md:grid-cols-3" onSubmit={saveCompany}>
                                <div className="space-y-2">
                                    <Label htmlFor="totalProject">Total Projects</Label>
                                    <Input
                                        id="totalProject"
                                        type="number"
                                        min={0}
                                        value={company.totalProject}
                                        onChange={(event) =>
                                            setCompany((current) => ({
                                                ...current,
                                                totalProject: Number(event.target.value || 0),
                                            }))
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="totalEmployees">Total Employees</Label>
                                    <Input
                                        id="totalEmployees"
                                        type="number"
                                        min={0}
                                        value={company.totalEmployees}
                                        onChange={(event) =>
                                            setCompany((current) => ({
                                                ...current,
                                                totalEmployees: Number(event.target.value || 0),
                                            }))
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="totalRating">Rating</Label>
                                    <Input
                                        id="totalRating"
                                        type="number"
                                        min={0}
                                        value={company.totalRating}
                                        onChange={(event) =>
                                            setCompany((current) => ({
                                                ...current,
                                                totalRating: Number(event.target.value || 0),
                                            }))
                                        }
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <Button type="submit">Save Company Stats</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                ) : null}

                {activeTab === "projects" ? (
                    <section className="grid gap-6 lg:grid-cols-[1.05fr_1.5fr]">
                        <Card className="border-white/10 bg-slate-900/70">
                            <CardHeader>
                                <CardTitle>{editingProjectId ? "Edit Project" : "Add Project"}</CardTitle>
                                <CardDescription>Manage project showcase cards.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-3" onSubmit={submitProject}>
                                    <div className="space-y-2">
                                        <Label htmlFor="projectTitle">Title</Label>
                                        <Input
                                            id="projectTitle"
                                            value={projectForm.title}
                                            onChange={(event) =>
                                                setProjectForm((current) => ({ ...current, title: event.target.value }))
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="projectImage">Project Image</Label>
                                        <Input id="projectImage" key={projectFileInputKey} type="file" accept="image/*" onChange={handleProjectImageFileChange} />
                                        <p className="text-xs text-slate-400">
                                            {projectImageFile
                                                ? `Selected: ${projectImageFile.name}`
                                                : projectForm.imageDir
                                                    ? `Current image: ${projectForm.imageDir}`
                                                    : "No image selected"}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="projectTags">Tags</Label>
                                        <Input
                                            id="projectTags"
                                            value={projectForm.tags}
                                            onChange={(event) =>
                                                setProjectForm((current) => ({ ...current, tags: event.target.value }))
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="projectUrl">URL</Label>
                                        <Input
                                            id="projectUrl"
                                            value={projectForm.url}
                                            onChange={(event) =>
                                                setProjectForm((current) => ({ ...current, url: event.target.value }))
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="projectDescription">Description</Label>
                                        <Textarea
                                            id="projectDescription"
                                            value={projectForm.description}
                                            onChange={(event) =>
                                                setProjectForm((current) => ({ ...current, description: event.target.value }))
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-2">
                                        <Button type="submit" disabled={isProjectUploading}>
                                            {isProjectUploading
                                                ? "Uploading..."
                                                : editingProjectId
                                                    ? "Update Project"
                                                    : "Create Project"}
                                        </Button>
                                        {editingProjectId ? (
                                            <Button type="button" variant="outline" onClick={resetProjectForm}>
                                                Cancel
                                            </Button>
                                        ) : null}
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-slate-900/70">
                            <CardHeader>
                                <CardTitle>Project List</CardTitle>
                                <CardDescription>All portfolio projects in the database.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="text-slate-400">
                                            <tr className="border-b border-white/10">
                                                <th className="px-2 py-2">Title</th>
                                                <th className="px-2 py-2">Tags</th>
                                                <th className="px-2 py-2">URL</th>
                                                <th className="px-2 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {projects.map((project) => (
                                                <tr key={project.id} className="border-b border-white/5">
                                                    <td className="px-2 py-3 font-medium text-white">{project.title}</td>
                                                    <td className="px-2 py-3 text-slate-300">{project.tags}</td>
                                                    <td className="px-2 py-3 text-slate-300">{project.url || "-"}</td>
                                                    <td className="px-2 py-3">
                                                        <div className="flex gap-2">
                                                            <Button type="button" size="sm" variant="outline" onClick={() => editProject(project)}>
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                size="sm"
                                                                variant="destructive"
                                                                onClick={() => void deleteProject(project.id)}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                ) : null}

                {activeTab === "team" ? (
                    <section className="grid gap-6 lg:grid-cols-[1.05fr_1.5fr]">
                        <Card className="border-white/10 bg-slate-900/70">
                            <CardHeader>
                                <CardTitle>{editingTeamId ? "Edit Team Member" : "Add Team Member"}</CardTitle>
                                <CardDescription>Create or update users and admin rights.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-3" onSubmit={submitTeam}>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberName">Full Name</Label>
                                        <Input
                                            id="memberName"
                                            value={teamForm.full_name}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, full_name: event.target.value }))
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberRole">Job Title</Label>
                                        <Input
                                            id="memberRole"
                                            value={teamForm.jobTitle}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, jobTitle: event.target.value }))
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberEmail">Email</Label>
                                        <Input
                                            id="memberEmail"
                                            type="email"
                                            value={teamForm.email}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, email: event.target.value }))
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberUsername">Username</Label>
                                        <Input
                                            id="memberUsername"
                                            value={teamForm.username}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, username: event.target.value }))
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberPassword">
                                            Password {editingTeamId ? "(leave blank to keep current)" : ""}
                                        </Label>
                                        <Input
                                            id="memberPassword"
                                            type="password"
                                            value={teamForm.password ?? ""}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, password: event.target.value }))
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberProfilePic">Profile Image</Label>
                                        <Input id="memberProfilePic" key={teamFileInputKey} type="file" accept="image/*" onChange={handleTeamImageFileChange} />
                                        <p className="text-xs text-slate-400">
                                            {teamImageFile
                                                ? `Selected: ${teamImageFile.name}`
                                                : teamForm.profilePic
                                                    ? `Current image: ${teamForm.profilePic}`
                                                    : "No image selected"}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="memberPortfolio">Portfolio URL</Label>
                                        <Input
                                            id="memberPortfolio"
                                            value={teamForm.portfolioUrl}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, portfolioUrl: event.target.value }))
                                            }
                                        />
                                    </div>

                                    <label className="flex items-center gap-2 text-sm text-slate-300">
                                        <input
                                            type="checkbox"
                                            checked={teamForm.isAdmin === 1}
                                            onChange={(event) =>
                                                setTeamForm((current) => ({ ...current, isAdmin: event.target.checked ? 1 : 0 }))
                                            }
                                        />
                                        Grant admin access
                                    </label>

                                    <div className="flex gap-2">
                                        <Button type="submit" disabled={isTeamUploading}>
                                            {isTeamUploading
                                                ? "Uploading..."
                                                : editingTeamId
                                                    ? "Update Member"
                                                    : "Create Member"}
                                        </Button>
                                        {editingTeamId ? (
                                            <Button type="button" variant="outline" onClick={resetTeamForm}>
                                                Cancel
                                            </Button>
                                        ) : null}
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-slate-900/70">
                            <CardHeader>
                                <CardTitle>Team Members</CardTitle>
                                <CardDescription>Manage all users from the users table.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="text-slate-400">
                                            <tr className="border-b border-white/10">
                                                <th className="px-2 py-2">Name</th>
                                                <th className="px-2 py-2">Role</th>
                                                <th className="px-2 py-2">Email</th>
                                                <th className="px-2 py-2">Admin</th>
                                                <th className="px-2 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamMembers.map((member) => (
                                                <tr key={member.id} className="border-b border-white/5">
                                                    <td className="px-2 py-3 font-medium text-white">{member.full_name}</td>
                                                    <td className="px-2 py-3 text-slate-300">{member.jobTitle}</td>
                                                    <td className="px-2 py-3 text-slate-300">{member.email}</td>
                                                    <td className="px-2 py-3 text-slate-300">{member.isAdmin === 1 ? "Yes" : "No"}</td>
                                                    <td className="px-2 py-3">
                                                        <div className="flex gap-2">
                                                            <Button type="button" size="sm" variant="outline" onClick={() => editTeam(member)}>
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                size="sm"
                                                                variant="destructive"
                                                                onClick={() => void deleteTeam(member.id)}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                ) : null}
            </div>
        </main>
    );
}