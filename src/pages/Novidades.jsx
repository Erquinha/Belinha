import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function Novidades() {
  const navigate = useNavigate();

  const handleComprarAgora = () => {
    navigate('/checkoutMeusPedidos'); 
  };

  return (
    <div className="novidades">
      <Slideshow />
      <div className="products">
        <h2>Pague 2 e Leve 1 Grátis!</h2>
        <div className="product-grid">
          <div className="product-group">
            <div className="product">
              <img src="public/1,,,.webp" alt="KIT ARCOÍRIS DE BELEZA" />
              <p>KIT ARCOÍRIS DE BELEZA</p>
            </div>
            <div className="product">
              <img src="public/3,,,.jpg" alt="KIT PAZ E AMOR" />
              <p>KIT PAZ E AMOR</p>
            </div>
            <div className="product free-item">
              <img src="public/2,,,.webp" alt="KIT BELEZA FEMININA" />
              <p>Free</p>
            </div>
          </div>
          <div className="promotion-info">
            <p>Compre os dois kits acima e leve o KIT BELEZA FEMININA de graça!</p>
          </div>
          <button onClick={handleComprarAgora}>Comprar Agora</button>
        </div>
      </div>
    </div>
  );
}

export default Novidades;
