// Nav.tsx
'use client'
import { useState, useEffect } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight - 100) {
            setActiveSection('home');
        } else if (scrollPosition < 2 * window.innerHeight - 100) {
            setActiveSection('sobre');
        } else if (scrollPosition < 3 * window.innerHeight - 100) {
            setActiveSection('locais');
        } else {
            setActiveSection('cambio');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-transparent p-8 fixed w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8"></div>
                <div className="md:flex text-white space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <button
                        className={`text-base md:text-lg ${activeSection === 'home' ? 'bg-yellow-custom text-black font-bold px-3' : ''}`}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'sobre' ? 'bg-yellow-custom text-black font-bold px-3' : ''}`}
                        onClick={() => scrollToSection('sobre')}
                    >
                        Sobre
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'locais' ? 'bg-yellow-custom text-black font-bold px-3' : ''}`}
                        onClick={() => scrollToSection('locais')}
                    >
                        Locais
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'cambio' ? 'bg-yellow-custom text-black font-bold px-3' : ''}`}
                        onClick={() => scrollToSection('cambio')}
                    >
                        Câmbio
                    </button>
                </div>
            </div>
        </nav>
    );
}