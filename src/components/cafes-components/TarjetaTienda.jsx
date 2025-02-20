import React, { useEffect, useState } from "react";
import "./../../style/tarjeta.scss";
import "./../../style/modaltienda.scss";
import Nota from "./Nota";
import { S3 } from "../../services/constante";
import { useOutletContext } from "react-router";
import { eliminarCafe, updateCafe } from "../../services/cafes.services"; // ensure the functions are correctly imported
import ConfirmDeleteModal from "./../modales/ConfirmDeleteModal";
import EditCafeModal from "./../modales/EditCafeModal";

export default function TarjetaTienda({ imagen, nombre, tienda, tueste, origen, precio, peso, nota,update,setUpdate }) {
    const [usuario, setUsuario] = useOutletContext();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    const enlaceimagen = S3 + imagen;

    // Function to open the modal
    const openModal = (type, cafeData) => {
        if (type === "eliminar") {
            setModalContent(<ConfirmDeleteModal data={cafeData} onConfirm={handleDelete} setModalOpen={setModalOpen} />);
        } else if (type === "editar") {
            setModalContent(<EditCafeModal data={cafeData} onSave={handleEdit} setModalOpen={setModalOpen} />);
        }
        setModalOpen(true);
    };


    // Handle cafe deletion
    const handleDelete = async (data) => {
        await eliminarCafe(data.nombre,data.tienda,data.tueste,data.precio,data.peso,data.imagen,data.origen)
        setModalOpen(false);
        setUpdate(update + 1);
    };

    // Handle cafe editing
    const handleEdit = async (data) => {
        const datoscambiar = {
            nombre: data.nombre,
            tienda: data.tienda,
            tueste: data.tueste,
            origen: data.origen,
            precio: parseFloat(data.precio),
            peso: parseFloat(data.peso),
            imagen: data.imagen
        };
        await updateCafe(nombre, tienda, tueste, precio, peso, imagen,origen, datoscambiar);
        setModalOpen(false);
        setUpdate(update + 1);
    };

    const handleEliminarClick = () => {
        openModal("eliminar", { nombre, tueste, tienda, origen, precio, peso });
    };

    const handleEditarClick = () => {
        openModal("editar", { nombre, tueste, tienda, origen, precio, peso, imagen });
    };

    return (
        <div className="tarjeta">
            <div className="nombre-cafe">{nombre}</div>
            <img 
                className="imagen-cafe" 
                src={enlaceimagen} 
                alt={nombre} 
                onError={(e) => e.target.src = "/fallo.jpg"} 
            />
            <div className="tienda-cafe" id={tienda.tienda_id}>Tienda: {tienda.tienda_alias}</div>
            <div className="tipo-cafe">Tueste: {tueste}</div>
            <div className="origen-cafe">Origen: {origen}</div>
            <div className="precio-cafe">Precio: {precio}€</div>
            <div className="peso-cafe">Peso: {peso / 1000}kg</div>

            <button className="eliminar-cafe" onClick={handleEliminarClick}>Eliminar</button>
            <button className="editar-cafe" onClick={handleEditarClick}>Editar</button>

            <Nota nota={nota} />

            {modalOpen && <div className="modal-background">
                {modalContent}
            </div>}
        </div>
    );
}
