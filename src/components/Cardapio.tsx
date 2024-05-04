// Cardapio.tsx
'use client'
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import OnigiriYatai from '@/assets/OnigiriYatai.png'
import Californiaroll from '@/assets/Californiaroll.png'
import Yakisoba from '@/assets/Yakisoba.png'
import SashimiSalmao from '@/assets/SashimiSalmao.png'
import SashimiMakizushi from '@/assets/SashimiMakizushi.png'
import Onigiri from '@/assets/Onigiri.png'
import Sopa from '@/assets/sopa.png'
import Wasabi from '@/assets/Wasabi.png'

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

const Cardapio = () => {
    const cardapio: LocalProps[] = [
        {
            nome: 'Onigiri Yatai',
            imagem: OnigiriYatai,
            preco: 'R$ 59,00',
            rating: 4,
        },
        {
            nome: 'California roll',
            imagem: Californiaroll,
            preco: 'R$ 89,00',
            rating: 3,
        },
        {
            nome: 'Yakisoba',
            imagem: Yakisoba,
            preco: 'R$ 32,00',
            rating: 3,
        },
        {
            nome: 'Sashimi Salmão',
            imagem: SashimiSalmao,
            preco: 'R$ 29,00',
            rating: 3.5,
        },
        {
            nome: 'Sashimi Makizushi',
            imagem: SashimiMakizushi,
            preco: 'R$ 25,00',
            rating: 4.2,
        },
        {
            nome: 'Onigiri',
            imagem: Onigiri,
            preco: 'R$ 15,00',
            rating: 4.6,
        },
        {
            nome: 'Sopa Frutos Do Mar',
            imagem: Sopa,
            preco: 'R$ 45,00',
            rating: 4.2,
        },
        {
            nome: 'Wasabi',
            imagem: Wasabi,
            preco: 'R$ 19,00',
            rating: 2.4,
        },
    ];

    return (
        <div id='cardapio' className="container mx-auto py-12 px-4 md:px-8 pt-24 lg:pt-32 lg:px-16">
            <div className="flex justify-between items-center px-2 mb-4">
                <h1 className="text-white text-4xl">Cardapio</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cardapio.map((local, index) => (
                    <div key={index} className="relative bg-gray-custom p-4 shadow-lg mb-5">
                        <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold text-white mb-2">{local.nome}</h3>
                            <div className="absolute top-0 left-0 bg-yellow-custom text-gray-800 py-1 px-4 rounded-tr-lg rounded-bl-lg">
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
                            <p className="text-xl text-white">{local.preco}</p>
                        </div>
                        <button className="absolute z-20 top-[335px] lg:top-[305px] mx-24 lg:mx-16 bg-blue-custom text-white py-2 px-16 transition duration-300 hover:bg-yellow-custom hover:text-blue-custom">
                            Comprar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardapio;