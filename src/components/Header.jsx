import './Header.css'
import logo from '../assets/LOGO.jpg'

function Header() {
  return (
    <header>
      <h1>JOVENES DEPORTISTAS</h1>
      <img src={logo} alt="Logo de la página" />
    </header>
  );
};

export default Header