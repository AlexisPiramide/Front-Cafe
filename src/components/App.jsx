import { useEffect, useState } from 'react'

import Navegacion from './Navegacion.jsx'
import { Outlet } from 'react-router-dom'
function App() {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuario");
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);

    return (
        <>
        <Navegacion usuario={usuario} setUsuario={setUsuario}/>
        <Outlet context={[usuario, setUsuario]}/>
        </>
    )
}

export default App