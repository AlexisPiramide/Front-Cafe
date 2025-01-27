import {URL} from "./constante.js";

const login = async (correo, password) => {
    const data = await fetch(URL+"/api/usuarios/login",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({correo:correo,password:password})
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Usuario o contraseña incorrectos');
    }

};

const registro = async (alias,correo, password) => {
    const data = await fetch(URL+"/api/usuarios/registro",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({alias: alias,correo:correo,password:password})
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Usuario o contraseña incorrectos');
    }
}

export {login,registro};