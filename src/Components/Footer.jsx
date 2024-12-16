import React from "react";
import logo from '../assets/intelliposlogo.png'

const Footer = () => {
  return (

    <footer className="bg-slate-900 text-white py-8">
      <div className="grid grid-cols-2 md:flex md:flex-row justify-items-center md:justify-between items-center md:px-20">
        
        {/* Logo o Título */}
        <div className="mb-0">
          <img src={logo} alt={logo} className="w-28 md:w-40" />
        </div>

        {/* Derechos reservados */}
        <div className="mt-0 text-sm">
          <p>&copy; 2024 IntelliPOS. Todos los derechos reservados.</p>
        </div>
        
      </div>
    </footer>

  );
};

export default Footer;
