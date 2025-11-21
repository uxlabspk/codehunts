import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Verified } from "lucide-react";

interface TeamCardProps {
  img: string;
  name: string;
  position: string;
  isVerified: boolean;
  socials: React.ReactNode;
}

export default function TeamCard(prop: TeamCardProps) {
  return (
    <Card>
      <CardHeader>
        <img src={prop.img} alt={"<NAME>"} className={"mx-auto h-48 w-48 rounded-full"} />
        <CardTitle
          className={
            "mt-8 flex items-center justify-center gap-1 text-xl font-medium text-orange-400"
          }
        >
          {prop.name} {prop.isVerified ? <Verified className="w-5" /> : ""}
        </CardTitle>
        <CardDescription className={"w-full text-center text-white"}>
          {prop.position}
        </CardDescription>
      </CardHeader>
      <CardContent>{prop.socials}</CardContent>
    </Card>
  );
}
