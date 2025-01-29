import { useNavigate } from "react-router-dom";

export default function zonaNoAccesible(){

    const navigate = useNavigate();

        return(
            <>
            <p>Parece que no deberias estar aqui</p>
            <img src="/puerta.png" alt="Coffee Logo" />
            <button onClick={()=>(navigate("/cafes"))}>Vuelve al mundo de los cafes</button>
            </>
            ) 

};