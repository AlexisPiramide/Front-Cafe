import Dropzone from './dropzone';

import { useState } from "react";
import "./../style/dropzone.css";
import "./../style/upload.css";

function FormularioAñadir() {
    const [imagen, setImagen] = useState();
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [enlace, setEnlace] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const validacionNombre = validation(nombre, /[a-zA-Z]{3,}/, "El nombre debe tener al menos 3 letras");
        const validacionTipo = validation(tipo, /[a-zA-Z]{3,}/, "El tipo debe tener al menos 3 letras");
        const validacionEnlace = validation(enlace, /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi, "El enlace debe ser una URL válida");

        if (validacionNombre && validacionTipo && validacionEnlace) {
            console.log("Añadido");
        } else {
            console.log("No añadido");
        }
    };


    const handleValue = (valor, option) => {
        switch (option) {
            case "nombre":
                setNombre(valor);
                break;
            case "tipo":
                setTipo(valor);
                break;
            case "enlace":
                setEnlace(valor);
                break;
            default:
                break;
        }
    };

    const validation = (value, RegEX, error) => {
        if (!RegEX.test(value)) {
            console.error(error);
            return false;
        }
        return true;
    };

    return (
        <form>
            <label>Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                onChange={(e) => handleValue(e.target.value, e.target.name)}
                required
            />
            <label>Tipo:</label>
            <input
                type="text"
                id="tipo"
                name="tipo"
                onChange={(e) => handleValue(e.target.value, e.target.name)}
                required
            />
            <label>Imagen:</label>

            <Dropzone imagen={imagen} setImagen={setImagen} />
            
            <label>Enlace:</label>
            <input
                type="text"
                id="enlace"
                name="enlace"
                onChange={(e) => handleValue(e.target.value, e.target.name)}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>
                Añadir
            </button>
        </form>
    );
}

export default FormularioAñadir;
