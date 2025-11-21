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
      className={`bg-accent fixed right-4 bottom-4 cursor-pointer rounded-full p-3 transition-opacity duration-300 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </div>
  );
};

export default BackToTop;
