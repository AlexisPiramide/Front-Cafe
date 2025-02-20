import { useEffect, useState } from 'react';
import "./../style/votaciones.scss";


import ModalValoracion from "./modales/ModalValoracion";
import {recogerValorables, votar} from '../services/votaciones.services';
import TarjetaVotacion from './cafes-components/TarjetaVotacion';


export default function Votaciones({}) {
    const [cafe,setCafe] = useState(null);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [VV, setVV] = useState(true);
    const [VNV, setVNV] = useState(true);
    const [valoradas,setValoradas] = useState(null);
    const [valorables,setValorables] = useState(null);

    const recoger = async () => {
        const result = await recogerValorables();
        setValoradas(result.notas);
        console.log(result)
        setValorables(result.cafes);
    }
    
    useEffect(() => {
        recoger()
    }, []);


    const valorarCafe = async (puntuacion) => {
        console.log("Hola")
        await votar(cafe, puntuacion);

        setModalOpen(false);
        recoger();
    };

    return (
        <>
        <div className="contenedor-cafes">
            <div className="zona izquierda">
                <h1>Cafés ya Valorados</h1>
                <button onClick={() => setVV(!VV)}> {VV ? 'Ocultar' : 'Mostrar'} </button>
                <ul className="lista-valorados" style={{ display: VV ? '' : 'none' }}>       
                    {console.log(valoradas)}
                    {valoradas && valoradas.map((valoracion, index) => (
                        <TarjetaVotacion key={index} {...valoracion.cafe} nota={valoracion.nota} setModalOpen={setModalOpen} setCafe={setCafe}/>
                    ))
                   }
                </ul>
            </div>

            <div className="zona derecha">
                <h1>Cafés No Valorados</h1>
                <button onClick={() => setVNV(!VNV)}>  {VNV ? 'Ocultar' : 'Mostrar'}  </button>
                <ul className="lista-no-valorados" style={{ display: VNV ? '' : 'none' }}>
                    {(!valorables || valorables.length === 0) ? null : (
                        valorables.map((valoracion, index) => (
                            <TarjetaVotacion key={index} {...valoracion} setModalOpen={setModalOpen} setCafe={setCafe}/>
                        ))
                    )}
                </ul>
            </div>
        </div>
        <ModalValoracion isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={valorarCafe} />
    </>
    );


}