import { useState } from "react";

import FormField from './form-components/FormField';

import "./../style/form.scss";

function Login() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const validateField = (value, regex, error) => {
        if (!regex.test(value)) {
            console.error(error);
            return false;
        }
        return true;
    };

    const validateForm = () => {
        return (
            validateField(correo, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "El correo electrónico no es válido") &&
            validateField(contraseña, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "La contraseña debe tener al menos 6 caracteres y contener letras y números")
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const payload = { correo, contraseña };
            console.log("Payload to submit:", payload);
        } else {
            console.error("Validation failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;
