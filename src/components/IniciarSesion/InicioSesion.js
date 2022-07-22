import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/InicioSesion.css";
import imagenDeFondo from "../../images/inicioSesionImagen.jpg";
import { useForm } from "react-hook-form";

import { useFirestore } from "reactfire";
import { handleLoginWithEmail } from "./algorithms/handleLoginWithEmail";
import {
  EMAIL_FORM_VALIDATOR,
  PASSWORD_FORM_VALIDATOR,
} from "../constants/formValidators";

// import useMounted from "../hooks/useMounted";

//crear funcion componente de react
export default function InicioSesion() {
  const navigate = useNavigate();
  const db = useFirestore();
  const [loading, setLoading] = useState(false);
  const { setCurrentUser, currentUser } = useContext(AppContext);
  const [loginErrors, setLoginErrors] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await handleLoginWithEmail(
      data,
      navigate,
      db,
      setCurrentUser,
      setLoading,
      setLoginErrors,
    );
  };

  useEffect(() => {
    currentUser && navigate("/visualizacion");
  }, [currentUser]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="general-inicio-sesion">
      <img
        className={"imagenFondo-inicio-sesion"}
        src={imagenDeFondo}
        alt="Imagen"
      />

      <div className="form-inicio-sesion-123456">
        <form
          className="form-inicio-sesion-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4>Iniciar Sesión</h4>
          <div className="form-group-inicio-sesion">
            <input
              type="email"
              className="form-control-inicio-sesion"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Dirección de correo electrónico"
              {...register("email", EMAIL_FORM_VALIDATOR)}
            />
            <span style={{ color: "red", fontSize: "12px", margin: "auto" }}>
              {errors.email &&
                errors.email.type === "required" &&
                "Este campo es requerido*"}
              {errors.email &&
                errors.email.type === "pattern" &&
                "Correo electrónico inválido*"}
            </span>
          </div>
          <div className="form-group-inicio-sesion">
            <input
              type="password"
              className="form-control-inicio-sesion"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              {...register("password", PASSWORD_FORM_VALIDATOR)}
            />
            <span style={{ color: "red", fontSize: "12px", margin: "auto" }}>
              {errors.password &&
                errors.password.type === "required" &&
                "Este campo es requerido*"}
              {loginErrors &&
                (loginErrors === "auth/wrong-password" ||
                  loginErrors === "auth/user-not-found") &&
                "Correo electrónico o contraseña incorrecta*"}
              {loginErrors &&
                loginErrors === "auth/network-request-failed" &&
                "Revisa tu conexión a internet, falla en la red*"}
              {loginErrors &&
                loginErrors === "auth/too-many-requests" &&
                "Bloqueo temporal por exceso de intentos fallidos*"}
            </span>
          </div>
          <button type="submit" className="btn-123-inicio-sesion btn-primary">
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
}
