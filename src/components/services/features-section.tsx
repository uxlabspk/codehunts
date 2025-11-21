import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, iconBgColor }) => (
  <Card>
    <CardHeader>
      <span
        className={`icon-circle ${iconBgColor} mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110`}
      >
        {icon}
      </span>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

export default Feature;
