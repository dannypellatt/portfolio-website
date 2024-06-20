import React from 'react';

interface CertCardProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
}

const CertCard: React.FC<CertCardProps> = ({ id, imageSrc, title, description }) => {
  return (
    <div id={id} className="card carousel-item w-full bg-base-100 rounded-none">
      <figure>
        <img className='border border-4 border-gray-500 rounded-l' src={imageSrc} alt={title} />
      </figure>
      <div className="card-body bg-base-100 ">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CertCard;