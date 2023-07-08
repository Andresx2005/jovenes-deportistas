import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><p>Inicio</p></li>
        <li><p>Sobre nosotros</p></li>
        <li><p>Donar</p></li>
        <li><p>Contacto</p></li>
      </ul>
    </nav>
  );
}

export default Navbar;
