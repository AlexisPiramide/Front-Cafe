import { useEffect, useState } from 'react';
import "./../style/tarjeta.scss";
import Nota from './cafes-components/Nota';
import Votos from './votaciones/Votos';

import {recogerValoraciones} from './../services/votaciones.services';
export default function Votaciones({usuario}) {

    const [VV, setVV] = useState(true);
    const [VNV, setVNV] = useState(true);
    const [valoradas,setValoradas] = useState(null);

    const recogerValoraciones = async () => {
        const result = await recogerValoraciones();
        setValoradas(result);
    }
    
    useEffect(() => {
        recogerValoraciones
    }, []);

    

    if (!valoradas || valoradas.length === 0) {
        return null;
    }

    return (
        <>
             <h1>Cafes ya Valorados</h1>
            <button onClick={() => setVV(!VV)}> {VV ? 'Ocultar' : 'Mostrar'} </button>
            <ul className="lista-valorados" style={{ display: VV ? '' : 'none' }}>
                
                {valoradas.map((valoracion, index) => {
                    if (valoracion.nota !== undefined)
                    return (
                        <div className="tarjeta" key={index}>
                            <div id="nombre-cafe">{valoracion.nombre}</div>
                            <div id="tipo-cafe">{valoracion.tipo}</div>
                            <img id="imagen-cafe" src={valoracion.imagen} alt={valoracion.nombre} />
                            <Nota nota={valoracion.nota} />
                            <a href={valoracion.link}>Comprar</a>
                            <Votos votoAntiguo={valoracion.nota}/>
                        </div>
                    );
                })}
            </ul>

            <h1>Cafes No Valorados</h1>
            <button onClick={() => setVNV(!VNV)}>  {VNV ? 'Ocultar' : 'Mostrar'}  </button>
            <ul className="lista-no-valorados" style={{ display: VNV ? '' : 'none' }}>
                {
                    usuario.valoraciones.map((valoracion, index) => {
                        if (valoracion.nota == undefined)
                            return (
                                <div className="tarjeta" key={index}>
                                    <div id="nombre-cafe">{valoracion.nombre}</div>
                                    <div id="tipo-cafe">{valoracion.tipo}</div>
                                    <img id="imagen-cafe" src={valoracion.imagen} alt={valoracion.nombre} />
                                    
                                    <a href={valoracion.link}>Comprar</a>
                                    <Votos votoAntiguo={0}/>
                                </div>
                            );
                        }
                    )
                }
            </ul>
        </>
    );


}