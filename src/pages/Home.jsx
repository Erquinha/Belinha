import React from 'react';
import Slideshow from '../components/Slideshow';
import Product from '../components/Product'; 
import '../css/Home.css'; 

function Home() {
  return (
    <div className="home">
      <Slideshow />
      <div className="products">
        <Product name="KIT BELEZA FEMININA" price="R$ 159,99" img="/2,,,.webp"/>
        <Product name="KIT PAZ E AMOR" price="R$ 159,99" img="/1,,,.webp" />
        <Product name="KIT ARCOÍRIS DE BELEZA" price="R$ 279,99" img="public/cacho.webp" />
        <Product name="KIT DELICADEZA FEMININA" price="R$ 235,99" img="/3,,,.jpg" />
      </div>
    </div>
  );
}

export default Home;
