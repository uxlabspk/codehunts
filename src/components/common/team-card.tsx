import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { Verified } from "lucide-react";


interface TeamCardProps {
    img: string,
    name: string,
    position: string,
    isVerified: boolean,
    socials: any
}

export default function TeamCard(prop: TeamCardProps) {
    return (
        <Card>
            <CardHeader>
                <img
                    src={prop.img}
                    alt={'<NAME>'}
                    className={'w-48 h-48 rounded-full mx-auto'}
                />
                <CardTitle className={'flex items-center justify-center gap-1 mt-8 text-orange-400 text-xl font-medium'}>{prop.name} {prop.isVerified ? <Verified className="w-5" /> : ""}</CardTitle>
                <CardDescription className={'w-full text-center text-white'}>{prop.position}</CardDescription>
            </CardHeader>
            <CardContent>
                {prop.socials}
            </CardContent>
        </Card>
    )
}