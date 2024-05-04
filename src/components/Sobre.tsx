// Sobre.tsx
import Image from "next/image";

export default function Sobre() {
    return (
        <div id="sobre" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <h1 className="text-xl lg:text-9xl font-bold mb-3">Norishi</h1>
                    <h2 className="text-lg md:text-7xl font-bold pr-56 mb-2"><span className="text-yellow-custom">Sushi,</span> seafood & salads</h2>
                    <p className="text-sm md:text-2xl text-gray-bg pr-48 mb-4">O Japão é o destino ideal para explorar uma riqueza cultural única, oferecendo uma variedade incrível de experiência.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}