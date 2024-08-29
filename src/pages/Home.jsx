import React from 'react';
import Slideshow from '../components/Slideshow';
import Product from '../components/Product';

function Home() {
  return (
    <div>
      <Slideshow />
      <div className="products">
        {/* Aqui você adiciona os produtos */}
        <Product name="Produto 1" price="R$ 50,00" img="public/melhor-creme-para-cabelo-cacheado-2-.webp"/>
        <Product name="Produto 2" price="R$ 70,00" img="public/2,,,.webp" />
      </div>
    </div>
  );
}

export default Home;
