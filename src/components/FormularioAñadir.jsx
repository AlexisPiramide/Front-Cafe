import {useEffect, useState } from "react";

import Dropzone from './Drop-Zone';
import "./../style/form.scss";


function FormularioAñadir() {
    const [imagen, setImagen] = useState();
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [enlace, setEnlace] = useState("");
    
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        getTipos();
    }, []);

    const getTipos = async () => {
        const response = await fetch("http://localhost:3001/tipos");
        const data = await response.json();
        setTipos(data);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const validacionNombre = validation(nombre, /[a-zA-Z]{3,}/, "El nombre debe tener al menos 3 letras");
        const validacionTipo = validation(tipo, /[a-zA-Z]{3,}/, "El tipo debe tener al menos 3 letras");
        const validacionEnlace = validation(enlace, /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi, "El enlace debe ser una URL válida");

        if (validacionNombre && validacionTipo && validacionEnlace) {

            const json = {
                "nombre": nombre,
                "tipo": tipo,
                "imagen": imagen[0],
                "enlace": enlace,
            }
            
            console.log("Añadido");
        } else {
            console.log("No añadido");
        }
    };

    const handleValue = (valor, option) => {
        const setters = {
            nombre: setNombre,
            tipo: setTipo,
            enlace: setEnlace,
        };
        if (setters[option]) {
            setters[option](valor);
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
            <select
                id="tipo"
                name="tipo"
                onChange={(e) => handleValue(e.target.value, e.target.name)}
                required
            >
                <option value="">Seleccione un tipo</option>
                {tipos.map((tipo) => (
                    <option key={tipo} value={tipo}>
                        {tipo}
                    </option>
                ))}
            </select>
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
