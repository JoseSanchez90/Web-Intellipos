import React from 'react'
import logoInt from '../assets/intelliposlogo.png'
import '../Css/Home.css'
import fondo1 from '../assets/3.jpg'

function Home() {
  return (
    <section className="w-full outfit-letters">

      <div className="flex flex-row justify-between px-16 py-6 items-center">
        <div>
          <img src={logoInt} alt={logoInt} className="w-48" />
        </div>
        <div className="font-semibold flex gap-12 items-center">
          <a href="">Inicio</a>
          <a href="">Nosotros</a>
          <a href="">Productos</a>
          <a href="">Soluciones</a>
          <a href="">Clientes</a>
          <a href="" className="bg-green-600 px-5 py-2 rounded-lg text-white">Contactanos</a>
        </div>
      </div>

      <div className="relative h-screen bg-contain bg-no-repeat" style={{ backgroundImage: `url(${fondo1})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="py-48 px-96 right-64 relative">
          <p className="text-green-100 font-semibold text-5xl pb-6">Llevamos la adminsitracion de tu restaurante al siguiente nivel</p>
          <p className="text-green-100 font-normal text-xl pb-8">El manejo de tu restaurante no tiene por qué ser difícil, cuando cuentas con una herramienta eficiente, escalable y fácil de usar, lo que resultará en más clientes satisfechos y leales.</p>
          <button className="info">
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">Solicitar mayor información</span>
          </button>
        </div>

      </div>

    </section>
  )
}

export default Home