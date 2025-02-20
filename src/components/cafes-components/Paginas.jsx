import { useEffect, useState } from "react"
import { getPaginas, getPaginasCafesTienda, getPaginasFiltradas } from "../../services/cafes.services";
import "./../../style/paginas.scss"

export default function Paginas({pagina,setPagina,isFiltrado,filtros,isTienda}) {
    const [paginaFinal,setPaginaFinal] = useState();

    const getPaginasTotales = async () => {
        const paginas = await getPaginas();
        console.log(paginas)
        setPaginaFinal(paginas-1);
        return paginas;
    }

    const getPaginasFiltro = async (filtros) => {
        const paginas = await getPaginasFiltradas(filtros);
        console.log(paginas)
        setPaginaFinal(paginas-1);
        return paginas;
    }

    const getPaginasTienda = async () => {
        const paginas = await getPaginasCafesTienda();
        console.log(paginas)
        setPaginaFinal(paginas-1);
        return paginas;
    }

    useEffect(() => {
        if(!isFiltrado)
            if(isTienda) getPaginasTienda(); else getPaginasTotales();
        else{
            
            getPaginasFiltro(filtros);
        }

    }, [isFiltrado,filtros]);

    return (
        <div className="paginas">
            <button id="0" onClick={(e) => setPagina(e.target.id)} disabled={paginaFinal <= 0}>0</button>
            <button onClick={() => setPagina(prev => Math.max(0, prev - 1))} disabled={paginaFinal <= 0}>-</button>
            <button disabled>Pagina Actual:{pagina}</button>
            <button onClick={() => setPagina(prev => Math.min(paginaFinal, prev + 1))} disabled={paginaFinal <= 0}>+</button>
            <button id={paginaFinal} onClick={(e) => setPagina(e.target.id)} disabled={paginaFinal <= 0}>{paginaFinal <= 0 ? 0 : paginaFinal}</button>
        </div>
    )
}