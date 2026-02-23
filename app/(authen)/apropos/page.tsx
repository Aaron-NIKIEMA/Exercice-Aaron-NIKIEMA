"use client";
import React from 'react';

const Desc = () => {
    const timelineItems = [
        {
            year: 'IIAA',
            title: 'Informatique Intelligente & Artificielle',
            description: 'La filière IIAA forme des ingénieurs spécialisés en intelligence artificielle, machine learning et développement logiciel. Nos étudiants apprennent à concevoir des solutions innovantes utilisant l\'IA pour résoudre les défis du développement durable en Afrique. Cette formation couvre l\'apprentissage automatique, les réseaux de neurones, et les applications pratiques de l\'IA dans les secteurs critiques.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
            align: 'start'
        },
        {
            year: 'GEAAH',
            title: 'Génie de l\'Eau & Aménagement Hydro-Agricole',
            description: 'La filière GEAAH prépare les ingénieurs à gérer les ressources en eau et développer des aménagements hydroélectriques et agricoles durables. Les étudiants acquièrent des compétences en hydrologie, irrigation, traitement des eaux et gestion des ressources hydriques pour l\'agriculture. Cette formation est essentielle pour le développement agricole et énergétique de l\'Afrique.',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
            align: 'end'
        },
        {
            year: 'GEE',
            title: 'Génie Électrique & Énergétique',
            description: 'La filière GEE forme des ingénieurs capables de concevoir, d\'installer et de gérer des systèmes électriques et énergétiques modernes. Les étudiants étudient les énergies renouvelables, les réseaux électriques intelligents, l\'efficacité énergétique et les solutions d\'accès à l\'électricité. Cette formation répond aux enjeux critiques de l\'énergie en Afrique.',
            image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400',
            align: 'start'
        },
        {
            year: 'GC-BTP',
            title: 'Génie Civil & BTP',
            description: 'La filière GC-BTP prépare les ingénieurs à planifier, concevoir et construire des infrastructures durables et résilientes. Les étudiants apprennent la conception de bâtiments, routes, ponts, et ouvrages hydrauliques en tenant compte des risques climatiques et environnementaux. Cette formation est fondamentale pour le développement des infrastructures africaines.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
            align: 'end'
        },
        {
            year: 'CPGE',
            title: 'Classe Préparatoire aux Grandes Écoles',
            description: 'La CPGE prépare les étudiants aux concours d\'entrée des grandes écoles d\'ingénieurs. Cette formation intensive couvre les mathématiques avancées, la physique, la chimie et l\'informatique. Les étudiants développent une rigueur intellectuelle et des compétences analytiques essentielles pour réussir les concours nationaux et régionaux d\'accès aux écoles d\'ingénieurs prestigieuses.',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
            align: 'start'
        }
    ];

    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-4xl font-bold mb-12">Nos Filières de Formation</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full max-w-4xl">
                {timelineItems.map((item, index) => (
                    <li key={index}>
                        {index !== 0 && <hr />}
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className={`timeline-${item.align} ${item.align === 'start' ? 'mb-10 md:text-end' : 'md:mb-10'}`}>
                            <time className="font-mono italic font-bold text-lg">{item.year}</time>
                            <div className="text-lg font-black">{item.title}</div>
                            <div className="flex flex-col gap-4 items-start mt-3">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full max-w-sm h-64 object-cover rounded-lg"
                                />
                                <p className="text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                        {index !== timelineItems.length - 1 && <hr />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Desc;
