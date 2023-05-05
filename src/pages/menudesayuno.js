import desayuno from '../styles/desayuno.module.css'
//agregar keys id?
// productos deben tener 
//"id"
// "name":
// "price":
// "image":
// "type":
// "dateEntry":
export default function MenuDesayuno(props) {
  return (
    <div key={props.id}>
    {/* className={Almuerzo.containerMenu} */}

    {/* <div className={desayuno.divproducto} onClick={hello}>        </div> */}
    
    <div className={desayuno.containerproducto}>
      <img src={props.imageProd} className={desayuno.imageProd} alt='imagen producto de comida' />
      <p>{props.name}</p>
      <p>${props.price}</p>
      <button className={desayuno.btnagregarproducto}>Agregar producto</button>
    </div>
  </div>
  )
}