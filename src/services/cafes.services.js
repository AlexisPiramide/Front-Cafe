import {URL} from "./constante.js";

const getCafes = async () => {
    try {
        const data = await fetch(URL+"/api/cafes");
        const json = await data.json();
        return json;
    } catch (error) {
        console.log(error)
    }
   
};


export {getCafes}   