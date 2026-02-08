import NotFoundImg from "@/assets/not-found.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-8 px-4 md:flex-row">
      <img src={NotFoundImg} alt="Not Found" className="w-1/2 opacity-80 lg:w-1/4" />
      <div className="max-w-xs space-y-3 text-center md:max-w-xl md:text-start">
        <h1 className="text-2xl font-bold tracking-tight">
          Oops! Looks like you're lost.
        </h1>
        <p className="text-muted-foreground">
          This page doesn't exist, but we totally get that overwhelmed feeling. Let's get you back
          on track.
        </p>
        <Link to="/">
          <Button
            size="lg"
            className="mt-4 w-full rounded-full py-6 font-medium shadow-lg shadow-primary/25 md:w-auto md:px-8"
          >
            Go Home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
