import React, { useState, useEffect } from 'react'
import ajiles from '../assets/ajiles-logo.png'
import palermo from '../assets/palermo-logo.png'
import peruanito from '../assets/peruanito-logo.jpg'
import rocket from '../assets/jr-logo.png'
import cec from '../assets/Chuck-e-Cheeses-Logo.png'
import ihop from '../assets/ihop-logo.png'
import apb from '../assets/applebees-logo.png'
import taco from '../assets/taco-logo.png'
import tada from '../assets/tada-logo.png'


const images = [ajiles, palermo, peruanito, rocket, cec, ihop, apb, taco, tada];

const CarouselPeru = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para pasar a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      {/* Contenedor de imágenes */}
      <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="w-full h-40 md:h-60 object-contain flex-shrink-0"
        />
        ))}
      </div>

      {/* Botones de navegación */}
      <button className="absolute top-1/2 left-5 md:left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75"
        onClick={prevSlide}>
        &#10094;
      </button>

      <button className="absolute top-1/2 right-5 md:right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75"
        onClick={nextSlide}>
        &#10095;
      </button>

    </div>

  );
};

export default CarouselPeru;
