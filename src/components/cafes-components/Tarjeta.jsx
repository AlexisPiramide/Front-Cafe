import "./../../style/tarjeta.scss";
import Nota from "./Nota";
import { S3 } from "../../services/constante";

const Tarjeta = ({ imagen, nombre, tienda, tueste,origen, precio, nota }) => {

    const enlaceimagen = S3 + imagen;

    return (
        <div className="tarjeta">
            <div className="nombre-cafe">{nombre}</div>
            <img className="imagen-cafe" src={enlaceimagen} alt={nombre} onError={(e) => e.target.src = "/fallo.jpg"}/>
            <div className="tienda-cafe" id={tienda.tienda_id}>Tienda: {tienda.tienda_alias}</div>
            <div className="tipo-cafe">Tueste: {tueste}</div>
            <div className="origen-cafe">Origen: ${origen}</div>
            <div className="precio-cafe">Precio: ${precio}</div>
            <Nota nota={nota} />
        </div>
    );
};

export default Tarjeta;
