import React from "react";
import leafSrc from "../assets/leaf.svg";

const Leafs = () => {
    return (
        <>
            <img src={leafSrc} alt="ozdoba" className="absolute  -left-2 top-24 w-32" />
            <img src={leafSrc} alt="ozdoba" className="absolute  -right-2 rotate-180 bottom-24 w-32" />
        </>
    );
};

export default Leafs;
