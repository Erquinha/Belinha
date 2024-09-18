import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/maisVendidos.css";

function MaisVendidos() {
  const navigate = useNavigate();

  const handleComprarAgora = () => {
    navigate('/checkoutMeusPedidos'); 
  };

  return (
    <div className="mais-vendidos">
      <h1>Mais Vendidos</h1>
      <div className="products">
        <div className="product">
          <img src="public/1,,,.webp" alt="Produto 1" />
          <div className="product-info">
            <p className="price">R$ 159,99</p>
            <button className="buy-now" onClick={handleComprarAgora}>Comprar Agora</button>
          </div>
        </div>
        <div className="product">
          <img src="public/3,,,.jpg" alt="Produto 2" />
          <div className="product-info">
            <p className="price">R$ 235,99</p>
            <button className="buy-now" onClick={handleComprarAgora}>Comprar Agora</button>
          </div>
        </div>
        <div className="product">
          <img src="public/2,,,.webp" alt="Produto 3" />
          <div className="product-info">
            <p className="price">R$ 279,99</p>
            <button className="buy-now" onClick={handleComprarAgora}>Comprar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaisVendidos;
