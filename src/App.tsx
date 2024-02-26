import moleSrc from "./assets/cma.svg";
import Leafs from "./components/Leafs";
import Tilt from "react-parallax-tilt";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import TextAnim from "./components/TextAnim";
import Moth from "./components/Moth";
import Bg from "./components/Bg";
import BlinkStar from "./components/BlinkStar";
import Calendar from "./components/Calendar";
import { SparklesCore } from "./components/Sparkles";
import ImagesGallery from "./components/ImagesGallery";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function App() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change", latest => {
        console.log("Page scroll: ", latest);
    });
    return (
        <div ref={container} className="relative overflow-hidden justify-center">
            <div className="h-screen s bg-no-repeat bg-center bg-cover flex xl:bg-contain items-center justify-center flex-col z-50">
                {/* <img src={moleSrc} width={450} alt="cma" className="fill-amber-100 stroke-amber-300" /> */}
                <Moth />
                <TextAnim />

                <div className="flex gap-4 mt-4">
                    <BlinkStar />
                    <MediaLink href="https://www.instagram.com/patka_tattoos">
                        <FaInstagramSquare />
                    </MediaLink>
                    <MediaLink href="https://www.facebook.com/profile.php?id=100088162022824">
                        <FaFacebook />
                    </MediaLink>
                    <MediaLink href="mailto:patkaa.tattoos@gmail.com">
                        <GoMail />
                    </MediaLink>
                    <BlinkStar />
                </div>
            </div>
            <ImagesGallery scrollYProgress={scrollYProgress} />
        </div>
    );
}

export default App;

function MediaLink({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a target="_blank" className="text-5xl hover:scale-110  text-gold" href={href}>
            {children}
        </a>
    );
}
