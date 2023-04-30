import TakeOrder from "../styles/toma.pedido.resumen.module.css";
import Nav from './nav'
import MenuVistas from './menuvistas'

//usar Link de next
export default function TakeOrders() {
  return (
    <>
    <Nav></Nav>
    <MenuVistas></MenuVistas>
    <div className={TakeOrder.containerOrders}>
      <div classname="containerOrdersHeader">
       <p>PEDIDO Nº </p>
        <p>Mesero :</p>
        <p>Cliente :</p>
        <p>Hora Pedido:</p>
        <p>-----------------------------------------------------</p>
      </div>
      <div classname="containerDetailOrders">aqui va el detalle del pedido</div>

      <div classname="containerResumeOrders">
          <div className={TakeOrder.lineResumeOrders}>
            <p>-----------------------------------------------------</p>
          </div>
          <div classname={TakeOrder.containerResumeOrder}>
              <div className={TakeOrder.labelResumeOrders}>
                <p>Sub-Total </p>
                <p>IGV</p>
                <p>Total Pedido</p>
              </div>
              <div className={TakeOrder.dataLabelResumeOrders}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
          </div>
      </div>
      <div classname="containerButtonsOrders">

            <button classname={TakeOrder.cancelOrder}>Cancelar Pedido</button>
            <button classname={TakeOrder.sendOrder}>Enviar Pedido a Cocina</button>
    
      </div>
    </div>
    </>
  );
}
