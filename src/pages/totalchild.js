import { useState } from "react"
import desayuno from "../styles/desayuno.module.css"
import React from 'react'

export default function OrderProductClick() {
    // useState()devuelve una matriz, y puede acceder y usar esos valores de matriz
    // dentro de su componente usando la desestructuración de la matriz 
    const [quantityProduct, setQuantityProducts] = React.useState(0);
    // El segundo elemento de la matriz es una función para actualizar el valor. 
    // Puede nombrar cualquier cosa a la función de actualización, 
    // pero es común colocarle el prefijo set seguido del nombre de la variable de estado que está actualizando.
    setQuantityProducts(quantityProduct + 1);
    // ...

    return (
        <div>
         {/* <button className={desayuno.btnagregarproducto} onClick={OrderProductClick}>Agregar Producto({quantityProduct})</button>    */}
        </div>
    )
}