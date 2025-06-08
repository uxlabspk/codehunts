import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ProfileCard = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="relative w-52 h-64 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl p-4 group overflow-hidden transition-all duration-500">
            {/* Background image */}
            <div
                className="absolute inset-0 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url('https://placehold.co/600x400')` }}
            >
                <div className="absolute inset-0 bg-black/30 rounded-xl" />
            </div>

            {/* Overlay content */}
            <div className="relative h-full w-full flex flex-col items-center justify-center text-white text-center transition-all duration-500">
                <h3 className="font-semibold text-lg mb-2">Chanda Jha</h3>

                {/* Social links */}
                <div
                    className={`flex gap-4 items-center transition-all duration-500 ${
                        showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                >
                    <a href="#" className="bg-white p-2 rounded-full text-black hover:scale-110 transition">
                        {/* LinkedIn icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761...z" />
                        </svg>
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-black hover:scale-110 transition">
                        {/* Instagram icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M12 2.2c3.2 0 3.584...z" />
                        </svg>
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-black hover:scale-110 transition">
                        {/* Twitter icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M23 2.999c-.8.4-1.6...z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Toggle button */}
            <button
                onClick={() => setShowLinks(!showLinks)}
                className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors duration-300"
            >
                <ChevronDownIcon
                    className={`h-4 w-4 text-white transform transition-transform duration-300 ${
                        showLinks ? 'rotate-180' : ''
                    }`}
                />
            </button>
        </div>
    );
};

export default ProfileCard;
