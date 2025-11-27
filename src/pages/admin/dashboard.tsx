import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderKanban, Users, Mail } from 'lucide-react';
import { config } from '../../config/env';

interface Stats {
    projects: number;
    team: number;
    contacts: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats>({ projects: 0, team: 0, contacts: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [projectsRes, teamRes] = await Promise.all([
                fetch(`${config.api.baseUrl}/api/projects.php`, { credentials: 'include' }),
                fetch(`${config.api.baseUrl}/api/team.php`, { credentials: 'include' }),
            ]);

            const projectsData = await projectsRes.json();
            const teamData = await teamRes.json();

            setStats({
                projects: projectsData.success ? projectsData.data.length : 0,
                team: teamData.success ? teamData.data.length : 0,
                contacts: 0, // Can be added later
            });
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        {
            title: 'Total Projects',
            value: stats.projects,
            icon: FolderKanban,
            link: '/admin/projects',
            color: 'bg-blue-500',
        },
        {
            title: 'Team Members',
            value: stats.team,
            icon: Users,
            link: '/admin/team',
            color: 'bg-green-500',
        },
        {
            title: 'Contact Submissions',
            value: stats.contacts,
            icon: Mail,
            link: '#',
            color: 'bg-purple-500',
        },
    ];

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
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Overview of your website content and statistics.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {statCards.map((stat) => (
                    <Link
                        key={stat.title}
                        to={stat.link}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <dt>
                            <div className={`absolute ${stat.color} rounded-md p-3`}>
                                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{stat.title}</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <span className="font-medium text-blue-600 hover:text-blue-500">
                                        View all →
                                    </span>
                                </div>
                            </div>
                        </dd>
                    </Link>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
                <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                    <Link
                        to="/admin/projects/new"
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center">
                            <FolderKanban className="h-5 w-5 text-gray-400 mr-3" />
                            <span className="text-sm font-medium text-gray-900">Add New Project</span>
                        </div>
                    </Link>
                    <Link
                        to="/admin/team/new"
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center">
                            <Users className="h-5 w-5 text-gray-400 mr-3" />
                            <span className="text-sm font-medium text-gray-900">Add Team Member</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
