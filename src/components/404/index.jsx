import "./style.css";
import { NavLink } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="notFound">
        <div className="notFoundTitle">404</div>
        <div className="notFoundSubTitle">
          Oups! La page que vous demandez n'existe pas.
        </div>
      </div>
      <NavLink to="/" className="notFoundButton">
        Retourner sur la page d’accueil
      </NavLink>
    </>
  );
}

export default NotFound;
