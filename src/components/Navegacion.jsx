import { useNavigate } from "react-router-dom";
import "./../style/nav.scss"
export default function Nav() {
    const navigate = useNavigate();

    

    return ( 
        <nav>
            <div className="contenido-nav">
                <div className="logo">
                    <img src="/cafe-logo.svg" alt="Coffee Logo" className="shake-image"  />
                    <h1>Cafes Piramide</h1>
                </div>
                <div className="botones">
                    <button onClick={() => navigate("/añadir")}>Añadir café</button>
                    <button onClick={() => navigate("/registro")}>Registrarse</button>
                    <button onClick={() => navigate("/login")}>Iniciar sesión</button>
                    <button onClick={() => navigate("/cafes")}>Lista de cafés</button>
                    <button onClick={() => navigate("/votaciones")}>Votaciones</button>
                </div>
            </div>
            <div className="embellezedor"></div>
        </nav>
    );
}

