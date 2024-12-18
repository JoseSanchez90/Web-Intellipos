import React, { useEffect, useState } from 'react'
import logoInt from '../assets/intelliposlogo.png'
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

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

  const ActiveLink = "text-green-500 font-bold"
  const InactiveLink = "relative group font-bold"

  return (
    
  <div className={`hidden w-[100%] fixed top-0 z-10 md:flex flex-row justify-between items-center bg-white transition-all duration-300 ${isScrolled ? "shadow-lg rounded-b-3xl bg-white px-20 py-4 text-sm" : "px-10 py-8 text-base"}`}>
      <img src={logoInt} alt={logoInt} className={`transition-all duration-300 ${isScrolled ? "w-32" : "w-48"}`}/>

    <div className="font-semibold flex gap-12 items-center">
      <NavLink to="/" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Inicio
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>

      <NavLink to="/nosotros" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Nosotros
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>

      <NavLink to="/productos" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Productos
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>

      <NavLink to="/soluciones" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Soluciones
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>

      <NavLink to="/clientes" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Clientes
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>

      <NavLink to="/contacto">
        <button className="btn-contact">Contactanos</button>
      </NavLink>
    </div>
  </div>

  )

}

export default Navbar