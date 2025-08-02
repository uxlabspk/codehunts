import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";


interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBgColor: string;
}


const Feature: React.FC<FeatureProps> = ({icon, title, description, iconBgColor}) => (
    <Card>
        <CardHeader>
            <span
                className={`icon-circle ${iconBgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110`}>{icon}</span>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {description}
        </CardContent>
    </Card>
);


export default Feature;