import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./css/Visualizacion.css";
import BottonNaranja from "../botones/BottonNaranja.js";
import BottonAzul from "../botones/BottonAzul.js";
import SectionProfile from "../cardProfile/SectiionProfile";

import { Timestamp } from "firebase/firestore";

export default function Visualizacion() {
  const { dataOfUser } = useContext(AppContext);
  const [times, setTimes] = useState({
    remaining: 0,
    allDays: 0,
  });

  useEffect(() => {
    if (times.remaining === 0 && dataOfUser?.subscription?.price) {
      let serverTimestamp = Timestamp.now().toDate();
      let remaining = Math.round(
        (dataOfUser.subscription.endAt.toDate().getTime() -
          serverTimestamp.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      let allDays = Math.round(
        (dataOfUser.subscription.endAt.toDate().getTime() -
          dataOfUser.subscription.startAt.toDate().getTime()) /
          (1000 * 60 * 60 * 24)
      );
      setTimes({
        remaining: remaining > 0 ? remaining : 0,
        allDays,
      });
    }
  }, [dataOfUser, times]);

  return (
    <div className={"general-visualizacion-12598"}>
      <SectionProfile
        textoInicial={
          dataOfUser?.name
            ? `${dataOfUser?.firstName} ${dataOfUser?.lastName}`
            : "Usuario"
        }
        tituloBoton={"Editar mi perfil"}
        linkDireccion={"/editarPerfil"}
        close={true}
      />
      <div className="Visualizacion-Informacion-Plan">
        <div className="section-profile-imagen">
          <picture>
            <img
              src="https://tecnomarketperu.com/tda/img/p/5/6/56-large_default.jpg"
              alt="imagen"
              className="antena-visualizacion-1234"
            />
          </picture>
        </div>
        <div className="seción-InformacionPlan">
          <h1>Información de plan:</h1>
          <h4 className="h4-Comentario">
            {`Plan ${dataOfUser?.subscription?.price} soles/mensual`}{" "}
          </h4>
          <h4 className="h4-Comentario">Distrito: Ayacucho</h4>
          <h4 className="h4-Comentario">Ubicacion</h4>
          <section className="section-ControlDia">
            <label id="label-DiasRestantes">Dias restantes</label>
            {times.remaining > 0 && (
              <div className="control-group-DiasRestantes">
                <picture className="picture-a">
                  <div className="a-ImgDias">
                    <div className="progress">
                      <div
                        className="progress-value"
                        style={{
                          width: `${(times.remaining / times.allDays) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </picture>

                <h2 id="h2-ControlDias">
                  {`${times.remaining}/${times.allDays}`} días
                </h2>
              </div>
            )}

            <div className="container-Botones">
              <NavLink to="/planes">
                <BottonAzul NombreBotonAzul={"Ampliar plan"} />
              </NavLink>
              <NavLink to="/pagos">
                <BottonAzul NombreBotonAzul={"Pagar / Recargar"} />
              </NavLink>
            </div>
          </section>
        </div>
      </div>
      <div className="container-Cotizaciones">
        <section className="containerSection-Cotizacion">
          <h3 id="h3-Contizacion">Cootizaciones de productos</h3>

          <lavel id="lavel-comentario">
            Para la cootizacion de productos usar la siguiente plantilla
          </lavel>
          <br />
          <button id="bt-Descargar-Formato">Descargar formato</button>
          <h5 id="h5-Contizacion-Comentario">
            Sube un archivo .xlx o .cvs con los campos llenados de nuestro
            formato para obtener respuesta sobre su ootizacion
          </h5>

          <div className="container-color">
            <div className="container-Subir-Archivo">
              <a href="#" className="imagen-de-subida">
                {" "}
                <img
                  id="img-CargarIMG"
                  src={require("../../images/subir.png")}
                ></img>
              </a>
              <h3 id="h3-Comentario-Subir">Subir archivo</h3>
              <h5 id="h5-Comentario-Arrastra">
                {" "}
                o arrastra un archivo .xls o .cvs
              </h5>
            </div>
            <div className="Boton-Naranja-Enviar">
              <BottonNaranja NombreBoton={"Enviar"} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
