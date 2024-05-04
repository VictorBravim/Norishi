// Cardapio.tsx
'use client'
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import sushi from '@/assets/sushi.png';
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

const Cardapio = () => {
    const cardapio: LocalProps[] = [
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
        {
            nome: 'Hiroshima',
            imagem: sushi,
            preco: '45,90',
            rating: 4,
        },
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
        {
            nome: 'Hiroshima',
            imagem: sushi,
            preco: '45,90',
            rating: 4,
        },
    ];

    return (
        <div id='cardapio' className="container mx-auto py-32">
            <div className="flex justify-between items-center px-2 mb-4">
                <h1 className="text-white text-4xl">Cardapio</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
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
                            <p className="text-lg text-white">Preço: {local.preco}</p>
                        </div>
                        <button className="absolute z-20 top-[350px] mx-20 bg-blue-custom text-white py-2 px-16 transition duration-300 hover:bg-yellow-custom hover:text-blue-custom">
                            Comprar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardapio;