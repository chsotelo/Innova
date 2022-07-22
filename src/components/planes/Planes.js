import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./css/Planes.css";

export default function Planes() {
  const { plans } = useContext(AppContext);
  return (
    <div className="body-general">
      <div className="page-nav">
        <h1 id="titulo-planes">TENEMOS PLANES PARA TI</h1>
        <NavLink to="/pagos">
          <button id="checkout" className="button-checkout" onclick="pay()">
            OBTENER
          </button>
        </NavLink>
      </div>
      <div className="page-content">
        <div className="Paquetes-innova">
          {plans.map((plan) => (
            <div key={plan.price}className="product-container">
              <h3 className="innova-plan">{plan.planType.toUpperCase()}</h3>
              <h1 className="precio-plan">S/ {plan.price}.00</h1>
              <div className="vel-container">
                <h1 className="velocidad">Velocidad </h1>
                <h1 className="megas">{plan.speed} </h1>
              </div>
              <button
                id="button-innova"
                className="button-add"
                onclick="add('product-1', 30)"
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
