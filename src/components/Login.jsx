import { useState } from "react";
import { login } from "../services/usuario.services";
import FormField from "./form-components/FormField";
import { validacionCorreo, validacionContraseña } from "../services/validaciones.services";
import "./../style/form.scss";
import { useOutletContext } from "react-router-dom";
function Login() {


    const [usuario,setUsuario] = useOutletContext();

    
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const [errorContraseña, setErrorContraseña] = useState("");
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const handleCorreo = (e) => {
        setCorreo(e.target.value);
        validacionCorreo(correo,setErrorCorreo);
    };

    const handleContraseña = (e) => {
        setContraseña(e.target.value);
        validacionContraseña(contraseña,setErrorContraseña);
    };

    const validarFormulario = () => {
        if(validacionCorreo(correo,setErrorCorreo) && validacionContraseña(contraseña,setErrorContraseña)) return true;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            try {
                const usuariodb = await login(correo, contraseña);
                localStorage.setItem("usuario", JSON.stringify(usuariodb));
                setUsuario(usuariodb);
            } catch (error) {
                setErrorModal(error.message || "Ocurrió un error al iniciar sesión");
                setTimeout(() => setErrorModal(""), 10000);
            }
        } else {
            setErrorModal("Por favor, revise los campos antes de continuar");
            setTimeout(() => setErrorModal(""), 10000);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormField label="Correo Electrónico" type="email" id="correo" name="correo" onChange={handleCorreo} />
                {errorCorreo && <p className="error">El correo tiene que ser válido [XXXX]#[XXXX].[XX]</p>}
                <FormField label="Contraseña" type="password" id="contraseña" name="contraseña" onChange={handleContraseña} />
                {errorContraseña && <p className="error">La contraseña debe tener al menos 6 caracteres y contener letras y números</p>}
                
                <button type="submit">Iniciar Sesión</button>
            </form>

            {errorModal && <div className="error-modal">{errorModal}</div>}
        </>
    );
}

export default Login;
