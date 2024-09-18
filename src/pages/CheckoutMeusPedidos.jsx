import React, { useState } from 'react';
import '../css/CheckoutMeusPedidos.css';
import '../css/footer.css';
import { useNavigate } from 'react-router-dom';

function CheckoutMeusPedidos() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    pagamento: 'Cartão de Crédito',
    numeroCartao: '',
    validade: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Navegar para a página do cupom fiscal e passar os dados do formulário
    navigate('/cupom-fiscal', { state: { formData } });
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            placeholder="Seu endereço"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Forma de Pagamento:</label>
          <select
            name="pagamento"
            value={formData.pagamento}
            onChange={handleChange}
          >
            <option>Cartão de Crédito</option>
            <option>Boleto</option>
            <option>Pix</option>
          </select>
        </div>
        {formData.pagamento === 'Cartão de Crédito' && (
          <>
            <div className="form-group">
              <label>Número do Cartão:</label>
              <input
                type="text"
                name="numeroCartao"
                placeholder="Número do cartão"
                value={formData.numeroCartao}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Data de Validade:</label>
              <input
                type="text"
                name="validade"
                placeholder="MM/AA"
                value={formData.validade}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <button type="submit" className="btn-finalizar">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutMeusPedidos;
