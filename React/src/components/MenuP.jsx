import MenuIcon from "./MenuProyecto"

    const MenuP = () => {

        return(
        <nav className='text-xxl text-center p-3 text-white'> 
        <ul className='flex justify-center gap-5'>
           <MenuIcon descripcion="Inicio"/>
           <MenuIcon descripcion="Nosotros"/>
           <MenuIcon descripcion="Productos"/>
           <MenuIcon descripcion="Contacto"/>
           <MenuIcon descripcion="Carrito"/>     
        </ul>
      </nav>
        )
    }

  
  export default MenuP