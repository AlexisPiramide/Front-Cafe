import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./components/App";
import "./style/root.scss"

import FormularioAñadir from "./paginas/cafes/FormularioAñadir";
import Registro from "./paginas/usuarios/Registro";
import Login from "./paginas/usuarios/Login";
import Listas from "./paginas/cafes/Listas";
import Votaciones from "./components/Votaciones";
import ZonaUsuario from "./paginas/usuarios/ZonaUsuario";
import Error from "./paginas/error/Error";
import Cesta from "./paginas/usuarios/Cesta";
import CafesTienda from "./paginas/usuarios/CafesTienda";
const MainContext = createContext();

    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        { path: "", element: <Listas />},
        { path: "añadir", element: <FormularioAñadir />},
        { path: "registro", element: <Registro />},
        { path: "login", element: <Login />},
        { path: "cafes", element: <Listas />},
        { path: "votar", element: <Votaciones />},
        { path: "usuario", element: <ZonaUsuario />},
        { path: "cesta", element: <Cesta />},
        { path: "tienda", element: <CafesTienda />}
        ]
    },{
        path: "*",
        element: <Error/>
    }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
export { MainContext };