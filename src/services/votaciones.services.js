import {URL} from "./constante.js";

const recogerValoraciones = async () => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    headers['Authorization'] = 'Bearer ' + usuario.token;
    const data = await fetch(URL+"/api/usuarios/actualizar",{
        method: 'GET',
        headers: headers
    })

    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al actualizar usuario');
    }
}


const recogerValorables = async () => {

    const headers = {
        'Content-Type': 'application/json'
    };
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    headers['Authorization'] = 'Bearer ' + usuario.token;
    const data = await fetch(URL+"/api/notas/valorables",{
        method: 'GET',
        headers: headers
    })

    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al actualizar usuario');
    }

}



export {recogerValoraciones,recogerValorables};