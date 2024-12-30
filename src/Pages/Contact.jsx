import NavbarMobile from "../Components/NavbarMobile"
import bgAbout from '../assets/aboutbg.png'

function Contact() {

  return (

    <div className="w-full h-full">
      <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${bgAbout})` }}>
      
      <NavbarMobile />

        <div className="grid grid-cols-1 py-20">

          <div className="flex flex-col text-center gap-5 px-2 py-10 md:py-20">
            <div>
              <p className="text-xl md:text-3xl font-semibold">Nos adaptamos al tamaño y formato de tu restaurante</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-green-500">IntelliPOS</p>
              <p className="text-lg md:text-2xl font-semibold text-slate-700">El mejor Software para tu Restaurante</p>
            </div>
          </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-row w-[70%] shadowcontact rounded-xl mx-40 p-2">
            <div className="bg-slate-800 w-96 rounded-xl px-10 py-10">
              <div className="pt-5">
                <p className="text-white text-xl font-semibold">Informacion de contacto</p>
                <p className="text-white">Pudes escribirnos directo al Whatsapp</p>
              </div>
              <div className="grid grid-rows-3 py-10">
                <div className="flex flex-row gap-5">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2bc700"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z" fill="#2bc700"></path> </g></svg>
                  <p className="text-white">+51 999999999</p>
                </div>
                <div className="flex flex-row gap-5">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2bc700"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28397 12.1083C3.70912 7.22201 8.02178 3.25 12.8523 3.25C15.6636 3.25 17.6986 4.16965 18.981 5.56536C20.2618 6.95924 20.9197 8.9663 20.7125 11.3964C20.2611 14.8772 18.8615 15.8252 18.1958 15.9697C17.8355 16.0479 17.5754 15.9487 17.4329 15.8262C17.3056 15.7167 17.189 15.521 17.2378 15.1744L18.2721 7.4174C18.3451 6.86996 17.9605 6.367 17.413 6.29401L16.9174 6.22792C16.37 6.15493 15.867 6.53955 15.794 7.08699L15.7793 7.19766C15.2714 6.70421 14.6546 6.30909 13.9342 6.05059C10.8495 4.94365 7.58806 6.96619 6.43793 10.0817C5.28638 13.201 6.4685 16.8379 9.56582 17.9494C11.5253 18.6525 13.556 18.093 15.0716 16.7926C15.2517 17.1454 15.4986 17.46 15.8028 17.7217C16.5881 18.3969 17.6641 18.6433 18.7261 18.4128C20.9033 17.9402 22.6878 15.6574 23.1955 11.6887C23.1976 11.6722 23.1994 11.6557 23.2008 11.6392C23.4647 8.62581 22.6623 5.87667 20.8219 3.87384C18.9789 1.86813 16.2234 0.75 12.8523 0.75C6.70601 0.75 1.32927 5.73254 0.79338 11.8917C0.250578 18.1302 4.86475 23.25 11.1008 23.25C13.0255 23.25 14.2577 23.0912 16.0641 22.3275L16.2943 22.2301C16.803 22.015 17.0411 21.4283 16.826 20.9196L16.6313 20.4591C16.4162 19.9504 15.8295 19.7124 15.3208 19.9275L15.0905 20.0248C13.6716 20.6247 12.7897 20.75 11.1008 20.75C6.35995 20.75 2.86574 16.9152 3.28397 12.1083ZM8.78321 10.9475C9.57932 8.79101 11.6022 7.86986 13.0898 8.40367C14.5648 8.93296 15.5115 10.8999 14.7168 13.0525C13.9207 15.209 11.8978 16.1301 10.4102 15.5963C8.93524 15.067 7.98852 13.1001 8.78321 10.9475Z" fill="#2bc700"></path> </g></svg>
                  <p className="text-white">contacto@intellipos.com.pe</p>
                </div>
                <div className="flex flex-row gap-5 items-center">
                  <svg width="32px" height="32px" fill="#2bc700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2bc700"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2a8,8,0,0,0-7.992,8A12.816,12.816,0,0,0,12,22v0H12v0a12.816,12.816,0,0,0,7.988-12A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path></g></svg>
                  <p className="text-white">Calle Sanzio 150 – Urb. La Calera de La Merced, Lima 15038</p>
                </div>
              </div>
              <div className="flex flex-row gap-5 pb-5">
                <a href="">
                <svg width="32px" height="32px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M241.871,256.001 C249.673,256.001 256,249.675 256,241.872 L256,14.129 C256,6.325 249.673,0 241.871,0 L14.129,0 C6.324,0 0,6.325 0,14.129 L0,241.872 C0,249.675 6.324,256.001 14.129,256.001 L241.871,256.001" fill="#395185"> </path> <path d="M176.635,256.001 L176.635,156.864 L209.912,156.864 L214.894,118.229 L176.635,118.229 L176.635,93.561 C176.635,82.375 179.742,74.752 195.783,74.752 L216.242,74.743 L216.242,40.188 C212.702,39.717 200.558,38.665 186.43,38.665 C156.932,38.665 136.738,56.67 136.738,89.736 L136.738,118.229 L103.376,118.229 L103.376,156.864 L136.738,156.864 L136.738,256.001 L176.635,256.001" fill="#FFFFFF"> </path> </g> </g></svg>
                </a>
                <a href="">
                <svg width="32px" height="32px" viewBox="-1.5 0 259 259" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z" fill="#00E676"> </path> <path d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z" fill="#FFFFFF"> </path> </g> </g></svg>
                </a>
              </div>
            </div>
            <div className="subgrid2 px-10">
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-2 gap-10 items-center">
                  <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="" className="font-semibold">Nombre</label>
                    <input type="text" id="nombre" placeholder="Ejemplo: Juan Perez" className="p-2"/>
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="" className="font-semibold">Telefono</label>
                    <input type="number" id="telefono" placeholder="Ejemplo: 987654321" className="p-2 sin-flechas"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10 items-center">
                  <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="" className="font-semibold">Correo electronico</label>
                    <input type="email" id="email" placeholder="Ejemplo: ejemplo@correo.com.pe" className="p-2"/>
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="" className="font-semibold">¿Cual es el nombre de tu negocio?</label>
                    <input type="text" id="empresa" placeholder="Ejemplo: Restaurante Marca" className="p-2"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-rows-2 gap-5 py-5">
                  <div>
                    <p className="font-semibold">Seleccione el tipo de negocio</p>
                  </div>
                  <div className="grid grid-cols-3">
                    <label>
                      <input type="radio" name="subject" value="general" />
                      <span className="pl-2">Restaurante</span>
                    </label>
                    <label>
                      <input type="radio" name="subject" value="general" />
                      <span className="pl-2">Retail</span>
                    </label>
                    <label>
                      <input type="radio" name="subject" value="general" />
                      <span className="pl-2">Bodega</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col gap-5">
                    <label htmlFor="" className="font-semibold">Mensaje</label>
                    <textarea type="text" placeholder="Escribe tu mensaje" className="rounded-xl p-2 border-2 border-black"/>
                  </div>
                </div>
                <div className="text-end py-5">
                  <button className="btn-info">Enviar Mensaje</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

      </div>
    </div>

  )

}

export default Contact