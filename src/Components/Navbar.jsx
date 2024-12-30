import React, { useEffect, useState } from 'react'
import logoInt from '../assets/intelliposlogo.png'
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

    // Verifica si la ruta actual esta relacionada con "Software" o "Hardware"
    const isSolucionesActive = 
    location.pathname.includes("/soluciones/software") ||
    location.pathname.includes("/soluciones/hardware");

  useEffect(() => {
    // Hace scroll al inicio cada vez que la ruta cambia (inicio, nosotros, productos, soluciones, clientes, contactenos)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

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

  const ActiveLink = "text-green-500 font-semibold "
  const InactiveLink = "hover:text-green-500 font-semibold"

  const ActiveLinkSol = "text-green-500 font-semibold flex flex-row items-center gap-2 cursor-pointer"
  const InactiveLinkSol = "hover:text-green-500 font-semibold flex flex-row items-center gap-2 cursor-pointer"

  const ActiveLinkSH = "text-green-500 font-semibold block px-4 py-2 hover:bg-gray-100 flex-row items-center gap-2"
  const InactiveLinkSH = "block px-4 py-2 hover:bg-gray-100 flex-row items-center gap-2 hover:text-green-500 font-semibold"

  return (

  <div className="flex justify-center">
    <div className={`hidden fixed top-0 z-10 md:flex flex-row justify-between items-center bg-white transition-all duration-500 ${isScrolled ? "shadow-xl rounded-full bg-slate-100 px-20 py-4 text-sm my-2 mx-2 w-[85%] transform" : "px-12 md:px-14 md:py-6 2xl:px-14 2xl:py-6 text-base w-full"}`}>
      
        <img src={logoInt} alt={logoInt} className={`transition-all duration-300 ${isScrolled ? "w-28 2xl:w-32" : "w-40 2xl:w-44"}`}/>

      <div className="font-semibold flex gap-12 items-center">

        <NavLink to="/" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Inicio</NavLink>

        <NavLink to="/nosotros" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Nosotros</NavLink>

        <NavLink to="/productos" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Productos</NavLink>

        {/* MENU SOLUCIONES */}

        <div className="relative group">

          <div className={isSolucionesActive ? ActiveLinkSol : InactiveLinkSol}>Soluciones
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#0F0F0F"></path>
            </svg>
          </div>

          {/* SUBMENU*/}
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg pt-5 w-40">
            <NavLink to="/soluciones/software" className={({ isActive }) => isActive ? ActiveLinkSH : InactiveLinkSH}>Software</NavLink>
            <NavLink to="/soluciones/hardware" className={({ isActive }) => isActive ? ActiveLinkSH : InactiveLinkSH}>Hardware</NavLink>
          </div>
          
        </div>

        <NavLink to="/contactanos">
          <button className="btn-contact flex flex-row gap-3 items-center">
            Contactanos</button>
        </NavLink>
      </div>
    </div>
  </div>
  )

}

export default Navbar