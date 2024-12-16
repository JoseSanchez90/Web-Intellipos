import '../Css/Home.css'
import fondo1 from '../assets/3.jpg'
import pos2 from '../assets/pos2.jpg'
import pos3 from '../assets/6.jpg'
import ncr1 from '../assets/ncr1.jpg'
import bg1 from '../assets/7.jpg'
import bg2 from '../assets/8.jpg'
import logo from '../assets/intelliposlogo.png'
import Carousel from '../Components/Carousel-food'
import CarouselPeru from '../Components/Carousel-food-peru'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <section className="h-full w-full outfit-letters">

    <div className="bg-center h-screen bg-cover" style={{ backgroundImage: `url(${fondo1})` }}>

{/* NAVBAR MOBILE */}

      <div className="lg:hidden">

        <div className="py-7 px-7 bg-white flex justify-between">

          <img src={logo} alt={logo} className="w-32 animate-flip-down animate-duration-1000" />
        
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center animate-flip-down animate-duration-1000">
            <svg fill="#2dd100" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M217.043,0.001H16.696C7.515,0.001,0,7.479,0,16.697v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V16.697C233.739,7.479,226.224,0.001,217.043,0.001z"></path> </g> </g> <g> <g> <path d="M495.304,0.001H294.957c-9.18,0-16.696,7.477-16.696,16.696v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V16.697C512,7.479,504.485,0.001,495.304,0.001z"></path> </g> </g> <g> <g> <path d="M217.043,278.262H16.696C7.515,278.262,0,285.739,0,294.958v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V294.958C233.739,285.739,226.224,278.262,217.043,278.262z"></path> </g> </g> <g> <g> <path d="M495.304,278.262H294.957c-9.18,0-16.696,7.477-16.696,16.696v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V294.958C512,285.739,504.485,278.262,495.304,278.262z"></path> </g> </g> </g></svg>
          </button>

            {isOpen && (
              <div className="absolute z-50 flex flex-col w-1/3 sm:w-1/4 items-start right-5 text-white font-bold mt-10 bg-green-800 rounded-md shadow-lg animate-flip-down animate-duration-1000">
                <NavLink to="/" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Inicio</NavLink>
                <NavLink to="/About" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Nostroso</NavLink>
                <a tabIndex="-1" href="#proyectos" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Productos</a>
                <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Soluciones</a>
                <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Clientes</a>
                <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Contactanos</a>
              </div>
            )}
          </div>

      </div>

{/* NAVBAR       */}

        <Navbar />

{/* SPOT 1 */}
        
        <div className="h-full w-full">
          <div className="pt-[40%] px-8 md:pt-[20%] md:pr-[40%] md:pl-[5%] relative animate-fade-down animate-duration-[1000ms] animate-delay-500">
            <p className="text-white font-semibold text-xl md:text-5xl 2xl:text-5xl pb-6">Llevamos la adminsitracion de tu restaurante al siguiente nivel</p>
            <p className="text-white font-normal text-sm md:text-xl pb-8">El manejo de tu restaurante no tiene por qué ser difícil, cuando cuentas con una herramienta eficiente, escalable y fácil de usar, lo que resultará en más clientes satisfechos y leales.</p>
            <button className="info">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text-sm md:text-lg">Solicitar mayor información</span>
            </button>
          </div>
        </div>

    </div>

