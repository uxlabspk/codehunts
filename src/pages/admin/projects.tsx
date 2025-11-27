import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';
import { config } from '../../config/env';
import type { Project } from '../../types';

export default function AdminProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        fetchProjects();
    }, [filter]);

    const fetchProjects = async () => {
        try {
            const url = filter === 'all'
                ? `${config.api.baseUrl}/api/projects.php`
                : `${config.api.baseUrl}/api/projects.php?category=${filter}`;

            const response = await fetch(url, { credentials: 'include' });
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

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const response = await fetch(`${config.api.baseUrl}/api/projects.php?id=${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            const data = await response.json();

            if (data.success) {
                setProjects(projects.filter(p => p.id !== id));
            } else {
                alert('Failed to delete project');
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Failed to delete project');
        }
    };

    const categories = ['all', 'web', 'mobile', 'blockchain'];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Manage your portfolio projects
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        to="/admin/projects/new"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                    </Link>
                </div>
            </div>

            {/* Filter */}
            <div className="mt-6 flex gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${filter === cat
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500 uppercase">
                                    {project.category}
                                </span>
                                <div className="flex gap-2">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 text-gray-400 hover:text-blue-600"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                    <Link
                                        to={`/admin/projects/edit/${project.id}`}
                                        className="p-1 text-gray-400 hover:text-blue-600"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="p-1 text-gray-400 hover:text-red-600"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No projects found</p>
                </div>
            )}
        </div>
    );
}
