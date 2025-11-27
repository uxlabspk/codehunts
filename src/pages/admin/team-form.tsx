import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import { config } from '../../config/env';

interface TeamMemberForm {
    name: string;
    position: string;
    image: string;
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
    displayOrder: number;
    isActive: boolean;
}

export default function TeamForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<TeamMemberForm>({
        name: '',
        position: '',
        image: '',
        github: '',
        linkedin: '',
        twitter: '',
        website: '',
        displayOrder: 999,
        isActive: true,
    });

    useEffect(() => {
        if (id) {
            fetchMember();
        }
    }, [id]);

    const fetchMember = async () => {
        try {
            const response = await fetch(`${config.api.baseUrl}/api/team.php?id=${id}`, {
                credentials: 'include',
            });
            const data = await response.json();

            if (data.success) {
                const member = data.data;
                setFormData({
                    name: member.name,
                    position: member.position,
                    image: member.image_url || '',
                    github: member.github_url || '',
                    linkedin: member.linkedin_url || '',
                    twitter: member.twitter_url || '',
                    website: member.website_url || '',
                    displayOrder: member.display_order,
                    isActive: member.is_active,
                });
            }
        } catch (error) {
            console.error('Failed to fetch team member:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = id
                ? `${config.api.baseUrl}/api/team.php?id=${id}`
                : `${config.api.baseUrl}/api/team.php`;

            const response = await fetch(url, {
                method: id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                navigate('/admin/team');
            } else {
                alert(data.error || 'Failed to save team member');
            }
        } catch (error) {
            console.error('Save error:', error);
            alert('Failed to save team member');
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('type', 'team');

        try {
            const response = await fetch(`${config.api.baseUrl}/api/upload.php`, {
                method: 'POST',
                credentials: 'include',
                body: uploadFormData,
            });

            const data = await response.json();

            if (data.success) {
                setFormData({ ...formData, image: data.data.url });
            } else {
                alert(data.error || 'Upload failed');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
                <button
                    onClick={() => navigate('/admin/team')}
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Team
                </button>
            </div>

            <div className="sm:flex sm:items-center mb-6">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        {id ? 'Edit Team Member' : 'Add New Team Member'}
                    </h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Position */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Software Engineer"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Image
                    </label>
                    <div className="flex items-center gap-4">
                        {formData.image && (
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        )}
                        <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <Upload className="w-4 h-4 mr-2" />
                            {uploading ? 'Uploading...' : 'Upload Image'}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                disabled={uploading}
                            />
                        </label>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Or enter image URL:</p>
                    <input
                        type="url"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://... or /team/image.png"
                    />
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Social Media Links</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            GitHub URL
                        </label>
                        <input
                            type="url"
                            value={formData.github}
                            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://github.com/username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            LinkedIn URL
                        </label>
                        <input
                            type="url"
                            value={formData.linkedin}
                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://linkedin.com/in/username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Twitter URL
                        </label>
                        <input
                            type="url"
                            value={formData.twitter}
                            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://twitter.com/username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Website URL
                        </label>
                        <input
                            type="url"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://yourwebsite.com"
                        />
                    </div>
                </div>

                {/* Display Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Display Order
                        </label>
                        <input
                            type="number"
                            min="0"
                            value={formData.displayOrder}
                            onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Lower numbers appear first"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                        </label>
                        <select
                            value={formData.isActive ? '1' : '0'}
                            onChange={(e) => setFormData({ ...formData, isActive: e.target.value === '1' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/team')}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Saving...' : id ? 'Update Member' : 'Create Member'}
                    </button>
                </div>
            </form>
        </div>
    );
}
