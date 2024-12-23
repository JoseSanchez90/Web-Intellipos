import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Products from './Pages/Products'
import Software from './Pages/Software'
import Hardware from './Pages/Hardware'
import Clients from './Pages/Clients'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/nosotros" element={<About />}></Route>
            <Route path="/productos" element={<Products />}></Route>
            <Route path="/soluciones/software" element={<Software />}></Route>
            <Route path="/soluciones/hardware" element={<Hardware />}></Route>
            <Route path="/clientes" element={<Clients />}></Route>
            <Route path="/contactanos" element={<Contact />}></Route>
        </Routes>
        <Footer />  
    </>
  )
}

export default App
