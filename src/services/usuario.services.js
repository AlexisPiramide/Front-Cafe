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
        'Content-Type': 'application/json',
    };
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const body = {};
    if (alias !== undefined  && alias!== null && alias!= '') body.alias = alias;
    if (password !== undefined && password!== null && password != '') body.password = password;
    if (foto !== undefined && foto !== null) {
        const nombreFoto = await subirImagen(foto[0]);
        body.foto = nombreFoto;
    }

    headers['Authorization'] = 'Bearer ' + usuario.token;
    const data = await fetch(URL+"/api/usuarios/actualizar",{
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({'datosCambiar':body})
    })
    console.log(data);
    console.log(data.body);
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al actualizar usuario');
    }
}

const subirImagen = async (imagen) => {

    const headers = {
        'Content-Type': 'multipart/form-data',
    };

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    headers['Authorization'] = 'Bearer ' + usuario.token;
    const data = await fetch(URL+"/api/usuarios/imagen",{
        method: 'POST',
        headers: headers,
        body: imagen
    })

    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al subir imagen');
    }

}

const añadirCesta = async (nombre,tueste,tienda,accion) => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const cafe = {nombre:nombre,tueste:tueste,tienda:tienda};
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ usuario.token
    };
    console.log(cafe)
    const data = await fetch(URL+"/api/usuarios/cesta",{
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({cafe: cafe,accion:accion})
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al añadir a la cesta');
    }

}

const enviarCesta = async() =>{
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ usuario.token
    };

    const data = await fetch(URL+"/api/pedidos/tramitar",{
        method: 'POST',
        headers: headers,
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al tramitar pedido');
    }
}

export {login,registro,actualizar,añadirCesta,subirImagen,enviarCesta};