import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function Novidades() {
  const navigate = useNavigate();

  const handleComprarAgora = () => {
    navigate('/checkoutMeusPedidos'); // Redireciona para a página de checkout
  };

  return (
    <div className="novidades">
      <Slideshow />
      <div className="products">
        <h2>Pague 2 e Leve 3!</h2>
        <div className="product-grid">
          <div className="product">
            <img src="url-do-produto-1" alt="Produto 1" />
            <button onClick={handleComprarAgora}>Comprar Agora</button>
          </div>
          <div className="product">
            <img src="url-do-produto-2" alt="Produto 2" />
            <button onClick={handleComprarAgora}>Comprar Agora</button>
          </div>
          <div className="product">
            <img src="url-do-produto-3" alt="Produto 3" />
            <button onClick={handleComprarAgora}>Comprar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novidades;
