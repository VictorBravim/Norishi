// Hero.tsx
'use client'
import { useState, useEffect } from "react";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    const backgroundImage = isMobile ? "/bg-mobile.png" : "/bg.png";

    return (
        <div
            id="home"
            className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-8xl lg:text-9xl font-bold mb-3">Norishi</h1>
                    <h2 className="text-6xl md:text-7xl font-bold lg:pr-56 mb-2">
                        <span className="text-yellow-custom">Sushi,</span> seafood & salads
                    </h2>
                    <p className="text-2xl md:text-2xl text-gray-bg lg:pr-48 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod
                        suscipit ultrices. Nam elementum erat ac fermentum viverra.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2"></div>
        </div>
    );
}