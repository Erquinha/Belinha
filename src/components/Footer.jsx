
import React from 'react';
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa'; // Biblioteca de ícones
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contato</h3>
          <p><FaEnvelope className="icon" /> Email: contato@chikbela.com</p>
          <p><FaPhoneAlt className="icon" /> Telefone: (11) 1234-5678</p>
        </div>

        <div className="footer-section links">
          <h3>Envio de Currículo</h3>
          <p><FaEnvelope className="icon" /> Envie seu currículo para: <a href="mailto:curriculos@chikbela.com">curriculos@chikbela.com</a></p>
        </div>

        <div className="footer-section social">
          <h3>Redes Sociais</h3>
          <p><FaFacebook className="icon" /> <a href="https://www.google.com/search?q=facebook&rlz=1C1GCEA_enBR1122BR1122&oq=fac&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDwgCEEUYORiDARixAxiABDINCAMQABiDARixAxiABDIGCAQQBRhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHOTA5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><FaInstagram className="icon" /> <a href="https://www.google.com/search?q=instagram&rlz=1C1GCEA_enBR1122BR1122&oq=ins&gs_lcrp=EgZjaHJvbWUqDwgAEEUYOxiDARixAxiABDIPCAAQRRg7GIMBGLEDGIAEMg8IARBFGDkYgwEYsQMYgAQyEAgCEAAYgwEYsQMYyQMYgAQyDQgDEAAYgwEYsQMYgAQyBwgEEAAYgAQyDQgFEAAYgwEYsQMYgAQyCggGEAAYsQMYgAQyBggHEAUYQNIBCDEzMDFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Chik Bela | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
