import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./components/App";
import "./style/root.scss"

import FormularioAñadir from "./components/FormularioAñadir";
import ListaCafes from "./components/ListaCafes";
import Votaciones from "./components/Votaciones";
const MainContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "FormularioAñadir", element: <FormularioAñadir /> },
      { path: "ListaCafes", element: <ListaCafes />},
      { path: "Votaciones", element: <Votaciones /> },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
export { MainContext };