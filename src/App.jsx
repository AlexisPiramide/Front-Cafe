import { useState } from 'react'

import TarjetaCafe from './components/TarjetaCafe'
import FormularioAñadir from './components/FormularioAñadir'

function App() {
  const [count, setCount] = useState(0)

  const cafes = [
    {
        "nombre": "Espresso",
        "tipo": "Café solo",
        "imagen": "https://via.placeholder.com/150",
        "enlace": "https://www.starbucks.es/bebidas/espresso/espresso",
        "nota": 5
    },
    {
        "nombre": "Latte",
        "tipo": "Café con leche",
        "imagen": "https://via.placeholder.com/150",
        "enlace": "https://www.starbucks.es/bebidas/espresso/espresso",
        "nota": 2
    },
    {
        "nombre": "Cappuccino",
        "tipo": "Café con espuma de leche",
        "imagen": "https://via.placeholder.com/150",
        "enlace": "https://www.starbucks.es/bebidas/espresso/espresso",
        "nota": 1
    },
    {
        "nombre": "Americano",
        "tipo": "Café diluido",
        "imagen": "https://via.placeholder.com/150",
        "nota": 3
    }]

    /*
  return (
    <> 
      {
        cafes.map((cafe, index) => (<TarjetaCafe key={index} cafe={cafe}/>))
      }
    </>
  )
    */
   return (
    <FormularioAñadir/>
   )
}

export default App
