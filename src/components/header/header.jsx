import { NavLink } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/logo_header.png";
function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Logo KASA" />
        </NavLink>
      </div>
      <div className="headerRight">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
