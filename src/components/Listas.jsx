import { useEffect, useState } from "react";
import Tarjeta from "./cafes-components/Tarjeta";



export default function Listas() {

    const [cafes, setCafes] = useState([]);

    useEffect(() => {

        /* 
        const fetchCafes = async () => {
            const response = await fetch("http://localhost:3001/cafes");
            const data = await response.json();
            setCafes(data);
        };
        fetchCafes();
        */

        setCafes([{"nombre": "Café de Colombia", "tipo": "Arabica", "imagen": "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg", "nota": 0, "link": "https://www.cafedecolombia.com/"}, {"nombre": "Café de Etiopía", "tipo": "Arabica", "imagen": "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg", "nota": 2, "link": "https://www.cafedecolombia.com/"}, {"nombre": "Café de Brasil", "tipo": "Arabica", "imagen": "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg", "nota": 3.5, "link": "https://www.cafedecolombia.com/"}]);
    }, []);


    return (
        <>  
            <h1>Lista de cafés</h1>
            <div className="lista-cafes">
                {cafes.map((cafe, index) => (<Tarjeta key={index}nombre={cafe.nombre} tipo={cafe.tipo} imagen={cafe.imagen} nota={cafe.nota} link={cafe.link} />))}
            </div>
        </>
    );
}