import React, { useEffect, useRef } from "react";
import { ParallaxScroll } from "./ParallaxScroll";
import { useScroll, useTransform, motion, useMotionValueEvent, useSpring, MotionValue } from "framer-motion";
import { cn } from "../utils/cn";

type ImagesGalleryProps = {
    scrollYProgress: MotionValue<number>;
};

const ImagesGallery = (props: ImagesGalleryProps) => {
    const container = useRef(null);

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(props.scrollYProgress, [0, 1], [0, 100]), springConfig);
    const translateXReverse = useSpring(useTransform(props.scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(props.scrollYProgress, [0, 0.2], [10, 0]), springConfig);
    const opacity = useSpring(useTransform(props.scrollYProgress, [0, 0.2], [0.1, 1]), springConfig);
    const translateY = useSpring(useTransform(props.scrollYProgress, [0, 0.2], [-2 * window.innerHeight, 300]), springConfig);

    return (
        <div className="[perspective:1000px] [transform-style:preserve-3d] antialiased">
            <motion.div
                style={{
                    rotateX,
                    translateY,
                    opacity
                }}
                className="w-fit mx-auto flex gap-4 mb-96"
                ref={container}
            >
                <div className="flex flex-col gap-2">
                    {lineImages.map(src => (
                        <img src={src} alt="tattoo" className={cn("rounded-sm relative cover w-64")} />
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {shadowImages.map(src => (
                        <img src={src} alt="tattoo" className="rounded-sm cover w-64" />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
const shadowImages = [
    "/tattoos/shadow1.jpg",
    "/tattoos/shadow2.jpg",
    "/tattoos/shadow3.jpg",
    "/tattoos/shadow4.jpg",
    "/tattoos/shadow5.jpg",
    "/tattoos/shadow6.jpg",
    "/tattoos/shadow7.jpg",
    "/tattoos/shadow8.jpg",
    "/tattoos/shadow9.jpg",
    "/tattoos/shadow10.jpg",
    "/tattoos/shadow11.jpg"
];

const lineImages = [
    "/tattoos/line1.jpg",
    "/tattoos/line2.jpg",
    "/tattoos/line3.jpg",
    "/tattoos/line4.jpg",
    "/tattoos/line5.jpg",
    "/tattoos/line6.jpg",
    "/tattoos/line7.jpg",
    "/tattoos/line8.jpg",
    "/tattoos/line9.jpg",
    "/tattoos/line10.jpg"
];

export default ImagesGallery;
