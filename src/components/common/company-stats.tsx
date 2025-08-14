import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Briefcase, Calendar } from 'lucide-react';

const stats = [
    {
        icon: <Calendar className="w-8 h-8 text-blue-600" />,
        value: 2,
        suffix: '+',
        label: 'Years Experience',
    },
    {
        icon: <Briefcase className="w-8 h-8 text-green-600" />,
        value: 100,
        suffix: '+',
        label: 'Projects Completed',
    },
    {
        icon: <Star className="w-8 h-8 text-yellow-600" />,
        value: 3.9,
        suffix: '/5',
        label: 'Trustpilot Rating',
        decimals: 1,
    },
    {
        icon: <Users className="w-8 h-8 text-purple-600" />,
        value: 150,
        suffix: '+',
        label: 'Happy Customers',
    },
];

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, decimals: number = 0, startAnimation: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (!startAnimation) return;
        
        let startTime: number;
        let animationFrame: number;
        
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = end * easeOutQuart;
            
            setCount(Number(currentCount.toFixed(decimals)));
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, decimals, startAnimation]);
    
    return count;
};

// Individual animated stat component
const AnimatedStat: React.FC<{
    stat: typeof stats[0];
    startAnimation: boolean;
}> = ({ stat, startAnimation }) => {
    const animatedValue = useCountUp(stat.value, 2000, stat.decimals || 0, startAnimation);
    
    return (
        <Card className="text-center shadow-md p-6">
            <CardContent>
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {animatedValue}{stat.suffix}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
            </CardContent>
        </Card>
    );
};

const CompanyStats: React.FC = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !startAnimation) {
                        setStartAnimation(true);
                    }
                });
            },
            { threshold: 0.3 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [startAnimation]);
    
    return (
        <section ref={sectionRef} className="py-16 bg-black">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Story</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Numbers that speak for our commitment to excellence and client satisfaction
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
                    {stats.map((stat, index) => (
                        <AnimatedStat 
                            key={index} 
                            stat={stat} 
                            startAnimation={startAnimation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyStats;
