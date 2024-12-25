import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavbarMobile from '../Components/NavbarMobile'
import equipo0 from '../assets/equipo0.png'

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const result = await axios('https://67647a5952b2a7619f5cb464.mockapi.io/api/productos');
        setProducts(result.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };  

    fetchProducts();

  }, []);

  return (

    <div className="h-full w-full">
      
{/* NAVBAR MOBILE */}
    <NavbarMobile />

      <div className="h-screen flex items-center">
          <div className="h-96 md:h-64 w-full top-20 bgcolorprod flex flex-col md:flex-row items-center justify-center md:px-40 gap-10 md:gap-32">
            <div>
              <img src={equipo0} alt={equipo0} className="w-48 md:w-96" />
            </div>
            <div className="bg-white bgcaract px-10 md:px-12 py-8 md:py-10 md:mt-24">
                <div className="flex flex-col">
                  <p className="text-lg md:text-3xl font-semibold md:font-bold">TERMINAL DE PUNTO</p>
                  <p className="text-base md:text-3xl font-semibold md:font-bold">DE VENTA</p>
                </div>
                <div className="py-2">
                  <p className="text-base md:text-lg font-medium">NCR PX10</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-slate-500">Especificación</p>
                  <p className="text-xs text-slate-500">16.3 MP APS-C X-Trans CMOS II Sensor</p>
                  <p className="text-xs text-slate-500">0.39" 2,360k-Dot 0.62x OLED Viewfinder</p>
                  <p className="text-xs text-slate-500">3.0" 920k-Dot Tilting LCD Monitor</p>
                  <p className="text-xs text-slate-500">Full HD 1080p Video Recording at 60 fps</p>
                  <p className="text-xs text-slate-500">Built-In Wi-Fi Connectivity</p>
                  <p className="text-xs text-slate-600 font-semibold pt-4">Precio no incluye IGV</p>
                </div>
                <div className="flex flex-col pt-4 gap-2">
                  <p className="text-base font-bold">Desde:</p>
                  <p className="text-xl md:text-4xl font-bold">US$1199.00</p>
                  <button className="buynow px-6 md:px-12 py-2 md:py-5 bg-green-500 text-white text-lg md:text-2xl font-semibold md:font-bold rounded-xl">COMPRAR AHORA</button>
                </div>
            </div>
          </div>
      </div>

{/* PRODUCTOS */}

      <div className="h-full w-full">
        <div className="flex flex-row md:gap-10 px-2 md:px-36 py-10 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
            {products.map((product) => (

              <div key={product.id} className="grid grid-cols-2 gap-5 md:gap-10 py-5 md:py-10 px-2 md:px-6 object-fill rounded-lg" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                <div className="w-full h-full flex flex-col px-5 gap-3 items-center justify-between">
                  <h3 className="font-semibold md:font-bold text-base md:text-xl text-center text-black">{product.name}</h3>
                  <img src={product.img} alt={product.img} className="w-20 md:w-40 h-12 md:h-36 "/>
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <h3 className="font-semibold md:font-bold text-base md:text-lg text-slate-700">{product.model}</h3>
                <div className="w-full h-full flex flex-col justify-between">
                  <h3 className="font-light md:font-normal text-sm text-black">{product.description}</h3>
                  <button className="btn-contact">Cotizar</button>
                </div>

                  {/* <div className="h-28 md:h-40 flex flex-col justify-between">
                      
                      
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    
                  </div> */}
                </div>
              </div>          
              
            ))}
          </div>
        </div>
      </div>

{/* GOOGLE MAPS OFICINA  */}

      <div className="w-full h-full flex flex-col items-center gap-5 md:gap-10 pb-10 md:pb-20">
        <p className="text-xl md:text-3xl font-semibold md:font-bold text-center">Ubicacion exacta de nuestra Oficina</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9528446676923!2d-77.00103062536448!3d-12.11537904318117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7ef85c2afe7%3A0x3e4c3619b9146e1e!2sC.%20Sanzio%20150%2C%20Lima%2015038!5e0!3m2!1ses-419!2spe!4v1734885222677!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[350px] h-[250px] md:w-[800px] md:h-[400px] border-0"
         allowFullScreen="">
        </iframe>
      </div>

    </div>

  )

}

export default Products