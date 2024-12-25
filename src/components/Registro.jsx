import { useState } from "react";

import FormField from './form-components/FormField';


import "./../style/form.scss";

function Registro() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    const validateField = (value, regex, error) => {
        if (!regex.test(value)) {
            console.error(error);
            return false;
        }
        return true;
    };

    const validateForm = () => {
        return (
            validateField(nombre, /[a-zA-Z]{3,}/, "El nombre debe tener al menos 3 letras") &&
            validateField(correo, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "El correo electrónico no es válido") &&
            validateField(contraseña, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "La contraseña debe tener al menos 6 caracteres y contener letras y números") &&
            contraseña === confirmarContraseña
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const payload = { nombre, correo, contraseña };
            console.log("Payload to submit:", payload);
        } else {
            console.error("Validation failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormField
                label="Nombre"
                type="text"
                id="nombre"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
            />
            <FormField
                label="Correo Electrónico"
                type="email"
                id="correo"
                name="correo"
                onChange={(e) => setCorreo(e.target.value)}
            />
            <FormField
                label="Contraseña"
                type="password"
                id="contraseña"
                name="contraseña"
                onChange={(e) => setContraseña(e.target.value)}
            />
            <FormField
                label="Confirmar Contraseña"
                type="password"
                id="confirmarContraseña"
                name="confirmarContraseña"
                onChange={(e) => setConfirmarContraseña(e.target.value)}
            />

            <button type="submit">Registrar</button>
        </form>
    );
}

export default Registro;
