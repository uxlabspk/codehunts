import React from "react";
import {CheckCircle} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";


interface UseCaseProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    iconBgColor: string;
    iconColor: string;
}


const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, features, iconBgColor, iconColor }) => (
    <Card>
        <CardHeader>
            <span
                className={`icon-circle ${iconBgColor} ${iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110`}>{icon}</span>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {description} <br />
            <ul className="mt-5 space-y-2 text-sm">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

export default UseCase