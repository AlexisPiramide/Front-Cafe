import { useEffect, useState } from "react";
import Tarjeta from "../../components/cafes-components/Tarjeta";
import { getCafes } from "../../services/cafes.services";
import "../../style/cafes.scss"
export default function Listas() {
    const [cafes, setCafes] = useState([]);

    const fetchData = async () => {
        const cafesdb = await getCafes();
        setCafes(cafesdb || []); 
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Lista de cafés</h1>
            <div className="cafes">
                {cafes && cafes.length > 0 ? (
                    cafes.map((cafe, index) => (
                        <Tarjeta key={index} imagen={cafe.imagen} nombre={cafe.nombre} tienda={cafe.tienda} tueste={cafe.tueste} precio={cafe.precio} nota={cafe.nota}/>
                    ))
                ) : (
                    "Lo sentimos pero parece haber un problema con nuestro servidor"
                )}
            </div>
        </>
    );
}
