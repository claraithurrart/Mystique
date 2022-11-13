import React from 'react'
import './ShoppingCart.css'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingReducers from '../Reducers/ShoppingReducers'
import Navbar from '../Navegation/NavBar';

function ShoppingCart(){

 
 
    const context= useContext(ShopContext);
      console.log (context.cart)

 

   return (
     
       <>
       <Navbar/>
       <h1 className='title'>CARRITO</h1>
      
       {context.cart.map((p) =>{ 
        return (<div className='itemCarrito'> <p className='itemNombre'> {p.newItem.name} </p>
               <p className='itemInfo'>Cantidad: {p.quantity}</p>
               <p className='itemInfo'>Precio: {p.newItem.precio}</p>
               <img src= {p.newItem.image}></img>
         
              <Button className='bButton' onClick={() => context.removeProductFromCart(p.newItem.id)}> Eliminar </Button>

              </div>
          
           );
         })}

   </>
  
     )  } 
 export default ShoppingCart;