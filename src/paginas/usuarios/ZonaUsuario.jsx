import { useNavigate, useOutletContext } from "react-router";
import ZonaNoAccesible from "../error/ZonaNoAccesible";
import { useState } from "react";
import Dropzone from "../../components/form-components/Drop-Zone";
import FormField from "../../components/form-components/FormField";
import {actualizar} from "../../services/usuario.services";
import {validacionAlias, validacionContraseña, validacionConfirmarContraseña} from "../../services/validaciones.services";


export default function ZonaUsuario() {
    const [alias, setAlias] = useState(""); const [errorAlias, setErrorAlias] = useState("");
    const [contraseña, setContraseña] = useState(""); const [errorContraseña, setErrorContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState(""); const [errorConfirmarContraseña, setErrorConfirmarContraseña] = useState("");
    const [usuario,setUsuario] = useOutletContext(); 
    const [imagen, setImagen] = useState(null);
    const [editing, setEditing] = useState(false); const [errorModal, setErrorModal] = useState("");
    const navigate = useNavigate();
    const [cambiarContraseña, setCambiarContraseña] = useState(false);

    if (!usuario) return <ZonaNoAccesible />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            try {
                const usuariodb = await actualizar(alias, imagen, contraseña);
                const usuario = JSON.parse(localStorage.getItem("usuario"));
                usuario.usuario.usuario = usuariodb.usuario.usuario;
                usuario.usuario.foto = usuariodb.usuario.foto;
                localStorage.setItem("usuario", JSON.stringify(usuario));
                setUsuario(usuariodb); navigate("/cafes");
            } catch (error) {
                setErrorModal(error.message || "Ocurrió un error al registrarse");
                setTimeout(() => setErrorModal(""), 10000);
            }
        } else {
            setErrorModal("Por favor, corrija los errores antes de continuar");
            setTimeout(() => setErrorModal(""), 10000);
        }
    };

    const validarFormulario = () => (
        (!alias || validacionAlias(alias, setErrorAlias)) &&
        (!contraseña || validacionContraseña(contraseña, setErrorContraseña)) &&
        (!confirmarContraseña || validacionConfirmarContraseña(contraseña, confirmarContraseña, setErrorConfirmarContraseña))
    );

    return (
        <>
            <h1>Perfil de usuario</h1>
            <form className="perfil">
                <div className="email-usuario" disabled>Email: {usuario.usuario.correo}</div>
                {editing ?  <button onClick={()=>{setCambiarContraseña(!cambiarContraseña)}} type="button">Cambiar Contraseña</button>: '' }
               
                {editing ? <FormField label="Alias" type="text" id="alias" name="alias" onChange={e => (setAlias(e.target.value), validacionAlias(e.target.value, setErrorAlias))} onFocus={() => validacionAlias(alias, setErrorAlias)} error={errorAlias} /> : <div className="nombre-usuario">Nombre: {usuario.usuario.alias}</div>}
                {editing && cambiarContraseña && <FormField label="Contraseña" type="password" id="contraseña" name="contraseña" onChange={e => (setContraseña(e.target.value), validacionContraseña(e.target.value, setErrorContraseña))} onFocus={() => validacionContraseña(contraseña, setErrorContraseña)} error={errorContraseña} />}
                {editing && cambiarContraseña && <FormField label="Confirmar Contraseña" type="password" id="confirmarContraseña" name="confirmarContraseña" onChange={e => (setConfirmarContraseña(e.target.value), validacionConfirmarContraseña(contraseña, e.target.value, setErrorConfirmarContraseña))} onFocus={() => validacionConfirmarContraseña(contraseña, confirmarContraseña, setErrorConfirmarContraseña)} error={errorConfirmarContraseña} />}
                {editing ? <Dropzone imagen={imagen} setImagen={setImagen} /> : <img className="imagen-usuario" src={usuario.usuario.foto} alt="imagen de usuario" />}
                {editing && <button type="submit" onClick={handleSubmit}>Guardar</button>}
                <button className="editar" onClick={e => (e.preventDefault(), setEditing(!editing))}>{editing ? 'Cancelar' : 'Editar'}</button>
            </form>
            {errorModal && <div className="modal">{errorModal}</div>}
        </>
    );
}
