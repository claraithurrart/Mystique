import React from "react"; 
import img from './img/logo.jpg'
import './Home.css'
import Navbar from "../Navegation/NavBar";
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/carrusel1.jpeg'
import img2 from './img/carrusel2.jpeg'
import img3 from './img/carrusel3.jpeg'

 
function Home(props){
return (
    <>
     <div className='headerClass'>
    <img src= {img} />
    </div> 
 
<div>
  <Navbar/>
</div>
 
<Carousel className="carousel">
  <Carousel.Item>
 <img
 className="items"
 src= {img1} 
 alt="First slide"
 />
  
  </Carousel.Item>

  <Carousel.Item>
 <img
 className="items"
 src= {img2} 
 alt="Second slide"
 />
 
  </Carousel.Item>

  <Carousel.Item>
 <img
 className="items"
 src= {img3} 
 alt="Third slide"
 />
  
  </Carousel.Item>
</Carousel>
 

  
  </>
)
}

export default Home; 