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


export {getCafes}   