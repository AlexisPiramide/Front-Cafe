import { useNavigate } from "react-router-dom";
import "./../style/nav.scss"


export default function Nav({usuario,setUsuario}) {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        setUsuario(null);
        navigate("/cafes");
    }


    return ( 
        <nav>
            <div className="contenido-nav">
                <div className="logo">
                    <img src="/cafe-logo.svg" alt="Coffee Logo" className="shake-image"  />
                    <h1>Cafes Piramide</h1>
                </div>
                <div className="botones">
                    {usuario?usuario.tienda?<button onClick={() => navigate("/añadir")}>Añadir café</button>:'':''}
                    {usuario?'':<button onClick={() => navigate("/registro")}>Registrarse</button>}
                    {usuario?'':<button onClick={() => navigate("/login")}>Iniciar sesión</button>}
                    <button onClick={() => navigate("/cafes")}>Lista de cafés</button>
                    {usuario?'':<button onClick={() => navigate("/votaciones")}>Votaciones</button>}
                    {usuario?<button onClick={() => navigate("/usuario")}>Perfil de usuario</button>:''}
                    {usuario?<button onClick={cerrarSesion}>Cerrar Sesion</button>:''}

                </div>
            </div>
            <div className="embellezedor"></div>
        </nav>
    );
}

