import React from "react";
import logo from '../assets/intelliposlogo.png'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-20">
        
        {/* Logo o Título */}
        <div className="mb-4 md:mb-0">
          <img src={logo} alt={logo} className="w-40" />
        </div>

        {/* Derechos reservados */}
        <div className="mt-4 md:mt-0 text-sm">
          <p>&copy; 2024 IntelliPOS. Todos los derechos reservados.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
