import React from 'react'
import NavbarMobile from '../Components/NavbarMobile'
import CarouselPeru from '../Components/Carousel-food-peru'
import bgAbout from '../assets/4.jpg'
import aboutbg from '../assets/aboutbg.png'
import aboutbg2 from '../assets/aboutbg2.png'
import pos from '../assets/pos.jpg'
import aloha from '../assets/aloha.png'
import ncr from '../assets/ncr.png'
import nstar from '../assets/3nstar.png'

function About() {
  return (

    <div className="h-full w-full">

      <div className="bg-center h-screen bg-cover" style={{ backgroundImage: `url(${bgAbout})` }}>
    
{/* NAVBAR MOBILE */}

      <NavbarMobile />

{/* SPOT 1 */}

            <div className="h-full grid grid-cols-2 items-center px-20 2xl:px-10 animate-fade-down animate-duration-[1000ms] animate-delay-500">
              <p className="text-white font-semibold text-3xl px-10 pb-32">Somos IntelliPOS, representantes de la Corporación NCR para su solución de restaurantes ALOHA</p>
              <p className="text-white font-semibold text-3xl px-10 pt-40">Aloha cubre el ciclo completo de operaciones y gestión del sector de restaurantes, está es una solución global instalada en más de 100,000 restaurantes</p>
            </div>

      </div>

{/* SPOT 2 */}

      <div className="bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutbg})`}}>

          <div className="grid grid-cols-1 pt-10 px-20">
            
            <p className="font-bold text-3xl px-20 text-center py-20 text-green-950">Nuestro objetivo principal es la de satisfacer las necesidades de nuestros clientes con los productos y servicios de clase mundial, siendo el soporte de post-venta la pieza clave para la continuidad en las operaciones cotidianas del negocio-restaurante</p>

            <div className="grid grid-cols-2 gap-10 px-48">

              <div className="text-white about-bg1 flex flex-col gap-4 px-6 py-8 text-center hover:scale-95 transition duration-300">
                <p className="text-xl font-semibold">MISIÓN</p>
                <p className="text-base font-normal">Convertirnos en el socio tecnológico de nuestros clientes, permitiéndoles brindar servicios eficientes y de calidad</p>
              </div>
              <div className="text-white about-bg2 flex flex-col gap-4 px-6 py-8 text-center hover:scale-95 transition duration-300">
                <p className="text-xl font-semibold">VISIÓN</p>
                <p className="text-base font-normal">Ser reconocidos en el mercado nacional como la empresa que brinda los mejores productos tecnológicos en el sector, ofreciendo servicios de implantación, soporte y post venta de clase mundial</p>
              </div>

            </div>
          </div>

      </div>

{/* SPOT 3 */}

      <div className="bg-cover h-full bg-center bg-no-repeat pb-40" style={{ backgroundImage: `url(${aboutbg2})`}}>

        <div className="grid grid-cols-1 pt-20 px-40">
          
          <p className="font-bold text-3xl text-green-950 px-32 text-center py-10">NUESTROS VALORES</p>

          <div className="grid grid-cols-2 gap-4 px-36">

            <div className="text-white about-bg flex flex-col gap-4 px-6 py-8 text-center hover:scale-95 transition duration-300">
              <p className="text-xl font-semibold">RESPETO</p>
              <p className="text-base font-normal">Aceptación y reconocimiento de los valores, puntos de vista y prácticas de nuestros asociados, clientes y proveedores</p>
            </div>
            <div className="text-white about-bg-2 flex flex-col gap-4 px-6 py-8 text-center hover:scale-95 transition duration-300">
              <p className="text-xl font-semibold">CALIDAD</p>
              <p className="text-base font-normal">Implantar productos y servicios que operen con eficiencia, de acuerdo a sus expectativas y que les permitan potenciar su negocio, creando valor para los clientes y propietarios</p>
            </div>
            <div className="text-white about-bg-4 flex flex-col gap-4 px-6 py-8 text-center hover:scale-95 transition duration-300">
              <p className="text-xl font-semibold">COMPROMISO Y RESPONSABILIDAD</p>
              <p className="text-base font-normal">Cumplimiento de los acuerdos y condiciones establecidos con los clientes, proveedores y empleados en calidad, contenido, plazos y presupuestoseedores</p>
            </div>
            <div className="text-white about-bg-3 flex flex-col gap-4 px-6 py-8 text-center hover:scale-95 transition duration-300">
              <p className="text-xl font-semibold">ACTITUD POSITIVA Y DE RESPETO</p>
              <p className="text-base font-normal">Disposición y ánimos de siempre atender las necesidades de nuestros clientes con altos estándares de calidad</p>
            </div>

          </div>
        </div>

        </div>

{/* SPOT 4 */}

      <div className="bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${pos})`}}>

        <div className="flex flex-col gap-10 py-28 px-48">

          <div>
            <p className="font-bold text-5xl text-white text-center">Nuestros proveedores</p>
          </div>

          <div className="pb-10">
            <p className="font-semibold text-3xl text-white text-center">Mantenemos sociedad con proveedores que atesoran valores compatibles con nuestra visión de empresa y que se caracterizan por tener larga experiencia y un comportamiento ético ejemplar</p>
          </div>

          <div className="grid grid-cols-3">
            <img src={aloha} alt={aloha} className="w-64" />
            <img src={ncr} alt={ncr} className="w-64" />
            <img src={nstar} alt={nstar} className="w-64" />
          </div>

        </div>
        
      </div>

{/* SPOT 5 */}

      <div className="bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutbg2})`}}>

        <div className="flex flex-col gap-10 py-28 px-48">

          <div>
            <p className="font-bold text-5xl text-center">Nuestros Clientes</p>
          </div>

          <div className="pb-10">
            <p className="font-semibold text-3xl text-center">Estamos totalmente integrados y encauzados con la calidad del servicio y productos entregados a nuestros clientes y nos esforzamos por contribuir a que obtengan valor y los pueda transmitir a sus propios clientes</p>
          </div>

          <CarouselPeru />

        </div>

      </div>

    </div>

  )
}

export default About