import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import "./css/Registrarse.css";
import imagenDeFondo from "../../images/fondo-registrarse.png";
import { NavLink, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
//Import firebase utils
import { useFirestore } from "reactfire";
import { handleRegisterWithEmail } from "./algorithms/handleRegisterWithEmail";

//Import validators
import {
  NAME_FORM_VALIDATOR,
  EMAIL_FORM_VALIDATOR,
  PASSWORD_FORM_VALIDATOR,
} from "../constants/formValidators";

//crear funcion componente de react
export default function Registrarse() {
  const db = useFirestore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data;
    password === confirmPassword &&
      handleRegisterWithEmail(
        db,
        firstName,
        lastName,
        email,
        password,
        setLoading,
        navigate
      );
  };

  useEffect(() => {
    currentUser && navigate("/visualizacion");
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img className="imagenFondo-registrarse" src={imagenDeFondo} alt="" />

      <div className="form-inicioergistrarse-123">
        <form
          className="form-registrarse-1235"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="titulo-registrarse-123">
            <h3>Crear una cuenta gratuita!</h3>
          </div>
          <div className="form-group-registrarse-125">
            <input
              type="Text"
              className="form-control-registrarse-125"
              id="firstName"
              aria-describedby="TextHelp"
              placeholder="Nombre"
              {...register("firstName", NAME_FORM_VALIDATOR)}
            />
            <input
              type="Text"
              className="form-control-registrarse-125"
              id="lastName"
              aria-describedby="TextHelp"
              placeholder="Apellidos"
              {...register("lastName", NAME_FORM_VALIDATOR)}
            />
            <span style={{ color: "red", fontSize: "12px", margin: "auto" }}>
              {(errors?.firstName?.message &&
                `Nombre es un ${errors.firstName.message}`) ||
                (errors?.lastName?.message &&
                  `Apellido es un ${errors.lastName.message}`)}
            </span>
          </div>
          <div className="form-group-registrarse-125">
            <input
              type="email"
              className="form-control-registrarse-1258"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Dirección de correo electrónico"
              {...register("email", EMAIL_FORM_VALIDATOR)}
            />
            <span style={{ color: "red", fontSize: "12px", margin: "auto" }}>
              {errors?.email?.message}
            </span>
          </div>
          <div className="form-group-registrarse-125">
            <input
              type="password"
              className="form-control-registrarse-1258"
              id="password"
              placeholder="Crear una contraseña"
              {...register("password", PASSWORD_FORM_VALIDATOR)}
            />
            <span style={{ color: "red", fontSize: "12px", margin: "auto" }}>
              {errors?.password?.message}
            </span>
          </div>
          <div className="form-group-registrarse-125">
            <input
              type="password"
              className="form-control-registrarse-1258"
              id="confirmPassword"
              placeholder="Escriba de nuevo la contraseña"
              {...register("confirmPassword", PASSWORD_FORM_VALIDATOR)}
            />
          </div>
          {/* <NavLink to="/"> */}
          <button type="submit" className="btn-registrarse-124 btn-primary">
            Registrarse
          </button>
          {/* </NavLink> */}
        </form>
      </div>
    </div>
  );
}
