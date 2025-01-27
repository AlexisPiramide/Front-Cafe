import { useState } from "react";
import FormField from './form-components/FormField';
import "./../style/form.scss";
import { registro } from "../services/usuario.services";
import { validacionAlias,validacionContraseña,validacionConfirmarContraseña,validacionCorreo } from "../services/validaciones.services";
import { useOutletContext } from 'react-router-dom'
function Registro() {


    const [usuario,setUsuario] = useOutletContext();


    const [alias, setAlias] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    const [errorAlias, setErrorAlias] = useState("");
    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorContraseña, setErrorContraseña] = useState("");
    const [errorConfirmarContraseña, setErrorConfirmarContraseña] = useState("");

    const [errorModal, setErrorModal] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const usuariodb = await registro(alias,correo, contraseña);
        localStorage.setItem("usuario", JSON.stringify(usuariodb));
        setUsuario(usuariodb);
        } catch (error) {
        setErrorModal(error.message || "Ocurrió un error al iniciar sesión");
        setTimeout(() => setErrorModal(""), 10000);
        }
    };

    const handleAlias = (e) => {
        setAlias(e.target.value);
        validacionAlias(e.target.value, setErrorAlias);
    }

    const handleCorreo = (e) => {
        setCorreo(e.target.value);
        validacionCorreo(e.target.value, setErrorCorreo);
    }

    const handleContraseña = (e) => {
        setContraseña(e.target.value);
        validacionContraseña(e.target.value, setErrorContraseña);
    }

    const handleConfirmarContraseña = (e) => {
        setConfirmarContraseña(e.target.value);
        validacionConfirmarContraseña(contraseña, e.target.value, setErrorConfirmarContraseña);
    }


    return (
        <>
        <form onSubmit={handleSubmit} className="registro-form">
            
            <div className="form-row">
            <FormField label="Alias" type="text" id="alias" name="alias" onChange={handleAlias} />
            {errorAlias && <p className="error">El alias tiene que tener entre 3 y 20 caracteres</p>}
            <FormField label="Correo Electrónico" type="email" id="correo" name="correo" onChange={handleCorreo} />
            {errorCorreo && <p className="error">El correo tiene que ser válido [XXXX]#[XXXX].[XX]</p>}
            <FormField label="Contraseña" type="password" id="contraseña" name="contraseña" onChange={handleContraseña} />
            {errorContraseña && <p className="error">La contraseña debe tener al menos 6 caracteres y contener letras y números</p>}
            <FormField label="Confirmar Contraseña" type="password" id="confirmarContraseña" name="confirmarContraseña" onChange={handleConfirmarContraseña} />
            {errorConfirmarContraseña && <p className="error">Las contraseñas no coinciden</p>}
            </div>

            <button type="submit" disabled={!alias || !correo || !contraseña || !confirmarContraseña}>Registrarse</button>
        </form>

        {errorModal && <div className="modal">{errorModal}</div>}
        </>
    );
}

export default Registro;
