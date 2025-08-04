import NotFoundImg from '@/assets/not-found.png';
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Home} from "lucide-react";


export default function NotFound() {
    return (
        <div className={'w-full h-screen flex flex-col md:flex-row items-center justify-center gap-4'}>
            <img src={NotFoundImg} alt={'Not Found'} className={'w-1/2 lg:w-1/4'} />
            <div className={'text-center md:text-start max-w-xs md:max-w-xl space-y-2'}>
                <h1 className={'text-2xl font-medium'}>Oops! Looks like you're lost in the chaos.</h1>
                <p>This page doesn’t exist, but we totally get that overwhelmed feeling. Let’s get you back on track.</p>
                <Link to={'/'}>
                    <Button
                        size={'lg'}
                        className={'rounded-full w-full md:w-36 py-7 font-medium mt-4'}
                    >
                        <Home className={'w-5 h-5'} />
                        Go Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}