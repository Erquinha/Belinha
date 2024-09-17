import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Product.css"; 


function Product({ name, price, img }) {
  const navigate = useNavigate();

  const handleComprarAgora = () => {
    navigate('/checkoutMeusPedidos'); // Redireciona para a página de checkout
  };

  return (
    <div className="product">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="buy-now" onClick={handleComprarAgora}>Comprar Agora</button>
    </div>
  );
}

export default Product;
