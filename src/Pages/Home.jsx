import logoInt from '../assets/intelliposlogo.png'
import '../Css/Home.css'
import fondo1 from '../assets/3.jpg'
import { useEffect, useState } from 'react';

function Home() {

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
    
    <section className="w-full h-full outfit-letters">

    <div className="relative h-full bg-cover" style={{ backgroundImage: `url(${fondo1})` }}>

      <div className= {`sticky top-0 z-10 flex flex-row justify-between items-center bg-white px-10 py-8 transition-all duration-300 ${
        isScrolled ? "shadow-lg rounded-b-3xl bg-white px-20 py-4 text-sm" : " "}`}>
        <div>
          <img src={logoInt} alt={logoInt} className={`w-48 transition-all duration-300 ${isScrolled ? "w-24" : ""}`} />
        </div>
        <div className="font-semibold flex gap-12 items-center">
          <a href="" className="relative group">Inicio
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="" className="relative group">Nosotros
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
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

      <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="h-screen w-full">
          <div className="py-32 pr-[45%] ml-16 relative">
            <p className="text-green-100 font-semibold text-5xl pb-6">Llevamos la adminsitracion de tu restaurante al siguiente nivel</p>
            <p className="text-green-100 font-normal text-xl pb-8">El manejo de tu restaurante no tiene por qué ser difícil, cuando cuentas con una herramienta eficiente, escalable y fácil de usar, lo que resultará en más clientes satisfechos y leales.</p>
            <button className="info">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Solicitar mayor información</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home