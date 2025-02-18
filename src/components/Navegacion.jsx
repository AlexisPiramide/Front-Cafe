import { useNavigate } from "react-router-dom";
import "./../style/nav.scss"
import { use, useEffect } from "react";


export default function Nav({usuario,setUsuario}) {
    const navigate = useNavigate();
    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        setUsuario(null);
        navigate("/cafes");
    }

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        setUsuario(usuario);
    },[])


    return ( 
        <nav>
            <div className="contenido-nav">
                <div className="logo">
                    <img src="/cafe-logo.svg" alt="Coffee Logo" className="shake-image"  />
                    <h1>Cafes Piramide</h1>
                </div>
                <div className="botones">
                    {usuario && usuario.usuario.tienda_alias?<button onClick={() => navigate("/añadir")}>Añadir café</button>:''}
                    {usuario && usuario.usuario.tienda_alias?<button onClick={() => navigate("/tienda")}>Cafes de mi tienda</button>:''}
                    {usuario?'':<button onClick={() => navigate("/registro")}>Registrarse</button>}
                    {usuario?'':<button onClick={() => navigate("/login")}>Iniciar sesión</button>}
                    <button onClick={() => navigate("/cafes")}>Lista de cafés</button>
                    {usuario && usuario.usuario.cesta?<button onClick={() => navigate("/votar")}>Votar</button>:''}
                    {usuario?<button onClick={() => navigate("/usuario")}>Perfil de usuario</button>:''}
                    {usuario?<button onClick={cerrarSesion}>Cerrar Sesion</button>:''}
                    {usuario && usuario.usuario.cesta?<button onClick={() => navigate("/cesta")}>Cesta</button>:''}

                </div>
            </div>
            <div className="embellezedor"></div>
        </nav>
    );
}

