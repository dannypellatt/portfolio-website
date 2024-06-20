import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed navbar opacity-100 z-50">
      <div className="dropdown dropdown-end absolute top-4 right-6 h-16 w-16">

        <div tabIndex={0} role="button" className="btn btn-square btn-outline bg-black hover:bg-white border border-white hover:border-black text-white hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
        
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-white rounded-box w-52">
           <li><Link href="#hero">Home</Link></li>
           <li><Link href="#about-me">About Me</Link></li>
           <li><Link href="#projects">Projects</Link></li>
           <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>

  );
};



export default Navbar;