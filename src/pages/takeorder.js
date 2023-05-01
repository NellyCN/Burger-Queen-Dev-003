import TakeOrder from "../styles/take.order.module.css";
import Nav from "./nav";
import MenuVistas from "./menuvistas";
import Link from "next/link";
import Footer from "./footer";

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
        </div>
        <div classname={TakeOrder.containerDetailOrders}>
          aqui va el detalle del pedido
        </div>

        <div classname={TakeOrder.resumeOrders}>
          <div className={TakeOrder.lineResumeOrders}></div>
          <div className={TakeOrder.labelResumeOrders}>
            <p>Sub-Total </p>
            <p>IGV</p>
            <p>Total Pedido</p>
          </div>
          <div className={TakeOrder.dataLabelResumeOrders}>
            <p>$ 0.00</p>
            <p>$ 0.00</p>
            <p className={TakeOrder.totalprice}>$ 0,000.00</p>
          </div>
        </div>
        <div>
          <button className={TakeOrder.button1}>Cancelar Pedido</button>
          <Link href="/menuvistas" className={TakeOrder.button}>Enviar Pedido a Cocina</Link>
        </div>
      </div>
    <Footer></Footer>
    </>
  );
}
