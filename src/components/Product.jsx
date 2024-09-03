import React from 'react';

function Product({ name, price, img }) {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="buy-now">Comprar Agora</button>
    </div>
  );
}

export default Product;
