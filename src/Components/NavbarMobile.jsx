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
    document.addEventListener("touchstart", handleClickOutside);
    
    // Limpiar el listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    
    <div className={`lg:hidden w-full fixed top-0 z-10 bg-white flex justify-between transition-all duration-300 ${isScrolled ? "flex-col shadow-lg bg-white py-5" : "py-7 px-7"}`}>

        <button onClick={() => setIsOpen(!isOpen)} className={`flex flex-col items-center animate-flip-down animate-duration-300 ${isScrolled ? "animate-fade-right" : "animate-fade-left"}`}>
          <svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2dd100"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#2dd100" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
        </button>

        <img src={logo} alt={logo} className={`w-32 animate-flip-down animate-duration-1000 ${isScrolled ? "hidden" : "w-32"}`} />
    
        {isOpen && (
        <div ref={menuRef} className={`absolute z-50 grid grid-cols-2 items-start text-white font-bold mt-10 py-2 px-2 gap-4 bg-green-600 shadow-lg shadow-slate-800 animate-flip-down animate-duration-300 ${isScrolled ? 'w-[270px] grid grid-cols-2 left-[15%] py-2 px-2 justify-start gap-1' : 'text-start'}`}>
          <div className="flex flex-col gap-1">
            <NavLink to="/" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Inicio</NavLink>
            <NavLink to="/nosotros" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Nosotros</NavLink>
            <NavLink to="/productos" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Productos</NavLink>
            <NavLink to="/contactanos" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Contactanos</NavLink>
          </div>
          <div className="flex flex-col">
              <NavLink className="dropdown-item cursor-default text-sm py-1 p-2 w-full">Soluciones</NavLink>
              <div className="ml-4 flex flex-col text-sm py-2">
                <div className="flex flex-row items-center dropdown-item hover:bg-green-800 py-1 px-2 w-full gap-1">
                  <svg fill="#ffffff" width="18px" height="18px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M216.53882,184.42627c-.0188.019-.03443.04-.05347.05908l-48,48a12.0001,12.0001,0,0,1-16.9707-16.9707L179.0293,188H64a12.00028,12.00028,0,0,1-12-12V32a12,12,0,0,1,24,0V164H179.0293l-27.51465-27.51465a12.0001,12.0001,0,1,1,16.9707-16.9707l48,48c.019.019.03467.04.05347.05908.25854.262.50635.53418.74.81885.12012.146.22461.2998.33667.45019.12182.16309.24829.32251.36157.492.11865.177.22168.36084.32983.54272.09205.1543.18921.30518.27417.46387.09864.18408.18213.37329.27051.56128.07862.16723.16211.33179.2334.50317.07593.18311.13721.37036.20361.55664.06568.18311.13623.36377.19288.551.05712.18823.09912.37964.14648.56982.04761.18946.10083.37622.13916.56909.0437.22071.07031.44361.10156.666.0232.16553.05518.32788.07154.49536a12.0756,12.0756,0,0,1,0,2.37256c-.01636.16748-.04834.32983-.07154.49536-.03125.22241-.05786.44531-.10156.666-.03833.19287-.09155.37963-.13916.56909-.04736.19018-.08936.38159-.14648.56982-.05689.1875-.12745.36841-.19312.552-.06616.18555-.12744.37256-.20337.55542-.07129.17188-.15478.33667-.23389.50415-.08789.18775-.17163.37647-.27.56055-.085.15869-.18212.30957-.27417.46387-.10815.18188-.21118.36572-.32983.54272-.11328.16944-.23975.32886-.36157.492-.11206.15039-.21655.3042-.33667.45019C217.04517,183.89209,216.79736,184.16431,216.53882,184.42627Z"></path> </g></svg>
                  <NavLink to="/soluciones/software" className="">Software</NavLink>
                </div>
                <div className="flex flex-row items-center dropdown-item hover:bg-green-800 py-1 px-2 w-full gap-1">
                  <svg fill="#ffffff" width="18px" height="18px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M216.53882,184.42627c-.0188.019-.03443.04-.05347.05908l-48,48a12.0001,12.0001,0,0,1-16.9707-16.9707L179.0293,188H64a12.00028,12.00028,0,0,1-12-12V32a12,12,0,0,1,24,0V164H179.0293l-27.51465-27.51465a12.0001,12.0001,0,1,1,16.9707-16.9707l48,48c.019.019.03467.04.05347.05908.25854.262.50635.53418.74.81885.12012.146.22461.2998.33667.45019.12182.16309.24829.32251.36157.492.11865.177.22168.36084.32983.54272.09205.1543.18921.30518.27417.46387.09864.18408.18213.37329.27051.56128.07862.16723.16211.33179.2334.50317.07593.18311.13721.37036.20361.55664.06568.18311.13623.36377.19288.551.05712.18823.09912.37964.14648.56982.04761.18946.10083.37622.13916.56909.0437.22071.07031.44361.10156.666.0232.16553.05518.32788.07154.49536a12.0756,12.0756,0,0,1,0,2.37256c-.01636.16748-.04834.32983-.07154.49536-.03125.22241-.05786.44531-.10156.666-.03833.19287-.09155.37963-.13916.56909-.04736.19018-.08936.38159-.14648.56982-.05689.1875-.12745.36841-.19312.552-.06616.18555-.12744.37256-.20337.55542-.07129.17188-.15478.33667-.23389.50415-.08789.18775-.17163.37647-.27.56055-.085.15869-.18212.30957-.27417.46387-.10815.18188-.21118.36572-.32983.54272-.11328.16944-.23975.32886-.36157.492-.11206.15039-.21655.3042-.33667.45019C217.04517,183.89209,216.79736,184.16431,216.53882,184.42627Z"></path> </g></svg>
                  <NavLink to="/soluciones/hardware" className="">Hardware</NavLink>
                </div>
              </div>
          </div>
        </div>
            )}

    </div>

  )

}

export default NavbarMobile