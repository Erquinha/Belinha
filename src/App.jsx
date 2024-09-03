import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Novidades from './pages/Novidades.jsx';
import MaisVendidos from './pages/MaisVendidos.jsx';
import Sobre from './pages/Sobre.jsx';
import CheckoutMeusPedidos from './pages/CheckoutMeusPedidos.jsx';
import './css/header.css';
import './css/footer.css';
import './css/home.css';
import './css/novidades.css';
import './css/maisVendidos.css';
import './css/sobre.css';
import './css/checkoutMeusPedidos.css';
import './css/sobre.css';  


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
