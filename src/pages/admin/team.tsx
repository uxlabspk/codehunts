import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { config } from '../../config/env';

interface TeamMember {
    id: number;
    name: string;
    position: string;
    image_url: string;
    github_url?: string;
    linkedin_url?: string;
    twitter_url?: string;
    website_url?: string;
    display_order: number;
    is_active: boolean;
}

export default function AdminTeam() {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetch(`${config.api.baseUrl}/api/team.php`, {
                credentials: 'include',
            });
            const data = await response.json();

            if (data.success) {
                setMembers(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this team member?')) return;

        try {
            const response = await fetch(`${config.api.baseUrl}/api/team.php?id=${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            const data = await response.json();

            if (data.success) {
                setMembers(members.filter((m) => m.id !== id));
            } else {
                alert('Failed to delete team member');
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Failed to delete team member');
        }
    };

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
                    <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Manage your team members
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        to="/admin/team/new"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Team Member
                    </Link>
                </div>
            </div>

            {/* Team Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    src={member.image_url || '/team/default-avatar.png'}
                                    alt={member.name}
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{member.position}</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mb-4">
                                {member.github_url && (
                                    <a
                                        href={member.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {member.linkedin_url && (
                                    <a
                                        href={member.linkedin_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {member.twitter_url && (
                                    <a
                                        href={member.twitter_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                )}
                                {member.website_url && (
                                    <a
                                        href={member.website_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Globe className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-4 border-t border-gray-200">
                                <Link
                                    to={`/admin/team/edit/${member.id}`}
                                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(member.id)}
                                    className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                                >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {members.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No team members found</p>
                </div>
            )}
        </div>
    );
}
