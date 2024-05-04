// Popular.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import sushi from '@/assets/sushi.png'
import { Settings } from 'react-slick';

const Locais = () => {
    const locais = [
        {
            nome: 'Tóquio',
            imagem: sushi,
            localizacao: 'Região de Kanto',
        },
        {
            nome: 'Kyoto',
            imagem: sushi,
            localizacao: 'Região de Kansai',
        },
        {
            nome: 'Osaka',
            imagem: sushi,
            localizacao: 'Região de Kansai',
        },
    ];

    const sliderSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/bg3.webp')" }}>
            <div className="container mx-auto py-12">
                <Slider {...sliderSettings}>
                    {locais.map((local, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white flex flex-col justify-center items-center p-4 rounded-lg overflow-hidden shadow-lg">
                                <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{local.nome}</h3>
                                    <p className="text-sm text-gray-600">{local.localizacao}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Locais;