import { useState, useEffect } from "react";

import Dropzone from '../../components/form-components/Drop-Zone';
import FormField from '../../components/form-components/FormField';
import { insertarCafe } from "../../services/cafes.services";
import ModalConfirmacion from "../../components/ModalConfirmacion";


import "./../../style/form.scss";
import { useNavigate } from "react-router";

function FormularioAñadir() {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [peso, setPeso] = useState("");
    const [origen, setOrigen] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState();

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

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
            validateField(precio, /[0-9]+/, "El precio debe ser un número") &&
            validateField(origen, /[a-zA-Z]{3,}/, "El origen debe tener al menos 3 letras")
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const tienda = JSON.parse(localStorage.getItem('usuario')).usuario.tienda_alias;
            await enviarcafe(nombre,tienda,tipo,precio,peso,imagen,origen);
            openModal();
            
        } else {
            console.error("Validation failed.");
        }
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
            navigate("/cafes");
            }, 5000);
        }
    }
    ,[isOpen]);

    const enviarcafe = async (nombre,tienda,tueste,precio,peso,imagen,origen) => {
        const data = await insertarCafe(nombre,tienda,tueste,precio,peso,imagen,origen);
        console.log(data);
    }
        



    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormField label="Nombre" type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} />
                <FormField label="Tueste" id="tipo" name="tipo" onChange={(e) => setTipo(e.target.value)} />
                <FormField label="Peso" id="peso" name="peso" onChange={(e) => setPeso(e.target.value)} />
                <FormField label="Precio" id="precio" name="precio" onChange={(e) => setPrecio(e.target.value)} />
                <FormField label="Origen" id="origen" name="origen" onChange={(e) => setOrigen(e.target.value)} />
                <label>Imagen:</label>
                <Dropzone imagen={imagen} setImagen={setImagen} />
                <button type="submit">Añadir</button>
            </form>
            <ModalConfirmacion isOpen={isOpen} setIsOpen={setIsOpen} mensaje={"Se ha insertado el cafe a la base de datos"} tipo={"cafe"} />
        </>
    );
}

export default FormularioAñadir;
