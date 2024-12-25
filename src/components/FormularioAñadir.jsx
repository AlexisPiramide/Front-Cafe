import { useState, useEffect } from "react";

import Dropzone from './form-components/Drop-Zone';
import FormField from './form-components/FormField';
import SelectField from './form-components/SelectField';

import "./../style/form.scss";

function FormularioAñadir() {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [imagen, setImagen] = useState();
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        /*
        const fetchTipos = async () => {
            
            const response = await fetch("http://localhost:3001/tipos");
            const data = await response.json();
            if((data)!=null){
                
            }
            setTipos(data);
       
        };
        fetchTipos();
        */
        setTipos( [{"nombre": "Arabico"}, {"nombre": "Robusta"}, {"nombre": "Liberica"}])
    }, []);

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
            validateField(tipo, /[a-zA-Z]{3,}/, "El tipo debe tener al menos 3 letras") &&
            validateField(enlace, /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi, "El enlace debe ser una URL válida")
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const payload = { nombre, tipo, imagen: imagen?.[0], enlace };
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
            <SelectField
                label="Tipo"
                id="tipo"
                name="tipo"
                options={tipos}
                onChange={(e) => setTipo(e.target.value)}
            />
            <label>Imagen:</label>
            <Dropzone imagen={imagen} setImagen={setImagen} />
            <FormField
                label="Enlace"
                type="text"
                id="enlace"
                name="enlace"
                onChange={(e) => setEnlace(e.target.value)}
            />
            <button type="submit">Añadir</button>
        </form>
    );
}

export default FormularioAñadir;
