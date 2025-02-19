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
        const data = await fetch(URL+"/api/cafes/total/cafes/paginas");
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
   
};

const getFiltrado = async (filtros,pagina) => {
    try {
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

    try {
        const data = await fetch(URL+"/api/cafes/total/cafes/paginas/filtradas",{
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

const getCafesTienda = async (pagina) => {

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const heatders = {
        'Content-Type': 'application/json',
    }   
    heatders.Authorization = 'Bearer ' + usuario.token;
    try {
        const data = await fetch(URL+"/api/cafes/total/cafes/tienda",{
            method: 'POST',
            headers: heatders,
            body: JSON.stringify({pagina: pagina})
        });
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
}

const getPaginasCafesTienda = async () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const heatders = {
        'Content-Type': 'application/json',
    }   
    heatders.Authorization = 'Bearer ' + usuario.token;
    try {
        const data = await fetch(URL+"/api/cafes/total/cafes/tienda/paginas",{
            method: 'GET',
            headers: heatders
        });
        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
}


const insertarCafe = async (nombre,tienda,tueste,precio,peso,imagen,origen) => {
    let imagenSubida 
    if(imagen === undefined || imagen ===  null){
        imagenSubida= await subirImagen(imagen);
    }else{
        imagenSubida = {uniqueName: "default.png"}
    }

    try {
        
        const usuario = JSON.parse(localStorage.getItem('usuario'));

       

        const headers = {
            'Content-Type': 'application/json',
        };

        headers['Authorization'] = 'Bearer ' + usuario.token;
     
        const data = await fetch(URL+"/api/cafes/",{
            method: 'POST',
            headers: headers,
            body: JSON.stringify({nombre, tienda, tueste, precio, peso, imagen: imagenSubida.uniqueName, origen})
        });

        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
}

const subirImagen = async (imagen) => {

    const headers = {

    };
    const formData = new FormData();
    formData.append("imagen", imagen);
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    headers['Authorization'] = 'Bearer ' + usuario.token;
    const data = await fetch(URL+"/api/cafes/imagen",{
        method: 'POST',
        headers: headers,
        body: formData
    })

    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al subir imagen');
    }

}

const eliminarCafe = async (nombre,tienda,tueste,precio,peso,imagen,origen) => {
    
    try {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        const headers = {
            'Content-Type': 'application/json',
        };
        headers['Authorization'] = 'Bearer ' + usuario.token;
        const data = await fetch(URL+"/api/cafes/",{
            method: 'DELETE',
            headers: headers
        });

        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
}

const updateCafe = async (nombre,tienda,tueste,precio,peso,imagen,origen,datoscambiar) => {
     
    try {
        
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        const headers = {
            'Content-Type': 'application/json',
        };

        headers['Authorization'] = 'Bearer ' + usuario.token;
     
        const data = await fetch(URL+"/api/cafes/",{
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({nombre: nombre, tienda:tienda, tueste:tueste, precio:precio, peso:peso, imagen:imagen, origen:origen,datoscambiar:datoscambiar})
        });

        const json = await data.json();
        return json;
        
    } catch (error) {
        console.log(error)
    }
}

export {getCafes,getPaginas,getFiltrado,getPaginasFiltradas,insertarCafe,getCafesTienda,getPaginasCafesTienda,eliminarCafe,updateCafe};   