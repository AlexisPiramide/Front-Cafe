import "./../../style/tarjeta.scss";
import Nota from "./Nota";
import { S3 } from "../../services/constante";
import { añadirCesta } from "../../services/usuario.services";
import { useOutletContext } from "react-router";

const Tarjeta = ({ imagen, nombre, tienda, tueste,origen, precio,peso, nota,openModal }) => {
    const [ usuario, setUsuario] = useOutletContext();
    
    const enlaceimagen = S3 + imagen;

    const añadiraCesta = (nombre,tueste,tienda) => {
        const datos = putCesta(nombre,tueste,tienda);
        setUsuario(datos);
        openModal();
    }

    const putCesta = async (nombre,tueste,tienda) => {
        const datos = await añadirCesta(nombre,tueste,tienda,"añadir");
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        usuario.usuario= datos.usuario;
        localStorage.setItem("usuario",JSON.stringify(usuario));
        setUsuario(usuario)
        return datos
    }

    return (
        <div className="tarjeta">
            <div className="nombre-cafe">{nombre}</div>
            <img className="imagen-cafe" src={enlaceimagen} alt={nombre} onError={(e) => e.target.src = "/fallo.jpg"}/>
            <div className="tienda-cafe" id={tienda.tienda_id}>Tienda: {tienda.tienda_alias}</div>
            <div className="tipo-cafe">Tueste: {tueste}</div>
            <div className="origen-cafe">Origen: {origen}</div>
            <div className="precio-cafe">Precio: {precio}€</div>
            <div className="peso-cafe">Peso: {peso/1000}kg</div>
            {!usuario.usuario.tienda_alias?
                <button className="boton-cafe" onClick={()=>{añadiraCesta(nombre,tueste,{tienda_alias: tienda.tienda_alias,tienda_id: tienda.tienda_id})}}>Comprar</button>
            :''}
            <Nota nota={nota} />
        </div>
    );
};

export default Tarjeta;
