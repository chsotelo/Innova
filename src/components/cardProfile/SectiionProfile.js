import React, { useContext } from "react";
import { AppContext } from "../../App";

import "./css/SectiionProfile.css";
import { NavLink, useNavigate } from "react-router-dom";
import { closeSession } from "./algorithms/closeSession";

export default function SectionProfile({
  textoInicial,
  tituloBoton = null,
  linkDireccion,
  close = false,
}) {
  const navigate = useNavigate();
  const { setDataOfUser, setCurrentUser } = useContext(AppContext);
  return (
    <div className="profile-container-123">
      <picture className="profilePicture">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="avatar-perfil-card"
        />
      </picture>
      <h1>{textoInicial}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {tituloBoton && (
          <NavLink to={linkDireccion}>
            <button
              style={{ cursor: "pointer" }}
              type="submit"
              className="btn-12348545 btn-primary"
            >
              {tituloBoton}
            </button>
          </NavLink>
        )}
        {closeSession && (
          <button
            type="button"
            style={{ cursor: "pointer" }}
            onClick={() =>
              closeSession(navigate, setCurrentUser, setDataOfUser)
            }
            className="btn-12348545 btn-primary"
          >
            Cerrar Sesión
          </button>
        )}
      </div>
    </div>
  );
}
