
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const BackToTop = () => {
    const [hidden, setHidden] = useState(false)

    const checkScroll = () => {
        if (window.scrollY > 100) setHidden(false);
        else setHidden(true)
    }


    const backtotop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div onLoad={checkScroll} onClick={backtotop} className={`fixed right-4 bottom-4 rounded-full bg-accent p-4 cursor-pointer ${hidden ? 'hidden' : 'flex'}`}>
            <ArrowUp className="w-7 h-7" />
        </div>
    );
};

export default BackToTop;