import React, { createContext, useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import InicioSesion from "./components/IniciarSesion/InicioSesion";
import Registro from "./components/registrarse/Registrarse";
import Servicios from "./components/servicios/Servicios";
import Nosotros from "./components/nosotros/Nosotros";
import Registrarse from "./components/registrarse/Registrarse";
import Pagos from "./components/pagos/Pagos";
import VentaEquipos from "./components/ventaEquipos/VentaEquipos.js";
import VerificacionDePagos from "./components/verificacionDePagos/VerificacionDePagos";
import EditarPerfil from "./components/editProfile/EditProfileUser";
import SeguimientoPago from "./components/seguimientoPago/SeguimientoPago.js";
import Visualizacion from "./components/panelDeVisualisacion/Visualizacion";
import Preguntas from "./components/preguntas/Preguntas";
import AgregarProducto from "./components/agregarProducto/AgregarProducto.js";
import Reclamos from "./components/reclamos/Reclamos";
import Planes from "./components/planes/Planes";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { recoverDataOfUser } from "./algorithms/recoverDataOfUser";
import { recoverPlans } from "./algorithms/recoverPlans";

const AppContext = createContext();
const { Provider: AppProvider, Consumer } = AppContext;

const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(null);
  const [dataOfUser, setDataOfUser] = useState(null);
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(true);

  const appValue = {
    setCurrentUser,
    currentUser,
    dataOfUser,
    setDataOfUser,
    plans
  };

  useEffect(() => {
    !currentUser &&
      onAuthStateChanged(auth, async (user) => {
        user ? setCurrentUser(user) : setCurrentUser(null);
        if (user && dataOfUser === null) {
            const recoverUser = await recoverDataOfUser(
              firestoreInstance,
              user
            );
            recoverUser.forEach((doc) => {
              setDataOfUser(doc.data());
            });

        }
        setLoading(false);
      });
      !plans && recoverPlans(firestoreInstance, setPlans);
  }, [dataOfUser, currentUser, firestoreInstance]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AppProvider value={appValue}>
        <Header />
        <Routes>
          <Route exact path="/tienda" element={<VentaEquipos />} />
          <Route exact path="/" element={<InicioSesion />} />
          <Route exact path="/registrarse" element={<Registro />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/registrarse" element={<Registrarse />} />
          <Route exact path="/editarPerfil" element={<EditarPerfil />} />
          <Route exact path="/pagos" element={<Pagos />} />
          <Route exact path="/visualizacion" element={<Visualizacion />} />
          <Route
            exact
            path="/AdmiVerificarPago"
            element={<VerificacionDePagos />}
          />
          <Route exact path="/preguntas" element={<Preguntas />} />
          <Route exact path="/seguimientoPago" element={<SeguimientoPago />} />
          <Route
            exact
            path="/AdmiAgregarProducto"
            element={<AgregarProducto />}
          />
          <Route exact path="/reclamos" element={<Reclamos />} />
          <Route exact path="/planes" element={<Planes />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AppProvider>
    </FirestoreProvider>
  );
};

export { App, Consumer as AppConsumer, AppContext };
