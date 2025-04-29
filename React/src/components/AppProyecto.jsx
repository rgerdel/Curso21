import { Inicio, Nosotros, Productos, Contacto, Carrito } from "./pages/_routesProyecto"
import { Route, Routes } from "react-router-dom"


const AppProyecto = () => {
  return (
    <main className="p-4 flex flex-col gap-4 justify-center items-center min-h-[50vh]">
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/services" element={<Nosotros />} />
      <Route path="/contact" element={<Productos />} />
      <Route path="/login" element={<Contacto />} />
      <Route path="/blog" element={<Carrito />} />
      <Route path="*" element={<h1 className="text-4xl text-center">Error ... No existe esa pagina 404</h1>} />
    </Routes>
    </main>
  )
}

export default AppProyecto