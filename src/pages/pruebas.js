import pruebas from '../styles/pruebas.module.css'
export default function Pruebas() {
    return (
        <>
            <h1 className={pruebas.title}> hola</h1>
            <div className='inputcontainer'>
                <input className={pruebas.name}
                    required=''
                    type='text'
                    autoComplete='off'
                    placeholder='nombre cliente'
                />
                <div>
                    <div className={pruebas.divproducto}>
                        <button className={pruebas.btnproducto1} />
                        <button className={pruebas.titleproducto}> Agregar</button>

                    </div>
                </div>

            </div>
        </>
    )
}