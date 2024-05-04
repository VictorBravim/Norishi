// Hero.tsx
import Image from "next/image";

export default function Hero() {
    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <h1 className="text-xl lg:text-6xl font-bold mb-4">Norishi</h1>
                    <h2 className="text-lg md:text-4xl font-bold mb-2">Shushi, seafood & salads</h2>
                    <p className="text-sm md:text-lg text-gray-bg mb-4">O Japão é o destino ideal para explorar uma riqueza cultural única, oferecendo uma variedade incrível de experiências para todos os gostos e interesses.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}