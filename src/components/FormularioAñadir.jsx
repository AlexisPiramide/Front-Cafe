import InputImagen from './inputImagen';
import { useState } from "react";
import "./../style/upload.css";

function FormularioAñadir() {
    const [images, setImages] = useState([]);
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [enlace, setEnlace] = useState("");
    const [nota, setNota] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validacionNombre = validation(document.querySelector("#nombre"),/[a-zA-Z]{3,}/,"El nombre debe tener al menos 3 letras");
        const validacionTipo = validation(document.querySelector("#tipo"),/[a-zA-Z]{3,}/,"El tipo debe tener al menos 3 letras");
        const validacionEnlace = validation(document.querySelector("#enlace"),/https:\/\/www\..+\..+/,"El enlace debe ser una URL válida");

        if(validacionNombre && validacionTipo && validacionEnlace){
            console.log("Añadido")
        }else{
            console.log("No añadido")
        }

    }


    const validation = (e,RegEX,error) => {
        if(!RegEX.test(e.target.value)){
            e.target.setCustomValidity(error);
        }
        else{
            return true
        }
    }


    return ( 
            <form>
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" required></input>
                <label>Tipo:</label>
                <input type="text" id="tipo" name="tipo" required></input>
                <label>Imagen:</label>
                
                <InputImagen images={images} setImages={setImages}/>

                <label>Enlace:</label>
                <input type="text" id="enlace" name="enlace" required></input>
                <button type="submit">Añadir</button>
            </form>
    )

}



export default FormularioAñadir;