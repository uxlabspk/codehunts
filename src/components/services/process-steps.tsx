import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

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
      <div
        className={`icon-circle ${bgColor} mb-6 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110`}
      >
        <span className={`text-2xl font-bold ${textColor}`}>{number}</span>
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

export default ProcessStep;
