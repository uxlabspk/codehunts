import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Briefcase, Calendar } from 'lucide-react';

const stats = [
    {
        icon: <Calendar className="w-8 h-8 text-blue-600" />,
        value: '2+',
        label: 'Years Experience',
    },
    {
        icon: <Briefcase className="w-8 h-8 text-green-600" />,
        value: '100+',
        label: 'Projects Completed',
    },
    {
        icon: <Star className="w-8 h-8 text-yellow-600" />,
        value: '3.9/5',
        label: 'Trustpilot Rating',
    },
    {
        icon: <Users className="w-8 h-8 text-purple-600" />,
        value: '150+',
        label: 'Happy Customers',
    },
];

const CompanyStats: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Story</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Numbers that speak for our commitment to excellence and client satisfaction
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center shadow-md p-6">
                            <CardContent>
                                <div className="mb-4 flex justify-center">{stat.icon}</div>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyStats;
