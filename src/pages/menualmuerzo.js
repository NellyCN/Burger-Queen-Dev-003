import Almuerzo from '../styles/almuerzo.module.css'
// import Image from 'next/image'
//agregar keys id?
// productos deben tener 
//"id"
// "name":
// "price":
// "image":
// "type":
// "dateEntry":

export default function MenuAlmuerzo(props) {
  return (
    <div key={props.id}>
      {/* se agrega id para evitar errores con keys*/}
      {/* <div className={Almuerzo.divproducto} onClick={hello}>        </div> */}
      <div className={Almuerzo.containerproducto}>
        {/* <Image src={props.imageProd} className={Almuerzo.imageProd} alt='imagen producto de comida' /> */}
        <div className={Almuerzo.etiqProd}>
          <img src={props.imageProd} className={Almuerzo.imageProd} alt='imagen producto de comida' />
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <button className={Almuerzo.btnagregarproducto}>Agregar producto</button>
      </div>
    </div>
  )
}