{/* SPOT 2 */}

      <div className="h-full w-full bg-white">
        <div className="flex flex-col items-center py-8 md:py-10 2xl:pt-24">
          <div className="py-10 md:py-16 2xl:pt-20 2xl:pb-28">
            <p className="text-xl md:text-4xl px-2 md:px-60 2xl:px-96 font-semibold md:font-medium text-center">Tenemos la solución que se adapta al formato, al tamaño y al presupuesto de tu negocio</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 px-10 gap-2 md:px-48 md:gap-5">
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M54.89,26.73A23.52,23.52,0,0,1,15.6,49" strokeLinecap="round"></path><path d="M9,37.17a23.75,23.75,0,0,1-.53-5A23.51,23.51,0,0,1,48.3,15.2" strokeLinecap="round"></path><polyline points="37.73 16.24 48.62 15.44 47.77 5.24" strokeLinecap="round"></polyline><polyline points="25.91 47.76 15.03 48.56 15.88 58.76" strokeLinecap="round"></polyline></g></svg>
              <p className="text-base font-normal text-center">Cubrimos el ciclo completo de su operación</p>
            </div>
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="8.6" y="10.11" width="46.81" height="36.51" rx="2"></rect><line x1="8.6" y1="39.3" x2="55.4" y2="39.3"></line><line x1="29" y1="46.62" x2="26" y2="54.27"></line><line x1="35.5" y1="46.62" x2="38.5" y2="54.27"></line><line x1="21.09" y1="53.89" x2="42.91" y2="53.89"></line></g></svg>
              <p className="text-base font-normal text-center">Tecnología lider en la industria de Restaurantes</p>
            </div>
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C136.384,0,42.667,42.176,42.667,96v320c0,53.824,93.717,96,213.333,96s213.333-42.176,213.333-96V96 C469.333,42.176,375.616,0,256,0z M448,416c0,35.307-78.848,74.667-192,74.667S64,451.307,64,416v-64.384 c34.197,32.043,106.347,53.717,192,53.717s157.803-21.675,192-53.717V416z M448,309.333C448,344.64,369.152,384,256,384 S64,344.64,64,309.333v-64.384c34.197,32.043,106.347,53.717,192,53.717s157.803-21.675,192-53.717V309.333z M448,202.667 c0,35.307-78.848,74.667-192,74.667s-192-39.36-192-74.667v-64.384C98.197,170.325,170.347,192,256,192s157.803-21.675,192-53.717 V202.667z M256,170.667c-113.152,0-192-39.36-192-74.667c0-35.307,78.848-74.667,192-74.667S448,60.693,448,96 C448,131.307,369.152,170.667,256,170.667z"></path> </g> </g> </g></svg>
              <p className="text-base font-normal text-center">Tecnología lider en la industria de Restaurantes</p>
            </div>
            <div className="flex flex-col items-center place-content-center border-2 border-green-600 rounded-lg mx-18 p-5 gap-4">
              <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 01-1.436.432c-.138-.46-.397-.89-.753-1.357a18.354 18.354 0 00-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.75.75 0 01-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5zM9.5 21.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM8.75 18a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"></path></g></svg>
              <p className="text-base font-normal text-center">Solución modular que se adapta a tu negocio o requerimiento</p>
            </div>
          </div>
        </div>
      </div>

{/* SPOT 3 */}

      <div className="md:pt-24">
        <div className="pt-8 md:py-16 2xl:py-20">
          <p className="text-xl md:text-4xl px-2 md:px-60 2xl:px-96 font-semibold md:font-medium text-center">Soluciones para la Gestión y
          Administración de restaurantes</p>
        </div>

        <div className="w-full bg-center h-screen bg-no-repeat" style={{ backgroundImage: `url(${pos2})` }}>
          <div className="flex flex-col text-right items-end pl-5% md:pl-[35%] pr-[5%] pt-[60%] md:pt-[15%]">
            <p className="text-white font-semibold text-4xl md:text-5xl pb-6">Software</p>
            <p className="text-white font-normal text-lg md:text-xl pb-8">Ofrecemos una solución completa para el sector de restaurantes que se adapta a cualquier tamaño y/o tipo de restaurante desde la operación de tu negocio hasta la fidelización de tus clientes</p>
            <button className="info">
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">Más información</span>
              </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-around py-32 md:grid md:grid-cols-2 items-center bg-center h-full bg-no-repeat" style={{ backgroundImage: `url(${pos3})` }}>
        <div className="flex flex-col items-start pl-[5%] md:pl-[10%]">
          <p className="text-white font-semibold text-4xl md:text-5xl pb-6">Equipamiento</p>
          <p className="text-white font-normal text-lg md:text-xl pb-8">Contamos con una línea completa de equipos, diseñador especial mente para operar en el exigente ambiente de restaurantes</p>
          <button className="info">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Más información</span>
            </button>
        </div>
        <div className="flex flex-col items-center pt-20">
          <img src={ncr1} alt={ncr1} className="w-52 md:w-96" />
        </div>
      </div>

{/* SPOT 4 */}

    <div className="flex flex-col gap-5 md:pt-24 2xl:pt-36 pb-12">
      <p className="text-xl md:text-4xl px-2 md:px-60 2xl:px-96 font-semibold md:font-medium text-center">Servicios profesionales de clase mundial</p>
      <p className="text-lg md:text-3xl px-16 font-medium md:font-semibold text-center text-slate-700 md:pb-8">Las Marcas líderes en el mundo nos prefieren</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-16 md:gap-10 w-full">
      <img src={bg1} alt={bg1} className="rounded-md md:rounded-lg" />
      <img src={bg2} alt={bg2} className="rounded-md md:rounded-lg" />
    </div>

    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 px-2 gap-5 2xl:px-16 w-full pt-4">
      <div className="flex flex-row justify-center px-2 md:px-16 text-center">
        <p className="text-green-600 font-semibold text-lg md:text-2xl">34 de las 50 cadenas top en el mundo de comida rápida</p>
      </div>

      <div className="flex flex-row justify-center px-2 md:px-16 text-center">
        <p className="text-green-600 font-semibold text-lg md:text-2xl">27 de las 50 cadenas top en el mundo de servicio en la mesa</p>
      </div>
    </div>

