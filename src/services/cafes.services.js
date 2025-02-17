import {URL} from "./constante.js";

const getCafes = async (pagina) => {
    try {
        const data = await fetch(URL+"/api/cafes/"+pagina);
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
   
};

const getPaginas = async () => {
    try {
        const data = await fetch(URL+"/api/cafes/t/t/paginas");
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
   
};

const getFiltrado = async (filtros,pagina) => {
    try {
        console.log(pagina,"pagina")
        const data = await fetch(URL+"/api/cafes/filtrados/"+pagina,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filtros)
        });
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
   
};

const getPaginasFiltradas = async (filtros) => {
    const filtrosLimpios = {};
    for (const key in filtros) {
        if (filtros[key] !== "") {
            filtrosLimpios[key] = filtros[key];
        }
    }
    console.log(filtrosLimpios)

    try {
        const data = await fetch(URL+"/api/cafes/t/t/paginas/filtradas",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filtrosLimpios)
        });
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
   
}

export {getCafes,getPaginas,getFiltrado,getPaginasFiltradas};   