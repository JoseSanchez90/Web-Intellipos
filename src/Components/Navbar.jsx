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

  const ActiveLinkSol = "text-green-500 font-bold flex flex-row items-center gap-2"
  const InactiveLinkSol = "relative group font-bold flex flex-row items-center gap-2"

  const ActiveLinkSH = "text-green-500 font-bold block px-4 py-2 hover:bg-gray-100 flex-row items-center gap-2"
  const InactiveLinkSH = "block px-4 py-2 hover:bg-gray-100 flex-row items-center gap-2"

  return (
    
  <div className={`hidden w-full fixed top-0 z-10 md:flex flex-row justify-between items-center bg-white transition-all duration-500 ${isScrolled ? "shadow-lg rounded-full bg-slate-100 px-20 py-4 text-sm my-2 mx-2 w-[1400px] transform translate-x-14" : "px-10 py-8 text-base"}`}>
    
      
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

      {/* MENU SOLUCIONES */}

      <div className="relative group">

        <NavLink to="" className={({ isActive }) => isActive ? InactiveLinkSol : ActiveLinkSol }>Soluciones
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"></path>
          </svg>
        </NavLink>

        {/* SUBMENU*/}
        <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg pt-5 w-40">
          <NavLink to="/soluciones/software" className={({ isActive }) => isActive ? ActiveLinkSH : InactiveLinkSH}>Software</NavLink>
          <NavLink to="/soluciones/hardware" className={({ isActive }) => isActive ? ActiveLinkSH : InactiveLinkSH}>Hardware</NavLink>
        </div>
        
      </div>

      <NavLink to="/clientes" className={({ isActive }) => isActive ? ActiveLink : InactiveLink}>Clientes
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>

      <NavLink to="/contacto">
        <button className="btn-contact flex flex-row gap-3 items-center">
          <svg width="24px" height="24px" viewBox="-1.5 0 259 259" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z" fill="#00E676"> </path> <path d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z" fill="#FFFFFF"> </path> </g> </g></svg>
          Contactanos</button>
      </NavLink>
    </div>
  </div>

  )

}

export default Navbar