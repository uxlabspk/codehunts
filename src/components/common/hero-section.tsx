import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import React from "react";


interface HeroSectionProps {
    title: string
    description: string
    hasLinks: boolean
    linkUrl?: string
    linkText?: string
    hasCategory: boolean
    category?: React.ReactNode
}


export default function HeroSection({title, description, hasLinks, linkUrl, linkText, hasCategory, category}: HeroSectionProps) {
    return(
        <div className={'w-full bg-black overflow-hidden px-4 sm:px-0'}>
            <div className={'container mx-auto h-[60vh] flex flex-col items-center justify-center text-center'}>
                {hasCategory && (
                    <div className="inline-flex items-center bg-gray-50 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        {category}
                    </div>
                )}
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