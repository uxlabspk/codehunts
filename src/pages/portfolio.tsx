

import React from 'react';
import HeroSection from "@/components/common/hero-section.tsx";
import ProjectCards from "@/components/portfolio/project-cards.tsx";
import {BriefcaseBusiness} from "lucide-react";



const Portfolio: React.FC = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <HeroSection
                title={'Our Portfolio of Success'}
                description={'Explore our diverse range of projects that showcase our expertise in creating innovative software solutions for businesses worldwide.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <>
                        <BriefcaseBusiness className="w-5 h-5 mr-2" />
                        Our Portfolio
                    </>
                }
            />

            <ProjectCards />

        </div>
    );
};

export default Portfolio;