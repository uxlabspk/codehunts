import {useEffect, useState} from "react";
import { ArrowUpIcon } from '@heroicons/react/24/solid'; // or /outline


export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="cursor-pointer fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-800 text-white shadow-lg hover:bg-amber-900 transition-all"
                aria-label="Back to top"
            >
                <ArrowUpIcon className="w-5 h-5" />
            </button>
        )
    )
}