import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Novidades from './pages/Novidades.jsx';
import MaisVendidos from './pages/MaisVendidos.jsx';
import Sobre from './pages/Sobre.jsx';
import CheckoutMeusPedidos from './pages/CheckoutMeusPedidos.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/maisVendidos" element={<MaisVendidos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/checkoutMeusPedidos" element={<CheckoutMeusPedidos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
