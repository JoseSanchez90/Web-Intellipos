import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/intelliposlogo.png'

function NavbarMobile() {

const [isOpen, setIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const menuRef = useRef(null);

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
  }, 
  []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Añadir el listener al montar el componente
    document.addEventListener("mousedown", handleClickOutside);
    
    // Limpiar el listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    
    <div className={`lg:hidden w-[100%] fixed top-0 z-10  bg-white flex justify-between transition-all duration-300 ${isScrolled ? "shadow-lg bg-white py-5" : "py-7 px-7"}`}>

        <img src={logo} alt={logo} className={`w-32 animate-flip-down animate-duration-1000 ${isScrolled ? "hidden" : "w-32"}`} />
    
        <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center animate-flip-down animate-duration-900 ${isScrolled ? "w-full flex flex-row justify-center animate-fade-left" : "animate-fade-right"}`}>
        <svg fill="#2dd100" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M217.043,0.001H16.696C7.515,0.001,0,7.479,0,16.697v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V16.697C233.739,7.479,226.224,0.001,217.043,0.001z"></path> </g> </g> <g> <g> <path d="M495.304,0.001H294.957c-9.18,0-16.696,7.477-16.696,16.696v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V16.697C512,7.479,504.485,0.001,495.304,0.001z"></path> </g> </g> <g> <g> <path d="M217.043,278.262H16.696C7.515,278.262,0,285.739,0,294.958v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V294.958C233.739,285.739,226.224,278.262,217.043,278.262z"></path> </g> </g> <g> <g> <path d="M495.304,278.262H294.957c-9.18,0-16.696,7.477-16.696,16.696v200.348c0,9.214,7.482,16.693,16.696,16.693h200.348 c9.214,0,16.696-7.481,16.696-16.693V294.958C512,285.739,504.485,278.262,495.304,278.262z"></path> </g> </g> </g></svg>
        </button>

            {isOpen && (
            <div ref={menuRef} className={`absolute z-50 flex flex-col w-1/3 sm:w-1/4 items-end right-5 text-white font-bold mt-10 bg-green-800 rounded-md shadow-lg animate-flip-down animate-duration-1000 ${isScrolled ? "w-36 left-[45%] translate-[-50%] grid grid-cols-1 justify-items-start" : "items-end"}`}>
                <NavLink to="/" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Inicio</NavLink>
                <NavLink to="/About" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Nosotros</NavLink>
                <a tabIndex="-1" href="#proyectos" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Productos</a>
                <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Soluciones</a>
                <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Clientes</a>
                <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Contactanos</a>
            </div>
            )}

    </div>

  )

}

export default NavbarMobile