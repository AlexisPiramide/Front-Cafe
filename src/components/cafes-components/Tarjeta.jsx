import "./../../style/tarjeta.scss";
import Nota from "./Nota";

const Tarjeta = ({ imagen, nombre, tipo, nota, link }) => {
    return (
        <div className="tarjeta">
            <div id="nombre-cafe">{nombre}</div>
            <div id="tipo-cafe">{tipo}</div>
            <img id="imagen-cafe" src={imagen} alt={nombre} />
            <Nota nota={nota} />
            <a href={link}>Comprar</a>
        </div>
    );
};

export default Tarjeta;