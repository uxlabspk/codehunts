import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface StarParticle {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const starsRef = useRef<StarParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    const isMobile = window.innerWidth < 768;
    const numStars = isMobile ? 300 : 600;
    const speed = isMobile ? 0.02 : 0.025;

    const getCanvasSize = () => ({
      width: canvas.getBoundingClientRect().width,
      height: canvas.getBoundingClientRect().height,
    });

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
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      starsRef.current.forEach((star) => {
        star.prevX = (star.x / star.z) * 256 + cx;
        star.prevY = (star.y / star.z) * 256 + cy;
        star.z -= speed * 100;

        if (star.z <= 0) {
          star.x = Math.random() * width - cx;
          star.y = Math.random() * height - cy;
          star.z = 1000;
        }

        const x = (star.x / star.z) * 256 + cx;
        const y = (star.y / star.z) * 256 + cy;
        const opacity = Math.min(1 - star.z / 1000, 1);
        const size = Math.max(1 - star.z / 1000, 0) * (isMobile ? 2 : 2.5);

        ctx.strokeStyle = `rgba(255, 200, 120, ${opacity * 0.4})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(star.prevX, star.prevY);
        ctx.lineTo(x, y);
        ctx.stroke();

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
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-sm font-medium text-primary">
          <Star className="h-3.5 w-3.5" />
          Trusted by 150+ businesses worldwide
        </div>

        <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
          Innovative Software
          <br />
          <span className="text-gradient">Solutions</span> for Your Business
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We craft cutting-edge digital experiences — from web apps to AI solutions — tailored to
          drive your business forward.
        </p>

        <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
          <Link to="/lets-talk">
            <Button
              size="lg"
              className="w-full rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40 sm:w-auto"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <a
            href="https://www.trustpilot.com/evaluate/codehuntspk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full px-8 py-6 text-base font-medium sm:w-auto"
            >
              <Star className="h-4 w-4" />
              Review us on Trustpilot
            </Button>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>99% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>100+ Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span>3.9/5 Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
