
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(https://picsum.photos/seed/dancehero/1920/1080)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white drop-shadow-lg">
          Art in Motion
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Exploring the boundaries of movement and storytelling through dance.
        </p>
      </div>
       <a
        href="#about"
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
