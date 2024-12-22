import { useState } from 'react'

import "./../style/tarjeta.scss";

import Nota from "./Nota";

function TarjetaCafe({cafe}) {
 
    return (
        <div className="tarjeta">
            <h2 id="nombre-cafe">{cafe.nombre}</h2>
            <h3 id="tipo-cafe">{cafe.tipo}</h3>
            <img id="imagen-cafe" src={cafe.imagen} alt={cafe.nombre} />
            <a href={cafe.enlace}>Comprar Mas</a>
            <Nota nota={cafe.nota}/>
        </div>
    );
}

export default TarjetaCafe;