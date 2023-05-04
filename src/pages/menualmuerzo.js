import Almuerzo from '../styles/almuerzo.module.css'
//agregar keys id?
// productos deben tener 
//"id"
// "name":
// "price":
// "image":
// "type":
// "dateEntry":
export default function MenuAlmuerzo() {
  return (
    <div className={Almuerzo.containerMenu}>
      <h2 className={Almuerzo.title}>Almuerzo</h2>
      <div className={Almuerzo.containerBtn}>
        <div className={Almuerzo.divproducto}>
          <button className={Almuerzo.btnproducto1} />
          {/* <button className={Almuerzo.btnagregarproducto}>Agregar producto</button> */}
        </div>
        <button className={Almuerzo.btnproducto2} />
        <button className={Almuerzo.btnproducto3} />
        <button className={Almuerzo.btnproducto4} />
      </div>
    </div>
  )
}