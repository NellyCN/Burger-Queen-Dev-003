import Image
    from "next/image"
import nav from '../styles/nav.module.css'

export default function Nav() {
    return (
        <div className={nav.containerHeader}>
            <Image className={nav.imagenheader} alt="imagen de hamburguesa" src={require('../images/logoheader.png')} />
            <header>
                <h1 className={nav.titulomenu} >Burger Queen</h1>
            </header>
        </div>
    )
}