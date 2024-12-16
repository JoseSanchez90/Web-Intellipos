import React, { useState, useEffect } from 'react'
import kfc from '../assets/kfc-logo.jpg'
import dunkin from '../assets/dd-logo.jpg'
import chilis from '../assets/chilis-logo.jpg'
import friday from '../assets/friday-logo.jpg'
import bk from '../assets/bk-logo.jpg'

const images = [kfc, dunkin, chilis, friday, bk];

const Carousel = () => {
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
          className="w-full h-32 md:h-80 object-contain flex-shrink-0"
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

export default Carousel;
