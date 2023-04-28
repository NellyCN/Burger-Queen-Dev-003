import Nav from "./nav"
import Linksnavegacion from "./linksnavegacion"
import MenuDesayuno from "./menudesayuno"

export default function VistaMesero () {
    return(
        <div>
        <Nav></Nav>
        <Linksnavegacion></Linksnavegacion>
        <MenuDesayuno></MenuDesayuno>

                
        <h1>Aqui va lo que pueden ver los meseros</h1>
        </div>
    )
}