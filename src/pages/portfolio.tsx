import React from 'react';
import HeroSection from "@/components/common/hero-section.tsx";
import ProjectCards from "@/components/portfolio/project-cards.tsx";
import {BriefcaseBusiness} from "lucide-react";


const Portfolio: React.FC = () => {

    return (
        <>
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

            {/* Project Cards */}
            <ProjectCards />
        </>
    );
};

export default Portfolio;