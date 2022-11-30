import moleSrc from "./assets/cma.svg";
import Leafs from "./components/Leafs";
import Tilt from "react-parallax-tilt";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import TextAnim from "./components/TextAnim";
import Moth from "./components/Moth";
import Bg from "./components/Bg";
import BlinkStar from "./components/BlinkStar";
import MothTwo from "./components/Moth2";

function App() {
    return (
        <div className="relative overflow-hidden w-screen justify-center h-screen bg-grainy-bg bg-cover bg-no-repeat bg-center ">
            <Tilt>
                <div className="w-screen h-screen flex items-center justify-center flex-col z-50">
                    {/* <img src={moleSrc} width={450} alt="cma" className="fill-amber-100 stroke-amber-300" /> */}
                    <MothTwo />
                    <TextAnim />
                    <div className="flex gap-4 mt-4">
                        <BlinkStar />
                        <MediaLink href="">
                            <FaInstagramSquare />
                        </MediaLink>
                        <MediaLink href="">
                            <FaFacebook />
                        </MediaLink>
                        <MediaLink href="">
                            <GoMail />
                        </MediaLink>
                        <BlinkStar />
                    </div>
                </div>
            </Tilt>
        </div>
    );
}

export default App;

function MediaLink({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a className="text-5xl hover:scale-110  text-gold" href={href}>
            {children}
        </a>
    );
}
