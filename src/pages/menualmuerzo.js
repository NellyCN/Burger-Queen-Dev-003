import Almuerzo from '../styles/almuerzo.module.css'
//agregar keys id?
// productos deben tener 
//"id"
// "name":
// "price":
// "image":
// "type":
// "dateEntry":
function hello() {
  console.log("Click yo");
}


export default function MenuAlmuerzo(props) {
  return (
    <div>
      {/* className={Almuerzo.containerMenu} */}
      {/* <div className={Almuerzo.divproducto} onClick={hello}>        </div> */}
      <div className={Almuerzo.btnproducto}>
        <img src={props.imageProd} className={Almuerzo.imageProd} alt='imagen producto de comida' />
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.type}</p>
      </div>
    </div>
  )
}