import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";

//Import firebase utils
import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import { firebaseConfig } from "./firebase/config";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <BrowserRouter>
        <SuspenseWithPerf
          traceId={"firebase-user-wait"}
          fallback={"Charging page..."}
        >
          <App />
        </SuspenseWithPerf>
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
