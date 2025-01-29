import { useState } from "react";
import FormField from './form-components/FormField';
import "./../style/form.scss";
import { registro } from "../services/usuario.services";
import { validacionAlias, validacionContraseña, validacionConfirmarContraseña, validacionCorreo } from "./../services/validaciones.services";
import { useNavigate, useOutletContext } from 'react-router-dom';

function Registro() {
    const [usuario, setUsuario] = useOutletContext();

    const [alias, setAlias] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    const [errorAlias, setErrorAlias] = useState("");
    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorContraseña, setErrorContraseña] = useState("");
    const [errorConfirmarContraseña, setErrorConfirmarContraseña] = useState("");
    const [errorModal, setErrorModal] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            try {
                const usuariodb = await registro(alias, correo, contraseña);
                localStorage.setItem("usuario", JSON.stringify(usuariodb));
                setUsuario(usuariodb);
                navigate("/cafes");
            } catch (error) {
                setErrorModal(error.message || "Ocurrió un error al registrarse");
                setTimeout(() => setErrorModal(""), 10000);
            }
        } else {
            setErrorModal("Por favor, corrija los errores antes de continuar");
            setTimeout(() => setErrorModal(""), 10000);
        }
    };

    const validarFormulario = () => {
        return (
            validacionAlias(alias, setErrorAlias) &&
            validacionCorreo(correo, setErrorCorreo) &&
            validacionContraseña(contraseña, setErrorContraseña) &&
            validacionConfirmarContraseña(contraseña, confirmarContraseña, setErrorConfirmarContraseña)
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="registro-form">
                <div className="form-row">
                    <FormField label="Alias" type="text" id="alias" name="alias" onChange={(e) => (setAlias(e.target.value), validacionAlias(e.target.value, setErrorAlias))} onFocus={() => validacionAlias(alias, setErrorAlias)} error={errorAlias} />
                    <FormField label="Correo Electrónico" type="email" id="correo" name="correo" onChange={(e) => (setCorreo(e.target.value), validacionCorreo(e.target.value, setErrorCorreo))} onFocus={() => validacionCorreo(correo, setErrorCorreo)} error={errorCorreo} />
                    <FormField label="Contraseña" type="password" id="contraseña" name="contraseña" onChange={(e) => (setContraseña(e.target.value), validacionContraseña(e.target.value, setErrorContraseña))} onFocus={() => validacionContraseña(contraseña, setErrorContraseña)} error={errorContraseña} />
                    <FormField label="Confirmar Contraseña" type="password" id="confirmarContraseña" name="confirmarContraseña" onChange={(e) => (setConfirmarContraseña(e.target.value), validacionConfirmarContraseña(contraseña, e.target.value, setErrorConfirmarContraseña))} onFocus={() => validacionConfirmarContraseña(contraseña, confirmarContraseña, setErrorConfirmarContraseña)} error={errorConfirmarContraseña} />
                </div>
                <button type="submit" disabled={!alias || !correo || !contraseña || !confirmarContraseña}>Registrarse</button>
            </form>

            {errorModal && <div className="modal">{errorModal}</div>}
        </>
    );
}

export default Registro;
