import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { NavLink, Link } from "react-router-dom";
// importimportar boostrap
import imagenLogo from "../images/Tipologia-image 2.png";
import logoPerfil from "../images/logo-para-perfil.png";
import "./css/header.css";

function Header() {
  const { currentUser } = useContext(AppContext);
  useEffect(() => {}, [currentUser]);
  return (
    <header className="header-general">
      <div className="header-container">
        <div className="imagenLogo">
          <NavLink className="nav-link-header" to={"/"}>
            <div>
              <img
                className="imagen"
                src={imagenLogo}
                type="image/png"
                alt="logo"
              />
            </div>
          </NavLink>
        </div>
        <nav className="navegacion">
          <ul className="lista-botones-header">
            <li type="button" className="nuestrosPlanes">
              <NavLink className="nav-link-header" to={"/planes"}>
                <a className="botones-a" href="#">
                  Nuestros planes
                </a>
              </NavLink>
            </li>
            <li className="promociones">
              <NavLink className="nav-link-header" to={"/tienda"}>
                <a className="botones-a" href="#">
                  Tienda
                </a>
              </NavLink>
            </li>
            <li className="servicios">
              <NavLink className="nav-link-header" to="/servicios">
                <a className="botones-a" href="#">
                  Servicios adicionales
                </a>
              </NavLink>
            </li>
            {!currentUser && (
              <>
                <li className="botones-derecha-header">
                  <NavLink className="nav-link-header" to="/">
                    <a className="botones-a" href="#">
                      Iniciar Sesion
                    </a>
                  </NavLink>
                </li>
                <li className="botones-derecha-header">
                  <NavLink className="nav-link-header" to="/registrarse">
                    <a className="botones-a" href="#">
                      Registrarse
                    </a>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        {currentUser && (
          <Link to="/visualizacion">
            <div className="container-image-header">
              <img
                className="imagen-perfil"
                src={logoPerfil}
                alt="Imagen perfil"
              />
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
