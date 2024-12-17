import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Products from './Pages/Products'
import Solutions from './Pages/Solutions'
import Clients from './Pages/Clients'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Nosotros" element={<About />}></Route>
        <Route path="/Productos" element={<Products />}></Route>
        <Route path="/Soluciones" element={<Solutions />}></Route>
        <Route path="/Clientes" element={<Clients />}></Route>
        <Route path="/Contacto" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
