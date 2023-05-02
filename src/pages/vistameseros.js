import Foot from "./footer"
import Nav from "./header"
import Linksnavegacion from "./linksnavegacion"
import MenuAlmuerzo from "./menualmuerzo"
import MenuDesayuno from "./menudesayuno"
import TakeOrders from "./takeorder"
//dar estilo a esta hoja para mostrar componentes lado a lado?
export default function VistaMesero() {
    return (
        <div>
            <Nav></Nav>
            <Linksnavegacion></Linksnavegacion>
            {/* o  inline block? */}
            <div style={{ display: 'flex' }} className="body2Container"> 
                <div style={{ display: 'flex' }} className="body1Container">
                    <MenuDesayuno></MenuDesayuno>
                    <MenuAlmuerzo></MenuAlmuerzo>
                </div>
                <TakeOrders></TakeOrders>
            </div>
            {/* <h1>Aqui va lo que pueden ver los meseros hu2</h1> */}
            <Foot></Foot>


        </div>
    )
}