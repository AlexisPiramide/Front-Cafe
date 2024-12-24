import { useNavigate } from "react-router-dom";
import "./../style/nav.scss"
export default function Nav() {
    const navigate = useNavigate();

    

    return ( 
        <nav>
            <button onClick={() => navigate("/FormularioAñadir")}>Añadir café</button>
        </nav>
    );
}