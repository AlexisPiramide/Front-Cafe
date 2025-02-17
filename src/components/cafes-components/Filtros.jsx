import { useState } from "react";
import './../../style/filtros.scss';
export default function Filtros({setFiltros,setIsFiltrado}) {

    const [filtros, setFiltrosInterno] = useState({
        origen: "",
        tueste: "",
        tienda: "",
        peso: "",
        precioMax: "",
        precioMin: ""
    });

    const handleChange = (e) => {
        setFiltrosInterno({
            ...filtros,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFiltrado(true);
        setFiltros(filtros);
    }

    return (
        <form onSubmit={handleSubmit} className="filtros">
        <div>
            <label>Origen</label>
            <input type="text" name="origen" value={filtros.origen} onChange={handleChange} />


            <label>Tueste</label>
            <input type="text" name="tueste" value={filtros.tueste} onChange={handleChange} />
    

            <label>Tienda</label>
            <input type="text" name="tienda" value={filtros.tienda} onChange={handleChange} />

            <label>Peso</label>
            <input type="text" name="peso" value={filtros.peso} onChange={handleChange} />

            <div className="precio">
                <label>Precio</label>
                <input type="text" name="precioMin" value={filtros.precioMin} onChange={handleChange} />
                <input type="text" name="precioMax" value={filtros.precioMax} onChange={handleChange} />
            </div>
    </div>
    <button type="submit">Filtrar</button>
</form>

    )
}