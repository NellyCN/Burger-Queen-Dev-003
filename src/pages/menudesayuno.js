import desayuno from '../styles/desayuno.module.css'
export default function MenuDesayuno() {
  return (
    <div className={desayuno.containerMenu}>
      <h2 className={desayuno.title}>Desayuno</h2>
      <div className={desayuno.containerBtn}>
        <button className={desayuno.btnproducto1} />
        <button className={desayuno.btnproducto2} />
        <button className={desayuno.btnproducto} />
        <button className={desayuno.btnproducto} />
      </div>
    </div>
  )
}