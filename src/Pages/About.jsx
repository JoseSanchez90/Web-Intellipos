import React from 'react'
import NavbarMobile from '../Components/NavbarMobile'
import CarouselPeru from '../Components/Carousel-food-peru'
import bgAbout from '../assets/4.jpg'
import aboutbg from '../assets/aboutbg.png'
import aboutbg2 from '../assets/aboutbg2.png'
import pos from '../assets/pos.jpg'
import aloha from '../assets/aloha.png'
import ncr from '../assets/ncr.png'
import nstarw from '../assets/3nstar-white.png'

function About() {
  return (

    <div className="h-full w-full">

      <div className="bg-center h-screen bg-cover" style={{ backgroundImage: `url(${bgAbout})` }}>
    
{/* NAVBAR MOBILE */}

      <NavbarMobile />

{/* SPOT 1 */}

            <div className="w-full h-full flex flex-col py-40 md:grid md:grid-cols-2 md:items-center md:pt-48 2xl:pt-60 px-2 2xl:px-10 md:py-36 2xl:py-48 animate-fade-down animate-duration-[1000ms] animate-delay-500">
              <div className="h-full flex flex-col justify-start pr-20">
                <p className="text-white text-start font-light md:font-semibold text-lg md:text-xl px-2 md:mx-5 py-4 border-y-2 md:border-y-4 border-green-500">Somos IntelliPOS, representantes de la Corporación NCR para su solución de restaurantes ALOHA</p>
              </div>
              <div className="h-full flex flex-col md:justify-end pl-20">
                <p className="text-white text-end font-light md:font-semibold text-lg md:text-xl px-2 md:mx-10 py-4 border-y-2 md:border-y-4 border-green-500">Aloha cubre el ciclo completo de operaciones y gestión del sector de restaurantes, está es una solución global instalada en más de 100,000 restaurantes</p>
              </div>
            </div>

      </div>

{/* SPOT 2 */}

      <div className="bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutbg})`}}>

          <div className="grid grid-cols-1 pt-5 py-10 md:px-20">
            
            <p className="font-medium md:font-bold text-lg md:text-xl px-2 md:px-40 text-center py-10 md:py-20 text-green-950">Nuestro objetivo principal es la de satisfacer las necesidades de nuestros clientes con los productos y servicios de clase mundial, siendo el soporte de post-venta la pieza clave para la continuidad en las operaciones cotidianas del negocio-restaurante</p>

            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10 px-12 md:px-48">

              <div className="h-40 md:h-full text-white about-bg1 flex flex-col gap-2 md:gap-4 px-4 md:px-6 py-6 md:py-10 text-center rounded-xl md:hover:scale-95 transition duration-150">
                <p className="text-base md:text-xl font-normal md:font-semibold">MISIÓN</p>
                <p className="text-sm md:text-base font-light md:font-normal">Convertirnos en el socio tecnológico de nuestros clientes, permitiéndoles brindar servicios eficientes y de calidad</p>
              </div>
              <div className="h-40 md:h-full text-white about-bg2 flex flex-col gap-2 md:gap-4 px-4 md:px-6 py-6 md:py-10 text-center rounded-xl md:hover:scale-95 transition duration-150">
                <p className="text-base md:text-xl font-normal md:font-semibold">VISIÓN</p>
                <p className="text-sm md:text-base font-light md:font-normal">Ser reconocidos en el mercado nacional como la empresa que brinda el mejor producto, ofreciendo un servicio y soporte de clase mundial</p>
              </div>

            </div>

          </div>

      </div>

{/* SPOT 3 */}

      <div className="bg-cover h-full bg-center bg-no-repeat md:pb-40" style={{ backgroundImage: `url(${aboutbg2})`}}>

        <div className="grid grid-cols-1 py-20 md:py-0 md:pt-20 md:px-40">
          
          <p className="font-medium md:font-bold text-lg md:text-2xl text-green-950 md:px-32 text-center py-5 md:py-10">NUESTROS VALORES</p>

          <div className="grid grid-cols-2 gap-1 px-2 md:gap-4 md:px-36">

            <div className="text-white about-bg flex flex-col gap-1 md:gap-4 px-2 md:px-6 py-4 md:py-8 md:text-center rounded-tl-xl md:rounded-xl md:hover:scale-95 transition duration-150">
              <p className="text-base md:text-xl text-center md:font-semibold">RESPETO</p>
              <p className="text-sm text-center font-light md:font-normal">Aceptación y reconocimiento de los valores, puntos de vista y prácticas de nuestros asociados, clientes y proveedores</p>
            </div>
            <div className="text-white about-bg flex flex-col gap-1 md:gap-4 px-2 md:px-6 py-4 md:py-8 md:text-center rounded-tr-xl md:rounded-xl md:hover:scale-95 transition duration-150">
              <p className="text-base md:text-xl text-center md:font-semibold">CALIDAD</p>
              <p className="text-sm text-center font-light md:font-normal">Implantar productos y servicios que operen con eficiencia, de acuerdo a sus expectativas y que les permitan potenciar su negocio, creando valor para los clientes y propietarios</p>
            </div>
            <div className="text-white about-bg flex flex-col gap-1 md:gap-4 px-2 md:px-6 py-4 md:py-8 md:text-center rounded-bl-xl md:rounded-xl md:hover:scale-95 transition duration-150">
              <p className="text-base md:text-xl text-center md:font-semibold">COMPROMISO Y RESPONSABILIDAD</p>
              <p className="text-sm text-center font-light md:font-normal">Cumplimiento de los acuerdos y condiciones establecidos con los clientes, proveedores y empleados en calidad, contenido, plazos y presupuestoseedores</p>
            </div>
            <div className="text-white about-bg flex flex-col gap-1 md:gap-4 px-2 md:px-6 py-4 md:py-8 md:text-center rounded-br-xl md:rounded-xl md:hover:scale-95 transition duration-150">
              <p className="text-base md:text-xl text-center md:font-semibold">ACTITUD POSITIVA Y DE RESPETO</p>
              <p className="text-sm text-center font-light md:font-normal">Disposición y ánimos de siempre atender las necesidades de nuestros clientes con altos estándares de calidad</p>
            </div>

          </div>
        </div>

      </div>

{/* SPOT 4 */}

      <div className="bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${pos})`}}>

        <div className="flex flex-col md:gap-10 py-16 md:py-28 md:px-48">

          <div>
            <p className="font-medium md:font-bold text-lg md:text-3xl text-white text-center">Nuestros proveedores</p>
          </div>

          <div className="py-10">
            <p className="md:font-semibold md:text-2xl px-2 text-white text-center">Mantenemos sociedad con proveedores que atesoran valores compatibles con nuestra visión de empresa y que se caracterizan por tener larga experiencia y un comportamiento ético ejemplar</p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 items-center">
            <img src={aloha} alt={aloha} className="w-40 py-6 md:w-64" />
            <img src={ncr} alt={ncr} className="w-40 py-6 md:w-64" />
            <img src={nstarw} alt={nstarw} className="w-40 py-6 md:w-64" />
          </div>

        </div>
        
      </div>

{/* SPOT 5 */}

      <div className="bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutbg2})`}}>

        <div className="flex flex-col gap-5 md:gap-10 py-20 md:py-28 px-2 md:px-48">

          <div>
            <p className="font-medium md:font-bold text-lg md:text-3xl text-center">Nuestros Clientes</p>
          </div>

          <div className="pb-5 md:pb-10">
            <p className="md:font-semibold md:text-2xl text-center">Estamos totalmente integrados y encauzados con la calidad del servicio y productos entregados a nuestros clientes y nos esforzamos por contribuir a que obtengan valor y los pueda transmitir a sus propios clientes</p>
          </div>

          <CarouselPeru />

        </div>

      </div>

    </div>

  )
}

export default About