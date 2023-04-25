import menu from '../styles/menu.module.css'

//usar Link de next
export default function MenuVistas() {
    return (
        <div className={menu.containerLinks}>
            <nav classname="linksnavegacion">
                <ul>
                    <li>
                        <a href="http://localhost:3000/"> Administrador</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Mesero</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/"> Cocina</a>
                    </li>
                </ul>
            </nav>
            <button> Log Out</button>
        </div>
    )
}