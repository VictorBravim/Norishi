// Popular.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { CgArrowRight } from "react-icons/cg";
import Image from 'next/image';
import sushi from '@/assets/sushi.png';
import { Settings } from 'react-slick';
import { StaticImageData } from 'next/image';

interface LocalProps {
    nome: string;
    imagem: StaticImageData;
    preco: string;
    rating: number;
}

const Rating = ({ rating }: { rating: number }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} color="gold" />);
        } else {
            stars.push(<FaStar key={i} color="gray" />);
        }
    }
    return <div>{stars}</div>;
};

const Locais = () => {
    const locais: LocalProps[] = [
        {
            nome: 'Tóquio',
            imagem: sushi,
            preco: '59,90',
            rating: 4,
        },
        {
            nome: 'Kyoto',
            imagem: sushi,
            preco: '64,90',
            rating: 3,
        },
        {
            nome: 'Osaka',
            imagem: sushi,
            preco: '33,90',
            rating: 4.5,
        },
    ];

    const sliderSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <div className="h-full flex justify-center items-center px-56">
            <div className="container mx-auto py-12">
                <div className='flex justify-between items-center px-2'>
                    <h1 className='text-white text-4xl mb-4'>Popular</h1>
                    <div className='text-white text-4xl'>
                        <CgArrowRight />
                    </div>
                </div>
                <Slider {...sliderSettings}>
                    {locais.map((local, index) => (
                        <div key={index} className="px-2 py-2 pb-4 relative">
                            <div className="bg-gray-custom flex flex-col justify-center items-center p-4 overflow-hidden shadow-lg">
                                <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">{local.nome}</h3>
                                    <div className="absolute top-2 left-2 bg-yellow-custom text-gray-800 py-1 px-4 rounded-tr-lg rounded-bl-lg">
                                        <p className="text-sm font-semibold">Popular</p>
                                    </div>
                                    <div className="flex items-center justify-center mb-2">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <FaStar
                                                key={starIndex}
                                                color={starIndex < Math.round(local.rating) ? 'gold' : 'gray'}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-lg text-white">Preço: {local.preco}</p>
                                </div>
                                <button className="absolute bottom-0 bg-blue-custom text-white py-2 px-24 shadow-lg transition duration-300 hover:bg-yellow-custom hover:text-blue-custom">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Locais;