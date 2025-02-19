import { useEffect, useState } from "react";
import { getCafesTienda,getPaginasCafesTienda } from "../../services/cafes.services";
import TarjetaTienda from "../../components/cafes-components/TarjetaTienda";
import Paginas from "../../components/cafes-components/Paginas";

export default function CafesTienda() {
    
    const [cafes, setCafes] = useState([]);
    const [pagina,setPagina] = useState(0);
    const [update, setUpdate] = useState(0);
    const [paginaFinal,setPaginaFinal] = useState(0);

    const fetchData = async (pagina) => {
        const cafesdb = await getCafesTienda(pagina);
        setCafes(cafesdb || []); 
    };

    const getPaginasTotales = async () => {
        const paginas = await getPaginasCafesTienda();
        setPaginaFinal(paginas-1);
        return paginas;
    }

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    useEffect(() => {
        getPaginasTotales();
        fetchData(0);
    }, []);

    useEffect(() => {
        fetchData(pagina);
    }, [pagina,update]);

        
    
    return (
        <>
        <div className="cafes">
            {cafes && cafes.length > 0 ? (
                cafes.map((cafe, index) => (
                    <TarjetaTienda key={index} peso={cafe.peso} imagen={cafe.imagen} nombre={cafe.nombre} tienda={cafe.tienda} origen={cafe.origen} tueste={cafe.tueste} precio={cafe.precio} nota={cafe.nota} openModal={openModal} update={update} setUpdate={setUpdate}/>
                ))
            ) :  (
                "Lo sentimos pero parece haber un problema con nuestro servidor"
            )}
            
            </div>
            <Paginas pagina={pagina} setPagina={setPagina} isFiltrado={false} filtros={null}/>
        </>
    );
}