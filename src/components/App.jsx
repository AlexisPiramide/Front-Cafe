import { useContext, useEffect, useState } from 'react'
//import './App.css'
import { MainContext } from '../main'

import Navegacion from './Navegacion.jsx'
import { Outlet } from 'react-router-dom'

function App() {
    const [usuario, setUsuario] = useState(null);

    return (
        <>
        <Navegacion/>
        <Outlet/>
        </>
    )
}

export default App