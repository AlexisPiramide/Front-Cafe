import { useEffect, useState } from 'react'

import Navegacion from './Navegacion.jsx'
import { Outlet } from 'react-router-dom'
function App() {

    const [usuario, setUsuario] = useState(null);
    return (
        <>
        <Navegacion usuario={usuario}/>
        <Outlet context={[usuario, setUsuario]}/>
        </>
    )
}

export default App