{/* CAROUSEL DE LAS MARCAS MUNDIAL */}

    <div className="pt-20 md:pt-40">
        <p className="text-3xl md:text-5xl text-teal-800 md:px-60 2xl:px-96 font-semibold text-center">Marcas a nivel mundial</p>
    </div>

    <div className="h-full pt-10 md:pt-16 flex flex-col items-center justify-center">
      <Carousel />
    </div>

{/* CAROUSEL DE LAS MARCAS */}

    <div className="pt-20 md:pt-40">
         <p className="text-3xl md:text-5xl text-teal-800 md:px-60 2xl:px-96 font-semibold text-center">Marcas actualmente en el Perú</p>

      <div className="h-full pt-10 md:pt-16 flex flex-col items-center justify-center">
      <CarouselPeru />
      </div>
    </div>

{/* SPOT 5 */}

    <div className="pt-32">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 px-2 md:px-40 py-2">

        <div className="bg-blue-500 flex flex-col gap-5 py-4 items-center text-center md:justify-between md:py-6 rounded-xl">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" fill="#fff"></path> <path d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="px-2 md:px-16 md:py-2 text-white md:font-semibold">Cerca de 90,000 sitios usan el software Aloha pos a nivel mundial</p>
          <div className="p-2 bg-slate-900 rounded-full">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M20.5719 14.75C20.8498 13.8832 20.9998 12.9591 20.9998 12C20.9998 10.2423 20.496 8.60233 19.6248 7.21658C19.588 7.23784 19.5454 7.25001 19.4998 7.25001H17.8539C16.968 7.25001 16.2498 7.96819 16.2498 8.85411C16.2498 9.65109 15.7995 10.3797 15.0867 10.7361L15.0061 10.7764C14.3726 11.0931 13.627 11.0931 12.9936 10.7764L12.9129 10.7361C12.2001 10.3797 11.7498 9.65109 11.7498 8.85411C11.7498 7.96819 11.0316 7.25001 10.1457 7.25001H9.99983C8.75719 7.25001 7.74983 6.24265 7.74983 5.00001V4.0647C5.27174 5.3947 3.48867 7.85158 3.08594 10.75H5.99983C7.24247 10.75 8.24983 11.7574 8.24983 13C8.24983 13.9665 9.03333 14.75 9.99983 14.75C11.2425 14.75 12.2498 15.7574 12.2498 17V20.9966C13.4963 20.9626 14.6796 20.6752 15.7498 20.1839V17C15.7498 15.7574 16.7572 14.75 17.9998 14.75H20.5719Z" fill="#fff"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" strokeWidth="2"></path> <path d="M3.5 11H6C7.10457 11 8 11.8954 8 13V13C8 14.1046 8.89543 15 10 15V15C11.1046 15 12 15.8954 12 17V20.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 4V5C8 6.10457 8.89543 7 10 7H10.1459C11.1699 7 12 7.83011 12 8.8541V8.8541C12 9.55638 12.3968 10.1984 13.0249 10.5125L13.1056 10.5528C13.6686 10.8343 14.3314 10.8343 14.8944 10.5528L14.9751 10.5125C15.6032 10.1984 16 9.55638 16 8.8541V8.8541C16 7.83011 16.8301 7 17.8541 7H19.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 19.5V17C16 15.8954 16.8954 15 18 15H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
        </div>

        <div className="bg-green-500 flex flex-col gap-5 py-4 items-center text-center md:justify-between md:py-6 rounded-xl">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" fill="#fff"></path> <path d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="px-2 md:px-16 md:py-2 text-white md:font-semibold">Casi 30,000 sitios usan NCR Back office a nivel mundial</p>
          <div className="p-2 bg-slate-900 rounded-full">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M4 10C4 8.11438 4 7.17157 4.58579 6.58579C5.17157 6 6.11438 6 8 6H12H16C17.8856 6 18.8284 6 19.4142 6.58579C20 7.17157 20 8.11438 20 10V12V14C20 15.8856 20 16.8284 19.4142 17.4142C18.8284 18 17.8856 18 16 18H12H8C6.11438 18 5.17157 18 4.58579 17.4142C4 16.8284 4 15.8856 4 14V12V10Z" fill="#fff"></path> <path d="M4 10C4 8.11438 4 7.17157 4.58579 6.58579C5.17157 6 6.11438 6 8 6H12H16C17.8856 6 18.8284 6 19.4142 6.58579C20 7.17157 20 8.11438 20 10V12V14C20 15.8856 20 16.8284 19.4142 17.4142C18.8284 18 17.8856 18 16 18H12H8C6.11438 18 5.17157 18 4.58579 17.4142C4 16.8284 4 15.8856 4 14V12V10Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"></path> <path d="M3 21H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
        </div>

        <div className="bg-yellow-500 flex flex-col gap-5 py-4 items-center text-center md:justify-between md:py-6 rounded-xl">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" fill="#fff"></path> <path d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="px-2 md:px-16 md:py-2 text-white md:font-semibold">200M de transacciones de Aloha</p>
          <div className="p-2 bg-slate-900 rounded-full">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#fff"></path> <path opacity="0.1" d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill="#fff"></path> <path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="#fff" strokeWidth="2"></path> <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="#fff" strokeWidth="2"></path> <path d="M15 3L12.0605 5.93945V5.93945C12.0271 5.97289 12.0271 6.02711 12.0605 6.06055V6.06055L15 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 21L11.9473 18.0527V18.0527C11.9764 18.0236 11.9764 17.9764 11.9473 17.9473V17.9473L9 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 6C14.8284 6 16.2426 6 17.1213 6.87868C18 7.75736 18 9.17157 18 12V15" stroke="#fff" strokeWidth="2"></path> <path d="M12 18C9.17157 18 7.75736 18 6.87868 17.1213C6 16.2426 6 14.8284 6 12L6 9" stroke="#fff" strokeWidth="2"></path> </g></svg>
          </div>
        </div>

        <div className="bg-red-500 flex flex-col gap-5 py-4 items-center text-center md:justify-between md:py-6 rounded-xl">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" fill="#fff"></path> <path d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="px-2 md:px-16 md:py-2 text-white md:font-semibold">66M órdenes via móviles/web</p>
          <div className="p-2 bg-slate-900 rounded-full">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" fill="#fff"></path> <path d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#fff" strokeWidth="2"></path> </g></svg>
          </div>
        </div>

        <div className="bg-purple-500 flex flex-col gap-5 py-4 items-center text-center md:justify-between md:py-6 rounded-xl">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" fill="#fff"></path> <path d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="px-2 md:px-16 md:py-2 text-white md:font-semibold">15,000 sitios Aloha para delivery</p>
          <div className="p-2 bg-slate-900 rounded-full">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z" fill="#fff"></path> <path d="M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6V6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"></path> <path d="M3 3H3.5V3C4.1642 3 4.72218 3.49942 4.79553 4.15955L5.55558 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18C8.32843 18 9 18.6716 9 19.5Z" stroke="#fff" strokeWidth="2"></path> <path d="M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z" stroke="#fff" strokeWidth="2"></path> </g></svg>
          </div>
        </div>

        <div className="bg-gray-500 flex flex-col gap-5 py-4 items-center text-center md:justify-between md:py-6 rounded-xl">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" fill="#fff"></path> <path d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="px-2 md:px-16 md:py-2 text-white md:font-semibold">75% de la solución esta en la nube o en el móvil</p>
          <div className="p-2 bg-slate-900 rounded-full">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.27126 16C4.31103 14.7751 3 12.5463 3 10C3 6.13401 6.02208 3 9.75 3C13.1779 3 16.009 5.64982 16.4425 9.08201C16.4575 9.20119 16.5708 9.28382 16.6895 9.26537C16.8724 9.23695 17.0595 9.22222 17.25 9.22222C19.3211 9.22222 21 10.9633 21 13.1111C21 14.2576 20.5216 15.2882 19.7605 16" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path> <path d="M13 20.5V13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 18L12.6833 20.6833V20.6833C12.8582 20.8582 13.1418 20.8582 13.3167 20.6833V20.6833L16 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
        </div>
      </div>
    </div>

{/* FOOTER */}

    <div className="pt-16 md:pt-32">
      <Footer />
    </div>

    </section>

  )
}

export default Home