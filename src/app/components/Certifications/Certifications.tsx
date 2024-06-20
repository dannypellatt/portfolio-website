import React from 'react';
import CertCard from './CertCard';

const certifications = [
    {
        id: "item1",
        imageSrc: "/cert-imgs/truecoders-certificate.png",
        title: "Software Engineer",
        description: "TrueCoders - 2021"
    },
    {
      id: "item2",
      imageSrc: "/cert-imgs/HTMLSololearnCertification.jpeg",
      title: "HTML",
      description: "SoloLearn - 2022"
    },
    {
      id: "item3",
      imageSrc: "/cert-imgs/cSharp-cert.png",
      title: "C#",
      description: "SoloLearn - 2022"
    },
    {
      id: "item4",
      imageSrc: "/cert-imgs/sql-cert.png",
      title: "SQL",
      description: "SoloLearn - 2022"
    },
    {
      id: "item5",
      imageSrc: "/cert-imgs/PythonCertification.png",
      title: "Python",
      description: "SoloLearn - 2022"
    },
    {
      id: "item6",
      imageSrc: "/cert-imgs/LinkedInCSS.png",
      title: "CSS",
      description: "LinkedIn - 2023"
    },
    {
      id: "item7",
      imageSrc: "/cert-imgs/LinkedInHTML.png",
      title: "HTML",
      description: "LinkedIn - 2022"
    },
    {
      id: "item8",
      imageSrc: "/cert-imgs/LinkedInOOP.png",
      title: "Object Oriented Programming",
      description: "LinkedIn - 2023"
    },
    {
      id: "item9",
      imageSrc: "/cert-imgs/LinkedInCSharp.png",
      title: "C#",
      description: "LinkedIn - 2023"
    }
  ];

const Certification: React.FC = () => {
  return (
    <div className="bg-black">
        <div className='ml-36 pt-16 pb-8'>
            <h1 className='text-3xl md:text-5xl text-white font-semibold'>Check out these certifications.</h1>
        </div>
        <div className="flex justify-center items-center space-x-2">
            <div className="bg-base-100 my-8 rounded-xl p-8 w-full max-w-5xl h-auto grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full">
                    <div className="text-2xl font-medium pb-4">
                        <p>blah.</p>
                    </div>
                    <div className='flex justify-center py-2 gap-4 grid grid-cols-3'>
                        {certifications.map((cert) => (
                            <a key={cert.id} href={`#${cert.id}`} className="text-center hover:text-gray-500">
                            <img src={cert.imageSrc} alt={cert.title} className="w-full h-auto object-cover rounded border border-black hover:border-gray-500" />
                            <p>{cert.title}</p>
                            </a>
                        ))}
                    </div>
                
                </div>
                <div className="carousel w-full">
                {certifications.map((cert) => (
                    <CertCard
                    key={cert.id}
                    id={cert.id}
                    imageSrc={cert.imageSrc}
                    title={cert.title}
                    description={cert.description}
                    />
                ))}
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Certification;
