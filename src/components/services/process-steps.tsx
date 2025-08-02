import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";


interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
                                                     number,
                                                     title,
                                                     description,
                                                     bgColor,
                                                     textColor,
                                                 }) => (

    <Card>
        <CardHeader>
            <div className={`icon-circle ${bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110`}>
                <span className={`text-2xl font-bold ${textColor}`}>{number}</span>
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>

                {description}
        </CardContent>

    </Card>
);




export default ProcessStep;