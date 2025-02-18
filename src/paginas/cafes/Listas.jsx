import { useEffect, useState } from "react";
import Tarjeta from "../../components/cafes-components/Tarjeta";
import { getCafes, getFiltrado } from "../../services/cafes.services";
import "../../style/cafes.scss"
import Paginas from "../../components/cafes-components/Paginas";
import Filtros from "../../components/cafes-components/Filtros";
import ModalConfirmacion from "../../components/ModalConfirmacion";

export default function Listas() {
    const [cafes, setCafes] = useState([]);
    const [filtros, setFiltros] = useState({});
    const [isFiltrado,setIsFiltrado] = useState(false);
    const [pagina,setPagina] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const fetchData = async (pagina) => {
        const cafesdb = await getCafes(pagina);
        setCafes(cafesdb || []); 
    };

    const fetchFiltrado = async (filtros,pagina) => {
        const cafesdb = await getFiltrado(filtros,pagina);
        console.log(cafesdb);
        setCafes(cafesdb || []);
    }

    useEffect(() => {
        console.log(pagina)
        console.log(isFiltrado)
        if(isFiltrado){
            fetchFiltrado(filtros,pagina);
        } else {
            fetchData(pagina);
        }
    }, [pagina]);

    useEffect(() => {
        if(isFiltrado){
            fetchFiltrado(filtros,0);
        } else {
            fetchData(0);
        }
    }, [filtros]);
    
    return (
        <>
            <Filtros setFiltros={setFiltros} setIsFiltrado={setIsFiltrado}/>
            <div className="cafes">
                {cafes && cafes.length > 0 ? (
                    cafes.map((cafe, index) => (
                        <Tarjeta key={index} peso={cafe.peso} imagen={cafe.imagen} nombre={cafe.nombre} tienda={cafe.tienda} origen={cafe.origen} tueste={cafe.tueste} precio={cafe.precio} nota={cafe.nota} openModal={openModal}/>
                    ))
                ) :  (
                    "Lo sentimos pero parece haber un problema con nuestro servidor"
                )}
            </div>
            <Paginas pagina={pagina} setPagina={setPagina} isFiltrado={isFiltrado} filtros={filtros}/>
            <ModalConfirmacion isOpen={isOpen} setIsOpen={setIsOpen} mensaje={"Se ha llevado el cafe al carrito correctamente"} tipo={"cafe"} />
        </>
    );
}
