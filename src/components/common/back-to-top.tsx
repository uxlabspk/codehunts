import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) setHidden(false);
      else setHidden(true);
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={backToTop}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-card/80 text-muted-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-primary/10 ${hidden ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default BackToTop;
