import { useState, useEffect } from "react";

import Dropzone from '../../components/form-components/Drop-Zone';
import FormField from '../../components/form-components/FormField';
import SelectField from '../../components/form-components/SelectField';

import "./../../style/form.scss";
import { Form } from "react-router";

function FormularioAñadir() {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [peso, setPeso] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState();


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
            validateField(peso, /[0-9]+/, "El peso debe ser un número") &&
            validateField(precio, /[0-9]+/, "El precio debe ser un número")
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const payload = { nombre, tipo, imagen: imagen?.[0], peso, precio };
            console.log("Payload to submit:", payload);
        } else {
            console.error("Validation failed.");
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <FormField label="Nombre" type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} />
            <FormField label="Tueste" id="tipo" name="tipo" onChange={(e) => setTipo(e.target.value)} />
            <FormField label="Peso" id="peso" name="peso" onChange={(e) => setPeso(e.target.value)} />
            <FormField label="Precio" id="precio" name="precio" onChange={(e) => setPrecio(e.target.value)} />
            <label>Imagen:</label>
            <Dropzone imagen={imagen} setImagen={setImagen} />
            <button type="submit">Añadir</button>
        </form>
    );
}

export default FormularioAñadir;
