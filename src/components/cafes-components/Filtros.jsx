import { useState,useEffect } from "react";
import './../../style/filtros.scss';
import { URL } from "../../services/constante";

export default function Filtros({setFiltros,setIsFiltrado}) {
    const [tipos, setTipos] = useState([]);

    const [filtros, setFiltrosInterno] = useState({
        origen: "",
        tueste: "",
        tienda: "",
        peso: "",
        precioMax: "",
        precioMin: "",
        porNota: false
    });

    const handleChange = (e) => {
        console.log(filtros.porNota)
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


    const traerTipos = async () => {
        const response = await fetch(URL+"/api/cafes/c/c/c/tipos");
        const data = await response.json();
        console.log(data)
        setTipos(data);
    }

    useEffect(() => {
        traerTipos();
    }, []);


    return (
        <form onSubmit={handleSubmit} className="filtros">
            <div>
                <label>Origen</label>
                <input type="text" name="origen" value={filtros.origen} onChange={handleChange} />

                <label>Tueste</label>
                <select name="tueste" value={filtros.tueste} onChange={handleChange}>
                    <option value="">Seleccione un tueste</option>
                    {tipos.map((tipo) => (
                        <option key={tipo} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>

                <label>Tienda</label>
                <input type="text" name="tienda" value={filtros.tienda} onChange={handleChange} />

                <label>Peso</label>
                <input type="text" name="peso" value={filtros.peso} onChange={handleChange} />

                <div className="precio">
                    <label>Precio</label>
                    <input type="text" name="precioMin" value={filtros.precioMin} onChange={handleChange} />
                    <input type="text" name="precioMax" value={filtros.precioMax} onChange={handleChange} />
                </div>
                <div className="porNota">
                    <label>Por nota</label>
                    <input type="checkbox" name="porNota" onChange={(e) => setFiltrosInterno({...filtros, porNota: e.target.checked})} />
                </div>
            </div>
            <button type="submit">Filtrar</button>
        </form>
    );
}