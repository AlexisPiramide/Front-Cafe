import "./../../style/tarjeta.scss";
import Nota from "./Nota";
import { S3 } from "../../services/constante";

const Tarjeta = ({ imagen, nombre, tienda, tueste, precio, nota }) => {

    const enlaceimagen = S3 + imagen;

    return (
        <div className="tarjeta">
            <div className="nombre-cafe">{nombre}</div>
            <div className="tienda-cafe" id={tienda.tienda_id}>Tienda: {tienda.tienda_alias}</div>
            <div className="tipo-cafe">Tueste: {tueste}</div>
            <div className="precio-cafe">Precio: ${precio}</div>
            <img className="imagen-cafe" src={enlaceimagen} alt={nombre} onError={(e) => e.target.src = "/fallo.jpg"}/>
            <Nota nota={nota} />
        </div>
    );
};

export default Tarjeta;
