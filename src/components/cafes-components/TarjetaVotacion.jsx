import "./../../style/tarjeta.scss";
import Nota from "./Nota";
import { S3 } from "../../services/constante";

export default function TarjetaVotacion ({ imagen, nombre, tienda, tueste ,origen,precio,peso, nota,setModalOpen,setCafe}) {
    const enlaceimagen = S3 + imagen;
    console.log(origen,peso,precio,nota)
    const hacercosas = async () => {

        await setCafe({nombre:nombre,tueste:tueste,tienda:tienda,origen:origen,precio:precio,peso:peso,imagen:imagen});
        await setModalOpen(true);
    }

    return (
        <div className="tarjeta">
            <div className="nombre-cafe">{nombre}</div>
            <img className="imagen-cafe" src={enlaceimagen} alt={nombre} onError={(e) => e.target.src = "/fallo.jpg"}/>
            <div className="tienda-cafe" id={tienda ? tienda.tienda_id : 'default'}>Tienda: {tienda ? tienda.tienda_alias : 'Desconocida'}</div>
            <div className="tipo-cafe">Tueste: {tueste}</div>
            <div className="origen-cafe">Origen: {origen}</div>
            <div className="precio-cafe">Precio: {precio}€</div>
            <div className="peso-cafe">Peso: {peso/1000}kg</div>
            <button onClick={() => hacercosas()}>Valorar</button>
         
            <Nota nota={nota} />
        </div>
    );
};
