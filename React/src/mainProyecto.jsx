import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MenuIcon from './components/MenuProyecto'
import MenuP from './components/MenuP'



createRoot(document.getElementById('menu')).render(
    <StrictMode>
    <h1 className='text-center text-xl p-10'>CARRITO DE COMPRAS</h1>
      <MenuP/>
      <main>
        <h2>Seccion 1</h2>
        <h2>Seccion 2</h2>
        <h2>Seccion 3</h2>
        <h2>Seccion 4</h2>
      </main>
    </StrictMode>
)