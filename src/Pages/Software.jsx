import NavbarMobile from '../Components/NavbarMobile'
import operacion from '../assets/operacion.jpg'
import administracion from '../assets/administracion.jpg'
import fidelizacion from '../assets/fidelizacion.jpg'
import POS from '../assets/circuloPOS.png'

function Software() {

  return (

    <div className="w-full h-full">

      <div className="w-full h-screen bg-slate-950 pt-5 pb-32">
        
        <NavbarMobile />

{/* SPOT 1 */}
        
        <div className="flex flex-col items-center pt-44 md:pt-36 gap-10">
          <p className="text-xl md:text-2xl font-semibold text-white text-center">LLEVAMOS LA ADMINISTRACION DE TU RESTAURANTE AL SIGUIENTE NIVEL</p>
          <p className="text-sm md:text-xl font-normal md:font-normal text-white px-2 md:px-80 text-center">El manejo de tu restaurante no tiene por qué ser difícil, cuentas con una herramienta eficiente, escalable y fácil de usar, lo que resultará en más clientes satisfechos y leales</p>
          <iframe className="w-[355px] h-[200px] md:w-[600px] md:h-[350px]" src="https://www.youtube.com/embed/EbRcmiT_YBI?si=iniO9LOwkTBbJIcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

{/* SPOT 2 */}

        <div className="flex flex-col items-center py-10 md:pt-28 md:py-28 gap-16">
          <div className="flex flex-col justify-center gap-10">
            <p className="text-xl md:text-2xl font-semibold text-black text-center">OPERACION</p>
            <p className="text-sm md:text-xl font-normal md:font-normal text-black px-2 md:px-80 text-center">ALOHA NCR trae consigo la eficiencia en la operatividad para llegar a las metas de control interno que pueda tener el restaurante</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 md:px-20 2xl:px-40">
            <div>
              <img src={operacion} alt={operacion} className="rounded-lg operacion" />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-10 px-5 md:px-32 2xl:px-20">
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg className="w-8 h-8" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>clo-cloud-computer-network</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="64px-Glyph" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="clo-cloud-computer-network" fill="#2bc700"> <path d="M45,32 L32,32 L32,27 C32,26.447 31.553,26 31,26 C30.447,26 30,26.447 30,27 L30,32 L17,32 C16.447,32 16,32.447 16,33 L16,39 C16,39.553 16.447,40 17,40 C17.553,40 18,39.553 18,39 L18,34 L44,34 L44,39 C44,39.553 44.447,40 45,40 C45.553,40 46,39.553 46,39 L46,33 C46,32.447 45.553,32 45,32" id="Fill-192"> </path> <path d="M56,43 C56,42.447 55.553,42 55,42 L35,42 C34.447,42 34,42.447 34,43 L34,54 L56,54 L56,43 Z" id="Fill-193"> </path> <path d="M36,60 L54,60 C56.206,60 58,58.206 58,56 L32,56 C32,58.206 33.794,60 36,60" id="Fill-194"> </path> <path d="M28,43 C28,42.447 27.553,42 27,42 L7,42 C6.447,42 6,42.447 6,43 L6,54 L28,54 L28,43 Z" id="Fill-195"> </path> <path d="M8,60 L26,60 C28.206,60 30,58.206 30,56 L4,56 C4,58.206 5.794,60 8,60" id="Fill-196"> </path> <path d="M36.333,24 L24.333,24 C20.841,24 18,21.159 18,17.667 C18,14.491 20.35,11.854 23.401,11.401 C23.854,8.35 26.491,6 29.667,6 C31.805,6 33.754,7.054 34.922,8.797 C35.386,8.711 35.857,8.667 36.333,8.667 C40.56,8.667 44,12.105 44,16.333 C44,20.561 40.56,24 36.333,24" id="Fill-197"> </path> </g> </g> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Administra mesas y clientes</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path></g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Permite toma de pedidos</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" className="w-8 h-8" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M15.3,27.1c-0.7-0.4-1.3-0.9-1.8-1.5c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c0.7,0.8,1.4,1.5,2.3,2 c0.4,0.3,0.7,0.7,0.7,1.1c0,0.6,0.4,1,1,1s1-0.4,1-1C17,28.8,16.4,27.7,15.3,27.1z"></path> <path d="M5,5v17c0,1.7,1.3,3,3,3h1v-2V4V2H8C6.3,2,5,3.3,5,5z"></path> <path d="M21,12.5V5c0-1.7-1.3-3-3-3h-7v1v1v19v1v1h6.8c0.1,0.9,0.5,1.8,1.2,2.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4c-0.6-0.6-0.8-1.5-0.5-2.3c0.1-0.4,0-0.7-0.2-1l-3.3-3.3c-1-1-1.1-2.7-0.3-4l3.2,3.2l1,1c0.4,0.4,1,0.4,1.4,0 s0.4-1,0-1.4L21,17.6v-2.8c1.9,1.3,3,3.4,3,5.7V30c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.5C26,17.1,24.1,14,21,12.5z M17,10 c0,0.6-0.4,1-1,1s-1-0.4-1-1V6c0-0.6,0.4-1,1-1s1,0.4,1,1V10z"></path> </g> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Pago rápido de la cuenta</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-8 h-8" viewBox="0 0 226.175 226.176" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="191.285,127.482 191.297,127.471 191.273,127.471 "></polygon> <path d="M199.895,92.217c6.309-4.25,10.656-12.625,10.656-20.164c0-10.644-8.623-19.272-19.267-19.272 c-7.611,0-14.169,4.415-17.299,10.817c1.248,1.553,2.027,3.504,2.027,5.648v15.877c1.778,2.829,4.031,5.331,6.661,7.094 c-2.325,0.588-4.542,1.428-6.661,2.402v13.625c0,4.978-4.043,9.028-9.03,9.028h-6.229l3.599,3.598v3.715 c6.705,1.924,16.812,2.887,26.908,2.887l-9.761-9.762l8.227-19.893h-0.085l-3.197-3.66c1.553,0.555,3.16,0.886,4.829,0.886 c1.674,0,3.282-0.332,4.822-0.886l-3.19,3.66h-0.086l8.233,19.893l-9.768,9.762c17.439,0.012,34.891-2.85,34.891-8.599 C226.182,109.16,214.996,96.053,199.895,92.217z"></path> <path d="M146.018,101.695c0,4.21-0.877,8.538-2.43,12.666h23.395c3.373,0,6.12-2.746,6.12-6.117V69.252 c0-3.37-2.747-6.123-6.12-6.123h-58.55c-3.367,0-6.123,2.753-6.123,6.123v4.335c3.928-1.796,8.251-2.819,12.781-2.819 C132.147,70.768,146.018,84.642,146.018,101.695z"></path> <path d="M141.183,119.572c-0.956,1.748-2.058,3.416-3.245,5h23.498v-2.484l-2.49-2.51h-17.763V119.572z"></path> <polygon points="115.091,173.395 115.097,173.383 115.079,173.383 "></polygon> <path d="M126.228,127.774c8.172-5.492,13.792-16.331,13.792-26.086c0-13.768-11.167-24.935-24.929-24.935 c-9.843,0-18.332,5.711-22.384,13.993c1.623,2.015,2.637,4.54,2.637,7.313v20.532c2.295,3.666,5.215,6.899,8.607,9.183 c-3.008,0.768-5.87,1.839-8.607,3.118v17.609c0,6.437-5.237,11.68-11.691,11.68h-8.056l4.652,4.651v4.811 c8.68,2.491,21.75,3.733,34.818,3.739l-12.638-12.629l10.662-25.745h-0.113l-4.134-4.737c2.009,0.719,4.092,1.145,6.253,1.145 c2.159,0,4.238-0.42,6.235-1.139l-4.125,4.731h-0.106l10.649,25.745l-12.638,12.629c22.569,0.006,45.136-3.696,45.136-11.125 C160.236,149.695,145.762,132.731,126.228,127.774z"></path> <path d="M49.024,163.165v-6.747h34.635c4.36,0,7.925-3.562,7.925-7.916V98.06c0-4.363-3.565-7.925-7.925-7.925H7.919 C3.562,90.135,0,93.69,0,98.06v50.442c0,4.348,3.562,7.916,7.919,7.916h34.638v6.747H18.326l-3.228,3.239v3.228h61.391v-3.228 l-3.23-3.239H49.024z"></path> </g> </g> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Registro de asistencia</p>
              </div>
            </div>

          </div>

        </div>

{/* spot 3 */}

        <div className="flex flex-col bg-slate-950 items-center py-10 md:pt-28 md:py-28 gap-16">
          <div className="flex flex-col justify-center gap-10">
            <p className="text-xl md:text-2xl font-semibold text-white text-center">ADMINISTRACION</p>
            <p className="text-sm md:text-xl font-normal md:font-normal text-white px-2 md:px-80 text-center">Aloha NCR tiene los controles necesarios para la operatividad y gestión del restaurante o cadena de restaurantes. Manejo de inventario y control de costos de los insumos; detecta anomalías en las operaciones; visibilidad en tiempo real de lo que está pasando en tu negocio; y este manejo en toda la cadena de producción como las tiendas Restaurantes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 md:px-20 2xl:px-40">

            <div className="grid grid-cols-2 gap-4 md:gap-10 px-5 md:px-32 2xl:px-20">
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" className="w-8 h-8" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-999 1001 256 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-960.8,1112.9l4.7-11.9H-978l3.8,11.9H-960.8z M-967,1161.8c13.1,0,23.7-10.7,23.7-23.7c0-9.2-5.3-17.2-12.9-21.2v-0.1 h-21.9v0.1c-7.7,4-12.8,11.9-12.8,21.2C-990.9,1151.1-980.2,1161.8-967,1161.8z M-968.3,1140.9c-3.6-1.1-6-2.8-6-6.1 c0-3,2.1-5.3,5.7-6v-3.1h3.3v3c2.3,0.1,3.7,0.6,4.8,1.1l-1,3.7c-0.9-0.4-2.4-1.1-4.8-1.1c-2.1,0-2.8,1-2.8,1.8c0,1.1,1.1,1.8,4,2.8 c4,1.4,5.5,3.3,5.5,6.2s-2.1,5.5-6,6.1v3.4h-3.3v-3.1c-2.3-0.1-4.4-0.7-5.7-1.4l1-3.8c1.4,0.7,3.4,1.4,5.5,1.4 c1.8,0,3.1-0.7,3.1-2.1C-964.8,1142.5-965.9,1141.8-968.3,1140.9z M-871.2,1110.4c15.5,0,28-12.5,28-28s-12.4-28-28-28 c-15.5,0-28,12.5-28,28C-899.1,1098-886.6,1110.4-871.2,1110.4z M-936.2,1191.5h-50.3c-16.3,0-17.2-24.9,0.3-24.9h43.6l25-36.8 c7.4-10.1,15.8-14.9,27.7-14.9h37.3c11.9,0,20.3,4.4,27.7,14.9l25.1,36.8h43.9c17.6,0,16.5,24.9,0.6,24.9h-50.3 c-4,0-8.8-1.4-11.6-5.7l-19.2-27.4l-0.1,68.6h-68.8l-0.1-68.6l-19.2,27.4C-927.4,1190-932.2,1191.5-936.2,1191.5z"></path> <circle cx="-773.9" cy="1102.6" r="5.3"></circle> <path d="M-780.1,1158.8c0,1.6,1.3,3,3,3c1.6,0,3-1.3,3-3v-24.7h1.3l0,24.7c0,1.6,1.3,3,3,3c1.6,0,3-1.3,3-3l0-42.7h1.3v15.7 c0,3.2,4.1,3.2,4.1,0v-16.1c0-3.5-2-6.9-6.1-6.9h-11.8c-3.7,0-6.1,3-6.1,6.8v16.2c0,3.1,4.1,3.1,4.1,0v-15.7h1.3L-780.1,1158.8z"></path> </g></svg>
                <p className="text-sm md:text-base text-white font-light text-center">Tomar mejores decisiones</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" className="w-8 h-8" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 188" xml:space="preserve" stroke="#2bc700"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M63,133c-13,0-23.5,10.5-23.5,23.5s10.5,23.5,23.5,23.5c13,0,23.5-10.5,23.5-23.5S76,133,63,133z M63,165.4 c-4.9,0-9-4.1-9-9c0-4.9,4.1-9,9-9c4.9,0,9,4.1,9,9C72,161.4,68,165.4,63,165.4z M210.8,132c-13,0-23.5,10.5-23.5,23.5 s10.5,23.5,23.5,23.5c13,0,23.5-10.5,23.5-23.5S223.8,132,210.8,132z M210.8,164.4c-4.9,0-9-4.1-9-9c0-4.9,4.1-9,9-9 c4.9,0,9,4.1,9,9C219.8,160.4,215.8,164.4,210.8,164.4z M-0.5,143.1c0,4.6,3.7,8.2,8.2,8.2h22.6c0.9,0,1.7-0.7,1.9-1.5 c2.6-14.7,15.4-24.9,30.8-24.9s28.3,10.2,30.8,24.9c0.2,0.9,0.9,1.5,1.9,1.5H99h30.9V115H-0.5V143.1z M253.6,134.5h-5v-22 c0-7.5-6.1-13.6-13.7-13.6h-24.3c-0.5,0-1-0.3-1.4-0.6l-38-37c-1.7-1.7-4.1-2.7-6.6-2.8h-27.5v92.8h40.9c0.9,0,1.7-0.7,1.9-1.5 c2.6-14.7,15.4-25.9,30.8-25.9s28.3,11.2,30.8,25.9c0.2,0.9,0.9,1.5,1.9,1.5h3.2c4.9,0,8.7-3.9,8.7-8.7v-6.3 C255.5,135.4,254.6,134.5,253.6,134.5z M191.1,99h-41.4c-1,0-1.9-0.9-1.9-1.9V70.7c0-1,0.9-1.9,1.9-1.9h13.9c0.5,0,1,0.3,1.5,0.6 l27.5,26.3C193.5,97,192.7,99,191.1,99z"></path> </g> </g> </g> <path d="M57.8,101.5H17.1V60.8h15.7v13h9.3v-13h15.7V101.5z M110.9,101.5H70.3V60.8H86v13h9.3v-13h15.7V101.5z M84.7,48.3H44V7.6 h15.7v13H69v-13h15.7V48.3z"></path> </g></svg>
                <p className="text-sm md:text-base text-white font-light text-center">Controlar costos de inventario</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" className="w-8 h-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 297 297"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m112.632,185.074l6.88-3.972c2.804-1.619 3.765-5.205 2.146-8.01l-13.036-22.579c-1.086-1.881-3.057-2.933-5.083-2.933-0.995,0-2.003,0.253-2.926,0.787l-6.88,3.972c-0.945,0.545-1.947,0.794-2.923,0.794-3.063,0-5.872-2.449-5.872-5.872v-7.944c0-3.238-2.625-5.864-5.864-5.864h-26.073c-3.238,0-5.864,2.625-5.864,5.864v7.944c0,3.423-2.81,5.872-5.872,5.872-0.976,0-1.978-0.249-2.923-0.794l-6.88-3.972c-0.923-0.533-1.932-0.786-2.926-0.787-2.027,0-3.997,1.052-5.083,2.933l-13.036,22.579c-1.619,2.805-0.658,6.391 2.146,8.01l6.88,3.972c3.909,2.257 3.909,7.899 0,10.156l-6.88,3.972c-2.805,1.619-3.765,5.205-2.146,8.01l13.036,22.579c1.086,1.881 3.057,2.933 5.083,2.933 0.995,0 2.003-0.254 2.926-0.787l6.88-3.972c0.945-0.545 1.947-0.794 2.923-0.794 3.063,0 5.872,2.449 5.872,5.872v7.944c0,3.238 2.625,5.864 5.864,5.864h26.072c3.238,0 5.864-2.625 5.864-5.864v-7.944c0-3.423 2.81-5.872 5.872-5.872 0.976,0 1.978,0.249 2.923,0.794l6.88,3.972c0.923,0.533 1.932,0.787 2.926,0.787 2.027,0 3.997-1.052 5.083-2.933l13.036-22.579c1.619-2.805 0.658-6.391-2.146-8.01l-6.88-3.972c-3.908-2.257-3.908-7.9 0.001-10.156zm-46.594,22.474c-9.608,0-17.396-7.789-17.396-17.396 0-9.608 7.789-17.396 17.396-17.396s17.396,7.789 17.396,17.396c0,9.607-7.789,17.396-17.396,17.396z"></path> <path d="m108.109,23.659c-3.146-3.144-8.243-3.144-11.389,0-3.145,3.146-3.145,8.244 0,11.389l14.39,14.389c-52.889,2.619-95.701,44.162-100.334,96.506l1.19-2.062c3.406-5.9 9.756-9.565 16.57-9.564 0.144,0 0.287,0.013 0.431,0.017 9.074-37.721 41.965-66.251 81.815-68.729l-14.062,14.061c-3.145,3.145-3.145,8.244 0,11.389 1.573,1.572 3.633,2.358 5.694,2.358s4.122-0.786 5.694-2.358l28.004-28.004c1.51-1.511 2.358-3.559 2.358-5.694 0-2.136-0.848-4.184-2.358-5.694l-28.003-28.004z"></path> <path d="m209.868,64.857c17.881,0 32.428-14.547 32.428-32.428 0-17.882-14.547-32.429-32.428-32.429-17.881,0-32.428,14.547-32.428,32.428 0,17.881 14.547,32.429 32.428,32.429z"></path> <path d="m273.039,152.276v-44.58c0-12.34-7.93-23.283-19.657-27.124l-.054-.018-17.152-2.84c-1.46-0.449-3.02,0.324-3.545,1.764l-19.462,53.399c-1.123,3.081-5.48,3.081-6.602,0l-19.462-53.399c-0.424-1.163-1.522-1.892-2.698-1.892-0.279,0-17.999,2.964-17.999,2.964-11.823,3.94-19.723,14.9-19.723,27.294v44.432c0,6.659 5.398,12.056 12.056,12.056h102.241c6.66-2.84217e-14 12.057-5.398 12.057-12.056z"></path> <path d="m287.37,162.933c-0.673,9.215-8.233,14.858-17.45,15.526-7.062,40.425-41.207,71.64-82.979,74.237l14.061-14.061c3.145-3.146 3.145-8.244 0-11.389-3.146-3.144-8.243-3.144-11.389,0l-28.003,28.004c-3.145,3.146-3.145,8.244 0,11.389l28.003,28.003c1.573,1.572 3.633,2.358 5.694,2.358s4.122-0.786 5.694-2.358c3.145-3.145 3.145-8.244 0-11.389l-14.389-14.389c56.028-2.774 100.758-49.227 100.758-105.931z"></path> <path d="m216.936,77.105c-0.747-0.814-1.84-1.224-2.946-1.224h-8.245c-1.105,0-2.198,0.41-2.946,1.224-1.157,1.261-1.325,3.082-0.504,4.505l4.407,6.644-2.063,17.405 4.063,10.808c0.396,1.087 1.933,1.087 2.33,0l4.063-10.808-2.063-17.405 4.407-6.644c0.822-1.423 0.654-3.244-0.503-4.505z"></path> </g> </g></svg>
                <p className="text-sm md:text-base text-white font-light text-center">Mejorar la gestión del pesonal</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" className="w-8 h-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M485.083,27.49H26.917C12.075,27.49,0,39.565,0,54.407v329.879c0,14.842,12.075,26.917,26.917,26.917h173.535 l-7.016,56.125h-29.069c-4.744,0-8.591,3.846-8.591,8.591c0,4.744,3.846,8.591,8.591,8.591h183.266 c4.744,0,8.591-3.846,8.591-8.591c0-4.744-3.846-8.591-8.591-8.591h-29.069l-7.016-56.125h173.535 c14.842,0,26.917-12.075,26.917-26.917V54.407C512,39.565,499.925,27.49,485.083,27.49z M210.75,467.329l7.016-56.125h76.467 l7.016,56.125H210.75z M494.819,384.286c0,5.369-4.367,9.736-9.736,9.736H26.917c-5.369,0-9.736-4.367-9.736-9.736V54.407 c0-5.369,4.367-9.736,9.736-9.736h458.166c5.369,0,9.736,4.367,9.736,9.736V384.286z"></path> </g> </g> <g> <g> <path d="M402.613,64.143H45.244c-4.744,0-8.591,3.846-8.591,8.591v284.063c0,4.744,3.846,8.591,8.591,8.591h27.493 c4.744,0,8.591-3.846,8.591-8.591c0-4.744-3.845-8.591-8.591-8.591H53.834V81.324h348.779c4.744,0,8.591-3.846,8.591-8.591 C411.204,67.99,407.357,64.143,402.613,64.143z"></path> </g> </g> <g> <g> <path d="M466.756,64.143h-27.49c-4.744,0-8.591,3.846-8.591,8.591c0,4.744,3.846,8.591,8.591,8.591h18.899v266.881h-348.78 c-4.744,0-8.591,3.846-8.591,8.591c0,4.744,3.846,8.591,8.591,8.591h357.37c4.744,0,8.591-3.846,8.591-8.591V72.734 C475.347,67.99,471.5,64.143,466.756,64.143z"></path> </g> </g> <g> <g> <path d="M411.776,109.96c-14.842,0-26.917,12.075-26.917,26.917c0,4.567,1.147,8.869,3.161,12.641l-68.831,72.88 c-3.429-1.586-7.244-2.479-11.264-2.479c-7.165,0-13.679,2.819-18.506,7.399l-58.783-31.12c0.23-1.415,0.355-2.864,0.355-4.342 c0-14.842-12.075-26.917-26.917-26.917s-26.917,12.075-26.917,26.917c0,4.151,0.946,8.086,2.631,11.6l-67.251,65.274 c-3.693-1.908-7.877-2.994-12.313-2.994c-14.842,0-26.917,12.075-26.917,26.917s12.075,26.917,26.917,26.917 c14.842,0,26.917-12.075,26.917-26.917c0-4.151-0.946-8.086-2.631-11.6l67.251-65.274c3.693,1.908,7.878,2.994,12.313,2.994 c7.165,0,13.679-2.819,18.506-7.399l58.783,31.12c-0.23,1.415-0.355,2.864-0.355,4.342c0,14.842,12.075,26.917,26.917,26.917 s26.917-12.075,26.917-26.917c0-4.567-1.147-8.87-3.162-12.641l68.831-72.88c3.429,1.586,7.244,2.479,11.264,2.479 c14.842,0,26.917-12.075,26.917-26.917S426.619,109.96,411.776,109.96z M100.224,302.389c-5.369,0-9.736-4.367-9.736-9.736 c0-5.369,4.367-9.736,9.736-9.736c5.369,0,9.736,4.367,9.736,9.736C109.96,298.022,105.592,302.389,100.224,302.389z M204.075,201.593c-5.369,0-9.736-4.367-9.736-9.736c0-5.369,4.366-9.736,9.736-9.736c5.369,0,9.736,4.367,9.736,9.736 C213.811,197.225,209.444,201.593,204.075,201.593z M307.925,256.573c-5.369,0-9.736-4.367-9.736-9.736 c0-5.369,4.367-9.736,9.736-9.736c5.369,0,9.736,4.367,9.736,9.736C317.661,252.205,313.294,256.573,307.925,256.573z M411.776,146.613c-5.369,0-9.736-4.367-9.736-9.736s4.367-9.736,9.736-9.736c5.369,0,9.736,4.367,9.736,9.736 S417.145,146.613,411.776,146.613z"></path> </g> </g> <g> <g> <path d="M411.776,183.266c-4.744,0-8.591,3.846-8.591,8.591v128.286c0,4.744,3.846,8.591,8.591,8.591 c4.744,0,8.591-3.846,8.591-8.591V191.857C420.367,187.113,416.521,183.266,411.776,183.266z"></path> </g> </g> <g> <g> <path d="M204.075,238.246c-4.744,0-8.591,3.846-8.591,8.591v73.307c0,4.744,3.846,8.591,8.591,8.591 c4.744,0,8.591-3.846,8.591-8.591v-73.307C212.666,242.092,208.819,238.246,204.075,238.246z"></path> </g> </g> <g> <g> <path d="M307.925,293.226c-4.744,0-8.591,3.846-8.591,8.591v18.327c0,4.744,3.846,8.591,8.591,8.591s8.591-3.846,8.591-8.591 v-18.327C316.516,297.072,312.669,293.226,307.925,293.226z"></path> </g> </g> </g></svg>
                <p className="text-sm md:text-base text-white font-light text-center">Contar con información analítica</p>
              </div>
            </div>

            <div>
              <img src={administracion} alt={administracion} className="rounded-lg operacion" />
            </div>

          </div>
        </div>

{/* SPOT 4 */}

        <div className="flex flex-col items-center py-10 md:pt-28 md:py-28 gap-16">
          <div className="flex flex-col justify-center gap-10">
            <p className="text-xl md:text-2xl font-semibold text-black text-center">FIDELIZACION</p>
            <p className="text-sm md:text-xl font-normal md:font-normal text-black px-2 md:px-80 text-center">La experiencia del cliente es lo más importante y es el fin de todos los esfuerzos que se realizan en un restaurante. Para ello las buenas practicas como las mejores herramientas que brinda la solución de Aloha NCR podrás obtener estos resultados en tu negocio-restaurante</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 md:px-20 2xl:px-40">
            <div>
              <img src={fidelizacion} alt={fidelizacion} className="rounded-lg operacion" />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-10 px-5 md:px-32 2xl:px-20">
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z" stroke="#2bc700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Facilita las transacciones</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg className="w-8 h-8" fill="#2bc700" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 260 184" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M182.1,134.5c3.7-12.9,8-22.6,18.4-26.9c10.3-4.3,23.2-24.9,29.7-22c6.4,2.9,5.1,10,1.1,15.7c-4,5.7-11.2,13.8-11.2,13.8 l31,8.4c0,0,7.3,2.4,6.9,8.2c-0.4,5.8-17.4,4.8-17.4,4.8s15.8,6.3,14.3,12.4s-19.2,2-19.2,2s13.7,8.9,10,15.1 c-3.6,6.3-19.2-2.1-19.2-2.1s12.8,9.2,8.9,14.6c-3.9,5.4-18.8-4.8-18.8-4.8S172.9,166.8,182.1,134.5z M92.2,1.8 C42.4,1.8,2,42.2,2,92c0,49.8,40.4,90.2,90.2,90.2c49.8,0,90.2-40.4,90.2-90.2C182.5,42.2,142.1,1.8,92.2,1.8z M55.7,61.3 c8.6,0,15.5,6.9,15.5,15.5s-6.9,15.5-15.5,15.5s-15.5-6.9-15.5-15.5S47.2,61.3,55.7,61.3z M92.2,153.8c-21.3,0-40.6-12.6-49.1-32.2 l12.9-5.6c6.2,14.4,20.4,23.7,36.1,23.7c15.7,0,29.9-9.3,36.1-23.7l12.9,5.6C132.8,141.2,113.6,153.8,92.2,153.8z M128.7,92.4 c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S137.3,92.4,128.7,92.4z"></path> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Crea una relacion de confianza</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg className="w-8 h-8" fill="#2bc700" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 210 256" enable-background="new 0 0 210 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M174.55,144.5L174.55,144.5c-1.4-4-5-6.5-9.2-6.5H159V23c0-11.708-9.292-21-21-21H25C12.57,2,2,12.57,2,25v183 c0,11.9,10.95,22,22.75,22l114.213,0c1.207,0,2.27,0.984,2.18,2.188c-0.095,1.266-1.153,1.812-2.393,1.812h-45.5L128,254h80 L174.55,144.5z M82.05,220.2c-3.199,0-5.599-2.399-5.6-5.598c-0.001-3.045,2.557-5.602,5.602-5.602 c3.199,0.001,5.598,2.401,5.598,5.6C87.55,217.8,85.25,220.2,82.05,220.2z M144,138h-19.65c-5.3,0-9.8,4.7-9.8,10l0,0 c0,5.3,4.5,10,9.8,10h19.8v42H18V31h126V138z M80.053,135.746c24.707,0.244,44.498-20.237,44.579-44.417 c0.244-24.707-19.628-44.417-44.417-44.579S35.718,66.987,35.636,91.166C35.393,115.874,55.874,135.583,80.053,135.746z M97.771,73.53c4.389,0.244,7.599,3.373,7.437,7.762c-0.244,4.389-3.373,7.599-7.762,7.437c-4.389-0.244-7.599-3.373-7.437-7.762 S93.341,73.367,97.771,73.53z M80.216,123.636c-10.81-0.081-20.481-6.38-25.398-16.864c-0.853-2.073,0.244-4.389,2.235-5.283 c2.072-0.853,4.389,0.244,5.892,2.438c3.21,6.908,9.956,11.419,17.555,11.582c7.599,0.163,14.182-4.308,17.352-11.338 c1.138-2.316,3.698-3.129,5.527-2.154c2.316,1.138,3.292,3.21,2.154,5.527C101.144,117.337,91.025,123.839,80.216,123.636z M63.961,73.53c4.389,0.244,7.599,3.373,7.437,7.762c-0.244,4.389-3.373,7.599-7.762,7.437c-3.82-0.081-7.599-3.373-7.437-7.762 C56.28,77.147,59.572,73.367,63.961,73.53z"></path> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Brinda una excelente experiencia</p>
              </div>
              <div className="flex flex-col border-2 border-green-500 rounded-xl gap-1 md:gap-4 p-2 md:p-4 px-2 py-2 items-center">
                <svg fill="#2bc700" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-8 h-8" viewBox="0 0 482.586 482.586" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M299.684,154.26c-8.187,8.188-5.545,19.518,0.703,27.117l25.291-25.291C323.355,153.765,311.184,142.759,299.684,154.26z"></path> <path d="M242.189,281.092c-0.823-1.363-1.931-2.755-3.205-4.029l-7.445-7.446c-0.281,0.273-0.56,0.548-0.833,0.821 c-12.69,12.69-15.482,22.767-8.299,29.948c5.102,5.104,11.3,4.998,16.578-0.281c5.029-5.026,6.364-12.802,3.256-18.923 L242.189,281.092z"></path> <path d="M482.387,162.324L463.239,34.42c-1.166-7.792-7.282-13.909-15.073-15.074L320.262,0.198 c-5.623-0.842-11.311,1.034-15.33,5.053L5.251,304.932c-7,6.999-7,18.352,0,25.352l147.052,147.051c7,7.002,18.351,7.002,25.351,0 l299.682-299.682C481.355,173.634,483.23,167.945,482.387,162.324z M202.998,347.434c-0.641,12.88-7.441,25.887-20.213,38.66 c-10.673,10.672-22.865,17.571-30.065,20.236c-1.442,0.534-3.059-0.031-3.855-1.347l-9.987-16.509 c-0.491-0.812-0.598-1.799-0.291-2.694c0.307-0.898,0.996-1.613,1.882-1.955c9.769-3.759,19.252-9.793,26.018-16.561 c9.414-9.413,11.2-18.869,4.777-25.291c-5.729-5.729-13.111-5.089-29.251,2.542c-23.556,11.388-41.204,10.744-53.929-1.979 c-17.061-17.062-14.123-42.92,7.306-64.352c8.198-8.196,17.04-14.357,26.28-18.312c1.5-0.644,3.244-0.056,4.049,1.364L135,277.611 c0.453,0.799,0.541,1.755,0.243,2.622c-0.3,0.868-0.957,1.567-1.805,1.918c-7.803,3.232-14.837,7.946-20.907,14.02 c-10.151,10.149-9.052,18.486-4.636,22.902c6.055,6.054,14.075,3.36,30.936-4.228c22.953-10.562,39.739-9.401,52.806,3.663 C199.499,326.372,203.535,336.646,202.998,347.434z M283.153,282.914l-14.741,14.739c-1.095,1.096-2.813,1.251-4.085,0.374 l-5.952-4.104l-0.421,0.422c0.975,9.896-3.019,19.876-11.242,28.101c-14.575,14.574-32.802,11.598-43.276,1.124 c-10.013-10.014-12.461-22.72-7.076-36.741c4.499-11.719,13.653-22.387,20.539-29.272l0.59-0.583l-0.985-0.985 c-3.306-3.306-10.477-7.228-21.356,3.653c-5.447,5.448-10.195,13.092-12.7,20.441c-0.305,0.899-0.994,1.618-1.881,1.958 c-0.887,0.343-1.878,0.272-2.708-0.188l-11.889-6.604c-1.366-0.76-1.985-2.393-1.466-3.866 c2.092-5.946,7.449-17.771,19.825-30.146c19.763-19.764,40.461-19.957,59.854-0.563l23.886,23.886 c4.048,4.048,9.901,9.688,14.81,13.579c0.716,0.568,1.155,1.414,1.208,2.326C284.14,281.377,283.8,282.267,283.153,282.914z M313.717,252.351l-16.825,16.824c-1.251,1.251-3.279,1.251-4.531,0l-95.227-95.226c-1.252-1.253-1.252-3.28,0-4.532 l16.824-16.825c1.252-1.251,3.28-1.251,4.533,0l95.226,95.227C314.969,249.068,314.969,251.1,313.717,252.351z M379.89,181.938 c-4.237,8.851-10.983,18.036-19.507,26.559c-11.163,11.163-23.662,17.229-36.144,17.542c-12.545,0.316-24.825-5.168-35.516-15.856 c-17.662-17.662-25.812-47.531-1.967-71.376c10.233-10.233,22.327-14.634,34.974-12.725c10.303,1.556,20.937,7.372,29.939,16.377 c2.666,2.665,4.757,5.197,6.042,6.852c0.99,1.276,0.875,3.09-0.265,4.233l-42.309,42.308c8.568,7.307,21.308,4.825,32.457-6.323 c6.056-6.055,10.663-12.009,14.504-18.738c0.443-0.773,1.188-1.33,2.056-1.532c0.867-0.203,1.781-0.034,2.521,0.463l12.115,8.178 C380.109,178.785,380.576,180.504,379.89,181.938z M409.843,114.281c-11.47,11.469-30.065,11.469-41.536-0.003 c-11.47-11.469-11.471-30.064,0-41.535c11.471-11.47,30.066-11.47,41.536,0C421.312,84.213,421.312,102.81,409.843,114.281z"></path> </g> </g> </g></svg>
                <p className="text-sm md:text-sm 2xl:text-base text-black font-light text-center">Ofrece beneficios exclusivos</p>
              </div>
            </div>
          </div>
        </div>

{/* SPOT 5 */}

        <div className="flex flex-col py-20 gap-20 md:py-20 md:gap-12 items-center">
          <p className="text-2xl px-10 md:text-3xl font-medium text-center">Cubrimos el ciclo completo de su operación en restaurantes</p>
          <img src={POS} alt={POS} className="w-[350px] h-[350px] md:w-[600px] md:h-[600px]" />
        </div>

    </div>

  )

}

export default Software