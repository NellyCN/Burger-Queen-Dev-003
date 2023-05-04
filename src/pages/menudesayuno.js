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
    <div>
    {/* className={Almuerzo.containerMenu} */}

    {/* <div className={desayuno.divproducto} onClick={hello}>        </div> */}
    <div className={desayuno.btnproducto}>
      <img src={props.imageProd} className={desayuno.imageProd} alt='imagen producto de comida' />
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  </div>
  )
}