import { useState } from 'react';
import "./../style/tarjeta.scss";
import Nota from './cafes-components/Nota';
import Votos from './votaciones/Votos'
export default function Votaciones(/**{usuario}**/) {
    // VV Visivilidad Valorados / VNV Visivilidad No Valorados
    const [VV, setVV] = useState(true);
    const [VNV, setVNV] = useState(true);

    const usuario = {
            nombre : "Pepe",
            valoraciones : [
                {"nombre": "Café de Colombia", "tipo": "Arabica", "imagen": "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg", "link": "https://www.cafedecolombia.com/"}, {"nombre": "Café de Etiopía", "tipo": "Arabica", "imagen": "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg", "nota": 2, "link": "https://www.cafedecolombia.com/"}, {"nombre": "Café de Brasil", "tipo": "Arabica", "imagen": "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg", "nota": 3.5, "link": "https://www.cafedecolombia.com/"}
            ]
    }

    return (
        <>
             <h1>Cafes ya Valorados</h1>
            <button onClick={() => setVV(!VV)}> {VV ? 'Ocultar' : 'Mostrar'} </button>
            <ul className="lista-valorados" style={{ display: VV ? '' : 'none' }}>
                {usuario.valoraciones.map((valoracion, index) => {
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