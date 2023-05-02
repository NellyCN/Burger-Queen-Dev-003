import desayuno from '../styles/desayuno.module.css'
//agregar keys id?
// productos deben tener 
//"id"
// "name":
// "price":
// "image":
// "type":
// "dateEntry":
export default function MenuDesayuno() {
  return (
    <div className={desayuno.containerMenu}>
      <h2 className={desayuno.title}>Desayuno</h2>
      <div className={desayuno.containerBtn}>
        <div className={desayuno.divproducto}>
          <button className={desayuno.btnproducto1} />
          <button className={desayuno.btnagregarproducto}>Agregar producto</button>
        </div>
        <button className={desayuno.btnproducto2} />
        <button className={desayuno.btnproducto3} />
        <button className={desayuno.btnproducto4} />
      </div>
    </div>
  )
}