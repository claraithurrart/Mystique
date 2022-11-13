import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img from './carrito.png'

function Navbar (){
    return (
      <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light navegacion">
        <div class="collapse navbar-collapse  navegacion" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active texto"> <Link className='nav-link' to= "/">Home</Link> </li>
            <li class="nav-item active texto"> <Link className='nav-link' to="/Catalogo">Catalogo</Link> </li>
            <li class="nav-item active texto"> <Link className='nav-link' to= "/Contacto">Contacto</Link> </li>
            <li> <Link  to= "/ShoppingCart"> <img src= {img} className='carrito'></img></Link> </li>
           
         
          </ul>
     
        </div>
      </nav>
    </header>
    )
}
export default Navbar; 

