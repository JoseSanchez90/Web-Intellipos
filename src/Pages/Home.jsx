import logoInt from '../assets/intelliposlogo.png'
import '../Css/Home.css'
import fondo1 from '../assets/3.jpg'
import pos2 from '../assets/pos2.png'
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
    
    <section className="min-h-screen outfit-letters">

    <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${fondo1})` }}>

      <div className= {`w-[100%] fixed top-0 z-10 flex flex-row justify-between items-center bg-white transition-all duration-300 ${
        isScrolled ? "shadow-lg rounded-b-3xl bg-white px-20 py-4 text-sm" : "px-10 py-8 text-base"}`}>
        <div>
          <img src={logoInt} alt={logoInt} className={` transition-all duration-300 ${isScrolled ? "w-32" : "w-48"}`} />
        </div>
        <div className="font-semibold flex gap-12 items-center">
          <button className="relative group">Inicio
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button className="relative group">Nosotros
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button className="relative group">Productos
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button className="relative group">Soluciones
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button className="relative group">Clientes
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button className="contact"><span className="contact-content">Contactanos</span></button>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="h-screen w-full">
          <div className="py-64 pr-[45%] ml-16 relative animate-fade-down animate-duration-[1500ms] animate-delay-1000">
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

{/* SPOT 2 */}

      <div className="h-full w-full bg-white">
        <div className="flex flex-col items-center py-28">
          <div className="py-24">
            <p className="text-4xl px-96 font-medium text-center">Tenemos la solución que se adapta al formato, al tamaño y al presupuesto de tu negocio</p>
          </div>
          <div className="grid grid-cols-4 px-48 gap-5">
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M54.89,26.73A23.52,23.52,0,0,1,15.6,49" stroke-linecap="round"></path><path d="M9,37.17a23.75,23.75,0,0,1-.53-5A23.51,23.51,0,0,1,48.3,15.2" stroke-linecap="round"></path><polyline points="37.73 16.24 48.62 15.44 47.77 5.24" stroke-linecap="round"></polyline><polyline points="25.91 47.76 15.03 48.56 15.88 58.76" stroke-linecap="round"></polyline></g></svg>
              <p className="text-base font-normal text-center">Cubrimos el ciclo completo de su operación</p>
            </div>
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="8.6" y="10.11" width="46.81" height="36.51" rx="2"></rect><line x1="8.6" y1="39.3" x2="55.4" y2="39.3"></line><line x1="29" y1="46.62" x2="26" y2="54.27"></line><line x1="35.5" y1="46.62" x2="38.5" y2="54.27"></line><line x1="21.09" y1="53.89" x2="42.91" y2="53.89"></line></g></svg>
              <p className="text-base font-normal text-center">Tecnología lider en la industria de Restaurantes</p>
            </div>
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C136.384,0,42.667,42.176,42.667,96v320c0,53.824,93.717,96,213.333,96s213.333-42.176,213.333-96V96 C469.333,42.176,375.616,0,256,0z M448,416c0,35.307-78.848,74.667-192,74.667S64,451.307,64,416v-64.384 c34.197,32.043,106.347,53.717,192,53.717s157.803-21.675,192-53.717V416z M448,309.333C448,344.64,369.152,384,256,384 S64,344.64,64,309.333v-64.384c34.197,32.043,106.347,53.717,192,53.717s157.803-21.675,192-53.717V309.333z M448,202.667 c0,35.307-78.848,74.667-192,74.667s-192-39.36-192-74.667v-64.384C98.197,170.325,170.347,192,256,192s157.803-21.675,192-53.717 V202.667z M256,170.667c-113.152,0-192-39.36-192-74.667c0-35.307,78.848-74.667,192-74.667S448,60.693,448,96 C448,131.307,369.152,170.667,256,170.667z"></path> </g> </g> </g></svg>
              <p className="text-base font-normal text-center">Tecnología lider en la industria de Restaurantes</p>
            </div>
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 01-1.436.432c-.138-.46-.397-.89-.753-1.357a18.354 18.354 0 00-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.75.75 0 01-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5zM9.5 21.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM8.75 18a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"></path></g></svg>
              <p className="text-base font-normal text-center">Solución modular que se adapta a tu negocio o requerimiento</p>
            </div>
          </div>
        </div>
      </div>

{/* SPOT 3 */}

      <div className="w-full h-full bg-white">
        <div>
          <div className="py-24">
            <p className="text-4xl px-96 font-medium text-center">Soluciones para la Gestión y Administración de restaurantes</p>
          </div>
          <div className="bg-cover">
            <img src={pos2} alt={pos2} />
            <p>Software</p>
            <p>Ofrecemos una solución completa para el sector de restaurantes que se adapta a cualquier tamaño y/o tipo de restaurante desde la operación de tu negocio hasta la fidelización de tus clientes</p>
            <a href="">Más información</a>
          </div>
          <div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Home