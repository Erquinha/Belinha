import React from 'react';
import '../css/CheckoutMeusPedidos.css'; 
import '../css/footer.css';

function CheckoutMeusPedidos() {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <div className="form-group">
          <label>Nome Completo:</label>
          <input type="text" placeholder="Seu nome completo" />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input type="text" placeholder="Seu endereço" />
        </div>
        <div className="form-group">
          <label>Forma de Pagamento:</label>
          <select>
            <option>Cartão de Crédito</option>
            <option>Boleto</option>
            <option>Pix</option>
          </select>
        </div>
        <button type="submit" className="btn-finalizar">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutMeusPedidos;
