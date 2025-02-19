import { useState } from "react";

export default function EditCafeModal ({ data, onSave,setModalOpen }) {
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal">
            <input name="nombre" value={formData.nombre} onChange={handleChange}/>
            <input name="tueste" value={formData.tueste} onChange={handleChange}/>
            <input name="origen" value={formData.origen} onChange={handleChange}/>
            <input name="precio" value={formData.precio} onChange={handleChange}/>
            <input name="peso" value={formData.peso} onChange={handleChange}/>
            <button onClick={() => onSave(formData)}>Guardar</button>
            <button onClick={() => setModalOpen(false)}>Cancelar</button>
        </div>
    );
};
