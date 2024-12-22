import NavbarMobile from '../Components/NavbarMobile'

function Software() {

  return (

    <div className="w-full h-full">

      <div className="w-full h-full bg-blue-950">
        
        <NavbarMobile />
        
        <div className="flex flex-col items-center pt-44 gap-10">
          <p className="text-4xl font-semibold text-white">Llevamos la administración de tu restaurante al siguiente nivel</p>
          <p className="text-2xl font-semibold text-white px-96 text-center">El manejo de tu restaurante no tiene por qué ser difícil, cuentas con una herramienta eficiente, escalable y fácil de usar, lo que resultará en más clientes satisfechos y leales</p>
          <iframe width="800" height="450" src="https://www.youtube.com/embed/EbRcmiT_YBI?si=iniO9LOwkTBbJIcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="flex flex-col items-center pt-28 gap-10">
          <p className="text-4xl font-semibold text-white">OPERACION</p>
          <p className="text-2xl font-semibold text-white px-96 text-center">ALOHA NCR trae consigo la eficiencia en la operatividad para llegar a las metas de control interno que pueda tener el restaurante</p>
          <iframe width="800" height="450" src="https://www.youtube.com/embed/EbRcmiT_YBI?si=iniO9LOwkTBbJIcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

    </div>

  )

}

export default Software