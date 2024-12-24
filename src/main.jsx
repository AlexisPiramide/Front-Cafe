import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./components/App";
import "./style/root.scss"

import FormularioAñadir from "./components/FormularioAñadir";

const MainContext = createContext();

    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        { path: "FormularioAñadir", element: <FormularioAñadir /> }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
export { MainContext };