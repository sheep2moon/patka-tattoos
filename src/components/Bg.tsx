import React from "react";

const Bg = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" width="700" height="700">
                <defs>
                    <radialGradient id="gggrain-gradient" r="0.4">
                        <stop offset="0%" stop-color="#1b1301"></stop>
                        <stop offset="50%" stop-color="#1b1301ff"></stop>
                        <stop offset="100%" stop-color="#000000ff"></stop>
                    </radialGradient>
                    <filter id="gggrain-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" seed="35" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                        <feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="colormatrix"></feColorMatrix>
                        <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
                            <feFuncR type="linear" slope="3"></feFuncR>
                            <feFuncG type="linear" slope="3"></feFuncG>
                            <feFuncB type="linear" slope="3"></feFuncB>
                        </feComponentTransfer>
                        <feColorMatrix
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            in="componentTransfer"
                            result="colormatrix2"
                            type="matrix"
                            values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 25 -17"
                        ></feColorMatrix>
                    </filter>
                </defs>
                <g>
                    <rect width="100%" height="100%" fill="url(#gggrain-gradient)"></rect>
                    <rect width="100%" height="100%" fill="transparent" filter="url(#gggrain-filter)" opacity="1" className="bg-blend-soft-light"></rect>
                </g>
            </svg>
        </>
    );
};

export default Bg;
