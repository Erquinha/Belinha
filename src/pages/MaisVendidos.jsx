import React from 'react';

function MaisVendidos() {
  return (
    <div className="mais-vendidos">
      <h1>Mais Vendidos</h1>
      <div className="produtos">
        <div className="produto">
          <img src="url-da-imagem-1" alt="Produto 1" />
          <button>Comprar Agora</button>
        </div>
        <div className="produto">
          <img src="url-da-imagem-2" alt="Produto 2" />
          <button>Comprar Agora</button>
        </div>
      </div>
    </div>
  );
}

export default MaisVendidos;
