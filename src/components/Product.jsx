import React from 'react';

function Product({ name, price }) {
  return (
    <div className="product">
      <img src={`images/${name}.jpg`} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

export default Product;
