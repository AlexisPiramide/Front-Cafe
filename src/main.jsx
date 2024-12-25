import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./components/App";
import "./style/root.scss"

import FormularioAñadir from "./components/FormularioAñadir";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Listas from "./components/Listas";

const MainContext = createContext();

    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        { path: "añadir", element: <FormularioAñadir />},
        { path: "registro", element: <Registro />},
        { path: "login", element: <Login />},
        { path: "cafes", element: <Listas />}
        ]
    }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
export { MainContext };