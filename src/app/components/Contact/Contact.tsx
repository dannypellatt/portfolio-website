import React from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 pt-16 pb-4">
            <div className='ml-4 sm:ml-32'>
                <h1 className='text-3xl md:text-5xl text-white font-semibold'>Get in touch.</h1>
                <div className="w-16 mt-12">
                    <a href="https://www.linkedin.com/in/dannypellatt/" target="_blank">
                        <Image src='/linkedin.jpeg' alt='LinkedIn Logo' className='mt-8 border border-white rounded-xl hover:opacity-70'/>                    </a>
                </div>
                <p className='py-12 text-zinc-500'>Website made by me. Designed in <span className='text-zinc-400'>Figma & Canva</span>. Coded using <span className='text-zinc-400'>TypeScript</span>, <span className='text-zinc-400'>JavaScript</span>, <span className='text-zinc-400'>HTML5</span>, and <span className='text-zinc-400'>CSS</span> in Visual Studio Code. Built with <span className='text-zinc-400'>React</span>, <span className='text-zinc-400'>Next.js</span> and <span className='text-zinc-400'>Tailwind CSS</span>.</p>
            </div>

            <div className="flex justify-center items-center space-x-2">
                <div className="stats stats-vertical bg-black text-white">
                    
                    <div className="stat">
                        <div className="stat-title text-white">Location</div>
                        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">Carlsbad, California</div>
                    </div>
                
                    <div className="stat">
                        <div className="stat-title text-white">Phone</div>
                        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">(571) 493-0142</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title text-white">Email</div>
                        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">dannyrpellatt@gmail.com</div>
                    </div>
                
                </div>
            </div>
        </div>
        
    </div>
    
  );
};

export default ContactSection;
