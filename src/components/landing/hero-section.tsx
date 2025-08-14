import {useEffect, useRef} from 'react';
import { Button } from '../ui/button';

interface Star {
    x: number;
    y: number;
    z: number;
    prevX: number;
    prevY: number;
}

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const starsRef = useRef<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size with proper pixel ratio handling
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            
            ctx.scale(dpr, dpr);
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize stars - reduce count on mobile for better performance
        const isMobile = window.innerWidth < 768;
        const numStars = isMobile ? 400 : 800;
        const speed = isMobile ? 0.02 : 0.025;
        
        const getCanvasSize = () => ({
            width: canvas.getBoundingClientRect().width,
            height: canvas.getBoundingClientRect().height
        });

        // Create stars
        const initializeStars = () => {
            const { width, height } = getCanvasSize();
            const centerX = width / 2;
            const centerY = height / 2;
            
            starsRef.current = Array.from({ length: numStars }, () => ({
                x: Math.random() * width - centerX,
                y: Math.random() * height - centerY,
                z: Math.random() * 1000,
                prevX: 0,
                prevY: 0,
            }));
        };

        initializeStars();

        const animate = () => {
            const { width, height } = getCanvasSize();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            const currentCenterX = width / 2;
            const currentCenterY = height / 2;

            starsRef.current.forEach((star) => {
                // Store previous position
                star.prevX = star.x / star.z * 256 + currentCenterX;
                star.prevY = star.y / star.z * 256 + currentCenterY;

                // Move star towards viewer
                star.z -= speed * 100;

                // Reset star if it gets too close
                if (star.z <= 0) {
                    star.x = Math.random() * width - currentCenterX;
                    star.y = Math.random() * height - currentCenterY;
                    star.z = 1000;
                }

                // Calculate current position
                const x = star.x / star.z * 256 + currentCenterX;
                const y = star.y / star.z * 256 + currentCenterY;

                // Calculate opacity and size based on distance
                const opacity = Math.min(1 - star.z / 1000, 1);
                const size = Math.max(1 - star.z / 1000, 0) * (isMobile ? 2 : 3);

                // Draw star trail
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
                ctx.lineWidth = size;
                ctx.beginPath();
                ctx.moveTo(star.prevX, star.prevY);
                ctx.lineTo(x, y);
                ctx.stroke();

                // Draw star point
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full h-screen bg-black overflow-hidden relative">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            <div className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Innovative Software Solutions for Your Business
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        We are a leading software development company dedicated to providing cutting-edge solutions
                        tailored to meet your specific business needs.
                    </p>
                    <div className="flex items-center justify-center gap-2 flex-col sm:flex-row sm:mt-12">
                        <Button className='font-medium rounded-full w-full sm:w-96 py-7 text-lg'>
                            Get Started
                        </Button>
                    </div>
                    <div className="mt-4">
                        <a
                            href="https://www.trustpilot.com/evaluate/codehuntspk.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex underline items-center text-sm hover:text-green-400 transition-colors"
                        >
                            Review us on Trustpilot
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}