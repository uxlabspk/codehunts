import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 100) setHidden(false);
      else setHidden(true);
    };

    window.addEventListener("scroll", checkScroll);

    // Run initially
    checkScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={backToTop}
      className={`fixed right-4 bottom-4 rounded-full bg-accent p-3 cursor-pointer transition-opacity duration-300 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </div>
  );
};

export default BackToTop;
