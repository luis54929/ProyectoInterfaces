import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={"Conectando a la app..."}>
          <App />
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  </FirebaseAppProvider>,
  rootElement
);
