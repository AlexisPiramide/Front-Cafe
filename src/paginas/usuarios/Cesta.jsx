import { useNavigate, useOutletContext } from "react-router-dom";
import { añadirCesta } from "../../services/usuario.services";
import CestaTarjeta from "../../components/cesta-components/Cesta-Tarjeta";
import { enviarCesta } from "../../services/usuario.services";

export default function Cesta() {
    const [ usuario, setUsuario] = useOutletContext();
    const navigate = useNavigate();
    const cesta = usuario?.usuario?.cesta?.length ?? 0;

    const modificarCesta = (nombre,tueste,tienda,condicion) => {
        putCesta(nombre,tueste,tienda,condicion);
    }

    const putCesta = async (nombre,tueste,tienda,condicion) => {
        const datos = await añadirCesta(nombre,tueste,tienda,condicion);
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        usuario.usuario= datos.usuario;
        console.log(usuario);
        localStorage.setItem("usuario",JSON.stringify(usuario));
        setUsuario(datos);
        return datos
    }

    const tramitarPedido = () => {
        tramitar();
        
    }

    const tramitar= async () => {
        await enviarCesta();
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        usuario.usuario.cesta= [];
        console.log(usuario);
        localStorage.setItem("usuario",JSON.stringify(usuario));
        return datos

    }

    return (
        <>
            <CestaTarjeta usuario={usuario} modificarCesta={modificarCesta}/>
            {cesta && cesta>0 ? <button onClick={() => tramitarPedido()}>Tramitar Pedido</button>: ''}
        </>
    );
}