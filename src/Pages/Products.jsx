import React from 'react'
import NavbarMobile from '../Components/NavbarMobile'
import equipo0 from '../assets/equipo0.png'

function Products() {

  return (

    <div className="h-full w-full">
      
{/* NAVBAR MOBILE */}
    <NavbarMobile />

      <div className="h-screen flex items-center">
          <div className="h-60 w-full top-20 bgcolor flex items-center">
            <img src={equipo0} alt={equipo0} className="w-96" />
            <div className="bg-white bgcaract px-16 py-10 mt-28">
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-bold">TERMINAL DE PUNTO</p>
                  <p className="text-3xl font-bold">DE VENTA</p>
                </div>
                <div className="py-4">
                  <p className="text-lg font-medium">NCR PX10</p>
                </div>
                <div>
                  <p className="text-lg text-slate-500">Especificación</p>
                  <p className="text-base text-slate-500">16.3 MP APS-C X-Trans CMOS II Sensor</p>
                  <p className="text-base text-slate-500">0.39" 2,360k-Dot 0.62x OLED Viewfinder</p>
                  <p className="text-base text-slate-500">3.0" 920k-Dot Tilting LCD Monitor</p>
                  <p className="text-base text-slate-500">Full HD 1080p Video Recording at 60 fps</p>
                  <p className="text-base text-slate-500">Built-In Wi-Fi Connectivity</p>
                  <p className="text-base text-slate-600 font-semibold">Precio no incluye IGV</p>
                </div>
                <div>
                  <p className="text-base font-bold">Desde:</p>
                  <p className="text-4xl font-bold">US$1199.00</p>
                  <button className="buynow px-12 py-5 bg-lime-400 text-white text-2xl font-bold rounded-xl">COMPRAR AHORA</button>
                </div>
            </div>
          </div>
      </div>

    </div>

  )

}

export default Products