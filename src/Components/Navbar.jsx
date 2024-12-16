import React, { useEffect, useState } from 'react'
import logoInt from '../assets/intelliposlogo.png'
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
          <div className= {`hidden w-[100%] fixed top-0 z-10 md:flex flex-row justify-between items-center bg-white transition-all duration-300 ${
            isScrolled ? "shadow-lg rounded-b-3xl bg-white px-20 py-4 text-sm" : "px-10 py-8 text-base"}`}>

            <img src={logoInt} alt={logoInt} className={` transition-all duration-300 ${isScrolled ? "w-32" : "w-48"}`} />

            <div className="font-semibold flex gap-12 items-center">
              <NavLink to="/" className="relative group">Inicio
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink to="/Nosotros" className="relative group">Nosotros
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <a href="" className="relative group">Productos
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="" className="relative group">Soluciones
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="" className="relative group">Clientes
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="" className="contact"><span className="contact-content">Contactanos</span></a>
            </div>

          </div>

  )

}

export default Navbar