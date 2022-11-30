import React, { useEffect, useState } from "react";
import starsSrc from "../assets/stars.svg";

const BlinkStar = () => {
    return (
        <svg className="w-16 h-16 fill-gold" viewBox="0 0 32.51 41.72">
            <defs>
                <filter id="f1">
                    <feTurbulence baseFrequency="0.06 0.3" type="fractalNoise" stitchTiles="stitch" numOctaves="2" seed="2" />
                    <feDisplacementMap in="SourceGraphic" scale="1" />
                </filter>
                <filter id="f2">
                    <feTurbulence baseFrequency="0.01 0.2" type="fractalNoise" stitchTiles="stitch" numOctaves="1" seed="20" />
                    <feDisplacementMap in="SourceGraphic" scale="1.8" />
                </filter>
                <filter id="f3">
                    <feTurbulence baseFrequency="0.02 0.7" type="fractalNoise" stitchTiles="stitch" numOctaves="1" seed="18" />
                    <feDisplacementMap in="SourceGraphic" scale="2.2" />
                </filter>
            </defs>

            <g className="star" id="stars">
                <polygon points="0 20.23 13.2 19.36 13.2 22.36 0 21.48 0 20.23 0 20.23" />
                <polygon points="32.51 21.48 19.31 22.36 19.31 19.36 32.51 20.23 32.51 21.48 32.51 21.48" />
                <polygon points="16.88 0 17.76 17.81 14.76 17.81 15.63 0 16.88 0 16.88 0" />
                <polygon points="15.63 41.72 14.76 23.91 17.76 23.91 16.88 41.72 15.63 41.72 15.63 41.72" />
                <polygon points="7.8 12.3 14.22 17.37 12.86 18.84 7.29 12.84 7.8 12.3 7.8 12.3" />
                <polygon points="25.12 12.84 19.56 18.84 18.2 17.37 24.62 12.3 25.12 12.84 25.12 12.84" />
                <polygon points="7.39 28.66 12.96 22.66 14.31 24.13 7.9 29.21 7.39 28.66 7.39 28.66" />
                <polygon points="24.62 29.21 18.2 24.13 19.56 22.66 25.12 28.66 24.62 29.21 24.62 29.21" />
            </g>
        </svg>
    );
};

export default BlinkStar;

const Star = ({ className }: { className: string }) => {
    return (
        <svg className={className} id="Warstwa_2" data-name="Warstwa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.51 41.72">
            <g className="star" id="stars">
                <polygon points="0 20.23 13.2 19.36 13.2 22.36 0 21.48 0 20.23 0 20.23" />
                <polygon points="32.51 21.48 19.31 22.36 19.31 19.36 32.51 20.23 32.51 21.48 32.51 21.48" />
                <polygon points="16.88 0 17.76 17.81 14.76 17.81 15.63 0 16.88 0 16.88 0" />
                <polygon points="15.63 41.72 14.76 23.91 17.76 23.91 16.88 41.72 15.63 41.72 15.63 41.72" />
                <polygon points="7.8 12.3 14.22 17.37 12.86 18.84 7.29 12.84 7.8 12.3 7.8 12.3" />
                <polygon points="25.12 12.84 19.56 18.84 18.2 17.37 24.62 12.3 25.12 12.84 25.12 12.84" />
                <polygon points="7.39 28.66 12.96 22.66 14.31 24.13 7.9 29.21 7.39 28.66 7.39 28.66" />
                <polygon points="24.62 29.21 18.2 24.13 19.56 22.66 25.12 28.66 24.62 29.21 24.62 29.21" />
            </g>
        </svg>
    );
};
