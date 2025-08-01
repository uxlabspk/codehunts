

import React from 'react';
import HeroSection from "@/components/common/hero-section.tsx";
import ProjectCards from "@/components/portfolio/project-cards.tsx";



const Portfolio: React.FC = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <HeroSection
                title={'Our Portfolio'}
                description={'Showcasing innovative software solutions that drive business growth and digital transformation'}
                hasLinks={false}
            />

            <ProjectCards />

        </div>
    );
};

export default Portfolio;