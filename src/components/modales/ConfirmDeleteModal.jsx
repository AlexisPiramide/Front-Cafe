export default function ConfirmDeleteModal ({ data, onConfirm,setModalOpen }) {

    

    return (
        <div className="modal">
            <h2>¿Estás seguro de que deseas eliminar {data.nombre}?</h2>
            <button onClick={() => onConfirm(data)}>Sí, eliminar</button>
            <button onClick={() => setModalOpen(false)}>Cancelar</button>
        </div>
    );
};