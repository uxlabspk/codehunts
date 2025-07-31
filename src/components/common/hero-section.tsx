import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

interface HeroSectionProps {
    title: string
    description: string
    hasLinks: boolean
    linkUrl?: string
    linkText?: string
}


export default function HeroSection({title, description, hasLinks, linkUrl, linkText}: HeroSectionProps) {
    return(
        <div className={'w-full bg-black overflow-hidden'}>
            <div className={'container mx-auto h-[60vh] flex flex-col items-center justify-center text-center'}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-lg max-w-2xl mx-auto">{description}</p>
                {hasLinks && (
                    <Link  to={linkUrl ? linkUrl : ''}>
                        <Button className={'text-lg px-14 py-6 rounded-full'} >{linkText}</Button>
                    </Link>
                )}
            </div>
        </div>
    )
}