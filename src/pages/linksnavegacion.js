import menu from '../styles/menu.module.css'

//usar Link de next
export default function Linksnavegacion() {
    return (
        <div className={menu.containerLinks}>
            <nav className={menu.linksnavegacion}>
                <ul>
                    <li className={menu.lista}>
                        <a className={menu.links} href="http://localhost:3000/"> Administrador</a>
                    </li>
                    <li className={menu.lista}>
                        <a className={menu.links} href="http://localhost:3000/">Mesero</a>
                    </li>
                    <li className={menu.lista}>
                        <a className={menu.links} href="/vistacocina"> Cocina</a>
                    </li>
                </ul>
            </nav>
            <button className={menu.logout} > </button>
        </div>
    )
}