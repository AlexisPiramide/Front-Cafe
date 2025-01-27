const validacionAlias = (alias,setError) => {
    if (alias.length < 3 || alias.length > 20) {
        setError(true);
        return false;
    }else{
        setError(false);
        return true;
    }
}

const validacionCorreo = (correo,setError) => {  
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)){
        setError(true);
        return false;
    }else{
        setError(false);
        return true;
    }

}

const validacionContraseña = (contraseña,setError) => {
    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(contraseña)){
        setError(true);
        return false;
    }else{
        setError(false);
        return true;
    }
}

const validacionConfirmarContraseña = (contraseña, confirmarContraseña,setError) => {
    if(contraseña !== confirmarContraseña){
        setError(true);
        return false;
    }else{
        setError(false);
        return true;
    }
}

export {validacionAlias, validacionCorreo, validacionContraseña, validacionConfirmarContraseña};
