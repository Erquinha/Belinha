import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
        <img src="/logo.png" alt="Logo" className="logo" />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/novidades">Novidades</Link></li>
          <li><Link to="/maisVendidos">Mais Vendidos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/checkoutMeusPedidos">Meus Pedidos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
