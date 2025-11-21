import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Check, Vote } from "lucide-react";

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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with proper pixel ratio handling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars - reduce count on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const numStars = isMobile ? 400 : 800;
    const speed = isMobile ? 0.02 : 0.025;

    const getCanvasSize = () => ({
      width: canvas.getBoundingClientRect().width,
      height: canvas.getBoundingClientRect().height,
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
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      const currentCenterX = width / 2;
      const currentCenterY = height / 2;

      starsRef.current.forEach((star) => {
        // Store previous position
        star.prevX = (star.x / star.z) * 256 + currentCenterX;
        star.prevY = (star.y / star.z) * 256 + currentCenterY;

        // Move star towards viewer
        star.z -= speed * 100;

        // Reset star if it gets too close
        if (star.z <= 0) {
          star.x = Math.random() * width - currentCenterX;
          star.y = Math.random() * height - currentCenterY;
          star.z = 1000;
        }

        // Calculate current position
        const x = (star.x / star.z) * 256 + currentCenterX;
        const y = (star.y / star.z) * 256 + currentCenterY;

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
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 mx-auto flex max-w-4xl items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Innovative Software Solutions for Your Business
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            We are a leading software development company dedicated to providing cutting-edge
            solutions tailored to meet your specific business needs.
          </p>
          <div className={"mx-auto grid max-w-xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2"}>
            <Button className="flex-1 rounded-full py-7 text-lg font-medium">
              <Check />
              Get Started
            </Button>

            <a
              href="https://www.trustpilot.com/evaluate/codehuntspk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"outline"} className="w-full rounded-full py-7 text-lg font-medium">
                <Vote />
                Review us on Trustpilot
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
