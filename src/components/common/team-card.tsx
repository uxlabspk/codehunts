import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";


interface TeamCardProps {
    img: string,
    name: string,
    position: string,
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
                <CardTitle className={'w-full text-center mt-8 text-white font-medium'}>{prop.name}</CardTitle>
                <CardDescription className={'w-full text-center mt-2 text-white'}>{prop.position}</CardDescription>
            </CardHeader>
            <CardContent>
                {prop.socials}
            </CardContent>
        </Card>
    )
}