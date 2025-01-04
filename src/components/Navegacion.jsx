import { useNavigate } from "react-router-dom";
import "./../style/nav.scss"
export default function Nav() {
    const navigate = useNavigate();

    

    return ( 
        <nav>
            <button onClick={() => navigate("/añadir")}>Añadir café</button>
            <button onClick={() => navigate("/registro")}>Registrarse</button>
            <button onClick={() => navigate("/login")}>Iniciar sesión</button>
            <button onClick={() => navigate("/cafes")}>Lista de cafés</button>
            <button onClick={() => navigate("/votaciones")}>Votaciones</button>
        </nav>
    );
}

