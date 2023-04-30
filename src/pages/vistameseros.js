import Foot from "./footer"
import Nav from "./header"
import Linksnavegacion from "./linksnavegacion"
import MenuDesayuno from "./menudesayuno"
import TakeOrders from "./takeorder"

export default function VistaMesero () {
    return(
        <div>
        <Nav></Nav>
        <Linksnavegacion></Linksnavegacion>
        <MenuDesayuno></MenuDesayuno>
        <TakeOrders></TakeOrders>
         <h1>Aqui va lo que pueden ver los meseros</h1>
         <Foot></Foot>
                
       
        </div>
    )
}