import "./../../style/tarjeta.scss";
import Nota from "./Nota";
import { S3 } from "../../services/constante";

const Tarjeta = ({ imagen, nombre, tienda, tueste, precio, nota }) => {

    const enlaceimagen = S3 + imagen;

    return (
        <div className="tarjeta">
            <div id="nombre-cafe">{nombre}</div>
            <div id="tienda-cafe">Tienda: {tienda}</div>
            <div id="tipo-cafe">Tueste: {tueste}</div>
            <div id="precio-cafe">Precio: ${precio}</div>
            <img id="imagen-cafe" src={enlaceimagen} alt={nombre} onError={(e) => e.target.src = "/fallo.jpg"}/>
            <Nota nota={nota} />
        </div>
    );
};

export default Tarjeta;
