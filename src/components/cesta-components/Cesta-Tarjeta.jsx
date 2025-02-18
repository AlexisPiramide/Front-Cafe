import React from 'react';
import "./../../style/cesta-tarjeta.scss";
import { useNavigate } from 'react-router';

const CestaTarjeta = ({ usuario, modificarCesta }) => {

    const navigate = useNavigate();

    return (
        <div className='cesta-tarjeta'>
            {usuario && usuario.usuario.cesta.length >0 ? (
                usuario.usuario.cesta.map((cafe) => (
                    <div key={cafe.nombre} className='cafe-cesta'>
                        <div className='cafe-foto-nombre'>
                            {cafe.imagen ? <img className='imagen-cafe' src={`http:${cafe.imagen}`} /> : <img className='imagen-cafe' src='/fallo.jpg' />}
                            
                            <h3>{cafe.nombre}</h3>
                        </div>
                        <div className='detalles-cafe'>
                            <p>Tienda: {cafe.tienda.tienda_alias}</p>
                            <p>Tueste: {cafe.tueste}</p>
                            <p>Origen: {cafe.origen}</p>
                            <p>Precio: {cafe.precio}€</p>
                            <p>Peso: {cafe.peso / 1000}kg</p>
                        </div>
                        <div>
                        <h4>Cantidad: {cafe.cantidad}</h4>
                            <div>
                                <button onClick={() => modificarCesta(cafe.nombre, cafe.tueste, { tienda_alias: cafe.tienda.tienda_alias, tienda_id: cafe.tienda.tienda_id }, 'eliminar')}>Quitar</button>
                                <button onClick={() => modificarCesta(cafe.nombre, cafe.tueste, { tienda_alias: cafe.tienda.tienda_alias, tienda_id: cafe.tienda.tienda_id }, 'añadir')}>Añadir</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <>
                    <h2 className="volver">No hay cafés en la cesta.</h2>
                    <button className="volver" onClick={()=>(navigate("/cafes"))}>Volver al inicio</button>
                </>
            )}
        </div>
    );
};

export default CestaTarjeta;