import Foot from "./footer"
import Nav from "./header"
import Linksnavegacion from "./linksnavegacion"
import MenuGeneral from "./menugeneral"
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
                    <MenuGeneral></MenuGeneral>
                </div>
                <TakeOrders></TakeOrders>
            </div>
            <Foot></Foot>


        </div>
    )
}