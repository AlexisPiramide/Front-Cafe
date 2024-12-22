import { useState } from "react";
import TarjetaCafe from "./TarjetaCafe";
import "./../style/tarjeta.scss";
export default function ListaCafes (){
    const [cafes,setCafes] = useState([{
        nombre: "Café 1",
        tipo: "Arabico",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
        enlace: "https://www.google.com",
        nota : 5
    },
    {
        nombre: "Café 2",
        tipo: "Robusta",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
        enlace: "https://www.google.com",
        nota : 4
    },
    {
        nombre: "Café 3",
        tipo: "Arabico",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
        enlace: "https://www.google.com",
        nota : 3
    },
    {
        nombre: "Café 4",
        tipo: "Robusta",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
        enlace: "https://www.google.com",
        nota : 2
    },
    {
        nombre: "Café 5",
        tipo: "Arabico",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
        enlace: "https://www.google.com",
        nota : 1
    }])

    return (
        <div className="lista-cafes">
            {
                cafes.map((cafe)=>{
                    return (
                        <TarjetaCafe key={cafe.nombre}cafe={cafe}/>
                    )
                })
            }
        </div>
    )
}