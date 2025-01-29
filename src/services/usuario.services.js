import {URL} from "./constante.js";

const login = async (correo, password) => {
    console.log("enviando");
    const data = await fetch(URL+"/api/usuarios/login",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({correo:correo,password:password})
    })
    if(data.ok){
        console.log("recibido");
        const json = await data.json();
        console.log(json);
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
        throw new Error('Error al registrar usuario, ¿estas seguro de que el correo no esta en uso?');
    }
}

const actualizar = async (alias,foto, password) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    headers['Authorization'] = 'Bearer ' + usuario.token;
    const data = await fetch(URL+"/api/usuarios/actualizar",{
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({alias: alias,password:password,foto:foto})
    })
    console.log(data);
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al actualizar usuario');
    }
}

export {login,registro,actualizar};