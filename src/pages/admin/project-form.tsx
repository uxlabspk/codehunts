import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { config } from '../../config/env';
import type { Project } from '../../types';

export default function ProjectForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<Partial<Project>>({
        title: '',
        description: '',
        longDescription: '',
        image: '',
        tags: [],
        category: 'web',
        demoUrl: '',
        githubUrl: '',
        completedDate: '',
        teamSize: 1,
        features: [],
    });
    const [tagInput, setTagInput] = useState('');
    const [featureInput, setFeatureInput] = useState('');

    useEffect(() => {
        if (id) {
            fetchProject();
        }
    }, [id]);

    const fetchProject = async () => {
        try {
            const response = await fetch(`${config.api.baseUrl}/api/projects.php?id=${id}`, {
                credentials: 'include',
            });
            const data = await response.json();

            if (data.success) {
                setFormData(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch project:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = id
                ? `${config.api.baseUrl}/api/projects.php?id=${id}`
                : `${config.api.baseUrl}/api/projects.php`;

            const response = await fetch(url, {
                method: id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                navigate('/admin/projects');
            } else {
                alert(data.error || 'Failed to save project');
            }
        } catch (error) {
            console.error('Save error:', error);
            alert('Failed to save project');
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
        uploadFormData.append('type', 'projects');

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

    const addTag = () => {
        if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
            setFormData({
                ...formData,
                tags: [...(formData.tags || []), tagInput.trim()],
            });
            setTagInput('');
        }
    };

    const removeTag = (tag: string) => {
        setFormData({
            ...formData,
            tags: formData.tags?.filter((t) => t !== tag) || [],
        });
    };

    const addFeature = () => {
        if (featureInput.trim() && !formData.features?.includes(featureInput.trim())) {
            setFormData({
                ...formData,
                features: [...(formData.features || []), featureInput.trim()],
            });
            setFeatureInput('');
        }
    };

    const removeFeature = (feature: string) => {
        setFormData({
            ...formData,
            features: formData.features?.filter((f) => f !== feature) || [],
        });
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
                <button
                    onClick={() => navigate('/admin/projects')}
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </button>
            </div>

            <div className="sm:flex sm:items-center mb-6">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        {id ? 'Edit Project' : 'Add New Project'}
                    </h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Short Description *
                    </label>
                    <textarea
                        required
                        rows={2}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Long Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Long Description *
                    </label>
                    <textarea
                        required
                        rows={4}
                        value={formData.longDescription}
                        onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Image
                    </label>
                    <div className="flex items-center gap-4">
                        {formData.image && (
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-md"
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
                        placeholder="https://..."
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                    </label>
                    <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="blockchain">Blockchain</option>
                    </select>
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Technologies/Tags *
                    </label>
                    <div className="flex gap-2 mb-2">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter tag and press Enter"
                        />
                        <button
                            type="button"
                            onClick={addTag}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Add
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formData.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => removeTag(tag)}
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Features *
                    </label>
                    <div className="flex gap-2 mb-2">
                        <input
                            type="text"
                            value={featureInput}
                            onChange={(e) => setFeatureInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter feature and press Enter"
                        />
                        <button
                            type="button"
                            onClick={addFeature}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="space-y-1">
                        {formData.features?.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded"
                            >
                                <span className="text-sm">{feature}</span>
                                <button
                                    type="button"
                                    onClick={() => removeFeature(feature)}
                                    className="text-gray-500 hover:text-red-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Demo URL
                        </label>
                        <input
                            type="url"
                            value={formData.demoUrl}
                            onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            GitHub URL
                        </label>
                        <input
                            type="url"
                            value={formData.githubUrl}
                            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://github.com/..."
                        />
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Completed Date
                        </label>
                        <input
                            type="text"
                            value={formData.completedDate}
                            onChange={(e) => setFormData({ ...formData, completedDate: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., March 2024"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Team Size
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={formData.teamSize}
                            onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/projects')}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Saving...' : id ? 'Update Project' : 'Create Project'}
                    </button>
                </div>
            </form>
        </div>
    );
}
