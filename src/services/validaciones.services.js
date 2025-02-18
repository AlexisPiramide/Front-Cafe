const validacionAlias = (alias, setError) => {
    if (alias.length < 3 || alias.length > 20) {
        setError("El alias debe tener entre 3 y 20 caracteres");
        return false;
    } else {
        setError("");
        return true;
    }
};

const validacionCorreo = (correo, setError) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        setError("Formato Correo Valido [XXXXX]@[XXXXX].[XX]");
        return false;
    } else {
        setError("");
        return true;
    }
};

const validacionContraseña = (contraseña, setError) => {
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(contraseña)) {
        setError("La contraseña debe tener al menos 6 caracteres, contener un número, una letra y un carácter especial");
        return false;
    } else {
        setError("");
        return true;
    }
};

const validacionConfirmarContraseña = (contraseña, confirmarContraseña, setError) => {
    if (contraseña !== confirmarContraseña) {
        setError("Las contraseñas no coinciden");
        return false;
    } else {
        setError("");
        return true;
    }
};

export { validacionAlias, validacionCorreo, validacionContraseña, validacionConfirmarContraseña };
