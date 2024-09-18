import React from 'react';
import '../css/CumpomFiscal.css';


function CupomFiscal() {

  const dadosFiscais = {
    nome: 'Erica Santos',
    endereco: 'Rua Exemplo, 123, São Paulo, SP',
    formaPagamento: 'Cartão de Crédito',
    numeroCartao: '1234 5678 9012 3456',
    validade: '12/24',
    codigoSeguranca: '123',
    valorTotal: 'R$ 250,00'
  };

  return (
    <div className="cupom-fiscal">
      <h1>Cupom Fiscal</h1>
      <div className="nota">
        <p><strong>Nome:</strong> {dadosFiscais.nome}</p>
        <p><strong>Endereço:</strong> {dadosFiscais.endereco}</p>
        <p><strong>Forma de Pagamento:</strong> {dadosFiscais.formaPagamento}</p>
        {dadosFiscais.formaPagamento === 'Cartão de Crédito' && (
          <>
            <p><strong>Número do Cartão:</strong> **** **** **** {dadosFiscais.numeroCartao.slice(-4)}</p>
            <p><strong>Validade:</strong> {dadosFiscais.validade}</p>
            <p><strong>Código de Segurança:</strong> {dadosFiscais.codigoSeguranca}</p>
          </>
        )}
        <p><strong>Valor Total:</strong> {dadosFiscais.valorTotal}</p>
      </div>
      <div className="agradecimento">
        <p>Obrigado por comprar conosco!</p>
      </div>
    </div>
  );
}

export default CupomFiscal;
