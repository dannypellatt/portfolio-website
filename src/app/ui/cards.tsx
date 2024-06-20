import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, src, alt, title }) => (
    <div key={id} className="card w-60 bg-white p-2">
        <a href={`#${id}`}>
            <figure className="w-full h-40 flex justify-center items-center overflow-hidden">
                <img src={src} alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
            </div>
        </a>       
    </div>
);