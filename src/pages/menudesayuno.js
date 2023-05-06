import { useState } from 'react'
import desayuno from '../styles/desayuno.module.css'
//agregar keys id?
//"id"
// "name":
// "price":
// "image":
// "type":
// "dateEntry":
//foreach para el total? deberia ser array de
export default function MenuDesayuno(props) {
  let [cantidadProductos, setCantidad]= useState(0)
  const btnAgregarClick=()=>{
    setCantidad(cantidadProductos + 1)
    console.log(cantidadProductos)
  }
  // const btnQuitarClick=()=>{
  //   if(cantidadProdutos>0 ){
  //   setCantidad(cantidadProdutos-1)}
  //   console.log(cantidadProdutos)
  // }
  


  return (
    <div key={props.id}>
    {/* className={Almuerzo.containerMenu} */}

    {/* <div className={desayuno.divproducto} onClick={hello}>        </div> */}
    
    <div className={desayuno.containerproducto}>
      <img src={props.imageProd} className={desayuno.imageProd} alt='imagen producto de comida' />
      <p>{props.name}</p>
      <p>${props.price}</p>
      <button className={desayuno.btnagregarproducto} onClick={btnAgregarClick} >Agregar producto</button>
      {/* <button className={desayuno.btnagregarproducto} onClick={btnQuitarClick} >quitar prueba</button> */}
      <p>{cantidadProductos},{props.name}</p>

    
    </div>
  </div>
  )
}