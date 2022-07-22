import React from "react";
import { NavLink } from "react-router-dom";
import "./css/footer.css";
import innovaImage from "../images/SVGinnovaLogo.svg"
import facebookImage  from "../images/facebook.svg";
import whatsAppImage from "../images/whatsapp.svg";
import twitterImage from "../images/twitter.svg";
import instagramImage from "../images/instagram.svg";

function Footer() {
  return (
    <div className="containerFooter">
      <footer className="footer">
        <div className="containerFooterDescripcion">
          <div className="containerLinkRedesSociales">
            <NavLink to="/">
              <img
                src={innovaImage}
                alt="Innova"
                className="imagenInova"
              ></img>
            </NavLink>
            <ul className="listaRedesFooter">
              <li>
                {" "}
                <a href="https://www.facebook.com/">
                  <img
                    src={facebookImage}
                    alt="Facebook"
                  ></img>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://web.whatsapp.com/">
                  <img
                    src={whatsAppImage}
                    alt="watsap"
                  ></img>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/?lang=es">
                  <img src={twitterImage} alt="titer"></img>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.instagram.com/">
                  <img
                    src={instagramImage}
                    alt="ingtagram"
                  ></img>
                </a>
              </li>
            </ul>
            <p>Para ventas y servicios</p>

            <div className="contenedorComentario">
              <p>912345678</p>
              <p>912345678</p>
            </div>
          </div>

          <div className="containerFooterLinks">
            <div className="contenedorFooterLink">
              <ul className="contenedorServicio">
                <li>
                  <a className="linkCabeceroLink" href="#">
                    Te puede interesar
                  </a>
                </li>{" "}
                <hr />
                <NavLink to="/preguntas">
                  <li>
                    <a href="#">Preguntas frecuentes</a>
                  </li>
                </NavLink>
                <NavLink to="/reclamos">
                  <li>
                    <a href="#">Has tus reclamos</a>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className="contenedorFooterLink">
              <ul className="contenedorServicio">
                <NavLink to="/servicios">
                  <li>
                    <a className="linkCabeceroLink" href="#">
                      Servicio
                    </a>
                  </li>{" "}
                  <hr />
                  <li>
                    <a href="#">Internet Hogar</a>
                  </li>
                  <li>
                    <a href="#">Fibra optica</a>
                  </li>
                  <li>
                    <a href="#">Planes dúo</a>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className="contenedorFooterLink">
              <ul className="contenedorPromociones">
                <NavLink to="/promociones">
                  <li>
                    <a className="linkCabeceroLink" href="#">
                      Promociones
                    </a>
                  </li>{" "}
                  <hr />
                  <li>
                    <a href="#">Descuento</a>
                  </li>
                  <li>
                    <a href="#">Servicio</a>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className="contenedorFooterLink">
              <ul className="contenedorPlanes">
                <NavLink to="/planes">
                  <li>
                    <a className="linkCabeceroLink" href="#">
                      Planes
                    </a>
                  </li>{" "}
                  <hr />
                  <li>
                    <a href="#">Plan Innova 4MB</a>
                  </li>
                  <li>
                    <a href="#">Plan Innova 6MB</a>
                  </li>
                  <li>
                    <a href="#">Plan Innova 8MB</a>
                  </li>
                  <li>
                    <a href="#">Plan Innova 12MB</a>
                  </li>
                  <li>
                    <a href="#">Plan Innova 15MB</a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="finalCopy">
          <p className="copi">
            Copyright 2022 INNOVA LAN S.A.C Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
