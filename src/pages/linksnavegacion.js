import Link from 'next/link'
import menu from '../styles/links.module.css'

//usar Link de next
export default function Linksnavegacion() {
    return (
        <div className={menu.containerLinks}>
            <nav className={menu.linksnavegacion}>
                <ul>
                    <li className={menu.lista}>
                        <Link href="/vistaadministrador" className={menu.links} > Administrador </Link>
                    </li>
                    <li className={menu.lista}>
                        <Link href="/vistameseros" className={menu.links} >Mesero </Link>
                    </li>
                    <li className={menu.lista}>
                        <Link href="/vistacocina" className={menu.links} > Cocina </Link>
                    </li>
                </ul>
            </nav>
            <button className={menu.logout} > Log Out </button>
        </div>
    )
}