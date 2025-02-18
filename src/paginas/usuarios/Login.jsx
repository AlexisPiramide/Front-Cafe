import { useState } from "react";
import { login } from "../../services/usuario.services";
import FormField from "../../components/form-components/FormField";
import { validacionCorreo, validacionContraseña } from "../../services/validaciones.services";
import "./../../style/form.scss";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorContraseña, setErrorContraseña] = useState("");
    const [errorModal, setErrorModal] = useState("");

    const [usuario,setUsuario] = useOutletContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            try {
                const usuariodb = await login(correo, contraseña);
                localStorage.setItem("usuario", JSON.stringify(usuariodb));
                setUsuario(usuariodb);
                navigate("/cafes");
            } catch (error) {
                setErrorModal(error.message || "Ocurrió un error al iniciar sesión");
                setTimeout(() => setErrorModal(""), 10000);
            }
        } else {
            setErrorModal("Por favor, revise los campos antes de continuar");
            setTimeout(() => setErrorModal(""), 10000);
        }
    };

    const validarFormulario = () => {
        return (
            validacionCorreo(correo, setErrorCorreo) &&
            validacionContraseña(contraseña, setErrorContraseña)
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormField label="Correo Electrónico" type="text" id="correo" name="correo" onChange={(e) => (setCorreo(e.target.value),validacionCorreo(e.target.value,setErrorCorreo))} onFocus={() => validacionCorreo(correo,setErrorCorreo)} error={errorCorreo} />
                <FormField label="Contraseña" type="password" id="contraseña" name="contraseña" onChange={(e) => (setContraseña(e.target.value),validacionContraseña(e.target.value,setErrorContraseña))} onFocus={() => validacionContraseña(contraseña,setErrorContraseña)} error={errorContraseña} />
                <button type="submit">Iniciar Sesión</button>
            </form>

            {errorModal && <div className="error-modal">{errorModal}</div>}
        </>
    );
}

export default Login;
