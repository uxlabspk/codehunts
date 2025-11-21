import NotFoundImg from "@/assets/not-found.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className={"flex h-screen w-full flex-col items-center justify-center gap-4 md:flex-row"}>
      <img src={NotFoundImg} alt={"Not Found"} className={"w-1/2 lg:w-1/4"} />
      <div className={"max-w-xs space-y-2 text-center md:max-w-xl md:text-start"}>
        <h1 className={"text-2xl font-medium"}>Oops! Looks like you're lost in the chaos.</h1>
        <p>
          This page doesn’t exist, but we totally get that overwhelmed feeling. Let’s get you back
          on track.
        </p>
        <Link to={"/"}>
          <Button size={"lg"} className={"mt-4 w-full rounded-full py-7 font-medium md:w-36"}>
            <Home className={"h-5 w-5"} />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
