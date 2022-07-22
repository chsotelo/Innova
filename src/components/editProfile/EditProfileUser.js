import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./css/editarProfile.css";
import SectionProfile from "../cardProfile/SectiionProfile";
import { useReducedState } from "../../hooks/useReducedState";
import { useForm } from "react-hook-form";

//Import Firebase utils
import { useFirestore } from "reactfire";

import {
  NAME_FORM_VALIDATOR,
  DNI_FORM_VALIDATOR,
  PHONE_FORM_VALIDATOR,
} from "../constants/formValidators";
import { updateProfileUser } from "./algorithms/updateProfileUser";

export default function EditProfileUser() {
  const db = useFirestore();
  const navigate = useNavigate();
  const { dataOfUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  //Recuperacion de datos de usuario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await updateProfileUser(db, dataOfUser, data, navigate);
    setLoading(false);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="editar-general-container">
      <SectionProfile
        textoInicial={`${dataOfUser?.firstName} ${dataOfUser?.lastName}`}
        linkDireccion="/visualizacion"
      />
      {/* <div className="buton-container-perfil-editar">
        <button className="btn-1001"> Subir Foto de perfil</button> */}
      {/* <button className="btn-1001">Cambio de contraseña</button> */}
      {/* </div> */}
      <div>
        <h3 className="titulo-datos-editar-perfil">Datos Personales</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center", display: "block", paddingBottom: "40px" }}
      >
        <div className="datos-container-perfil">
          <div className="nombre-container-perfil-editar">
            <div>
              <label>Nombre</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="Nombre"
                name="firstName"
                defaultValue={dataOfUser?.name?.firstName}
                {...register("firstName", NAME_FORM_VALIDATOR)}
              />
            </div>
            <div>
              <label>Apellidos</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="Apellidos"
                name="lastName"
                defaultValue={dataOfUser?.name?.lastName}
                {...register("lastName", NAME_FORM_VALIDATOR)}
              />
            </div>
          </div>
          <div className="dni-celular-container">
            <div>
              <label>DNI</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="85634561"
                name="dni"
                defaultValue={dataOfUser?.dni}
                {...register("dni", DNI_FORM_VALIDATOR)}
              />
            </div>
            <div>
              <label>Celular</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="987654321"
                name="phone"
                defaultValue={dataOfUser?.phone}
                {...register("phone", PHONE_FORM_VALIDATOR)}
              />
            </div>
          </div>
          <div className="año-container-perfil-editar">
            <div>
              <label>Fecha de nacimiento</label>
              <br />
              <input
                type="date"
                className="input-dialog-peril-editar"
                defaultValue={dataOfUser?.birthday}
                placeholder="MM/DD/YYYY"
                {...register("birthday")}
              />
            </div>
          </div>

          <h4 className="genero-titulo-editar-perfil">Género</h4>

          <div className="genero-container-editar-perfil">
            <br />
            <label>Masculino</label>
            <input
              type="radio"
              className=""
              value="masculino"
              defaultChecked={dataOfUser?.gender === "masculino" ? true : false}
              {...register("gender")}
            />
            <label>Femenino</label>
            <input
              type="radio"
              className=""
              value="femenino"
              defaultChecked={dataOfUser?.gender === "femenino" ? true : false}
              {...register("gender")}
            />
          </div>
          <div className="lugar-container-editar-perfil">
            <div>
              <label>Departamento</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="Departamento"
                defaultValue={dataOfUser?.departament}
                {...register("departament", NAME_FORM_VALIDATOR)}
              />
            </div>
            <div>
              <label>Provincia</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="Provincia"
                defaultValue={dataOfUser?.province}
                {...register("province", NAME_FORM_VALIDATOR)}
              />
            </div>
            <div>
              <label>Distrito</label>
              <br />
              <input
                type="text"
                className="input-dialog-peril-editar"
                placeholder="Distrito"
                defaultValue={dataOfUser?.district}
                {...register("district", NAME_FORM_VALIDATOR)}
              />
            </div>
          </div>
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "#2aadf9",
              borderRadius: "5%",
              height: "30px",
              width: "100px",
              border: "1px solid #0c84c9",
            }}
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
