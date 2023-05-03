import TakeOrder from "../styles/takeorder.module.css";
import Link from "next/link";

export default function TakeOrders() {
  return (
    <>
      <div className={TakeOrder.containerOrders}>
        <div className={TakeOrder.containerOrdersHeader}>
          <p>PEDIDO Nº </p>
          <p>Mesero :</p>
          <p>Cliente :</p>
          <p>Hora Pedido:</p>
        </div>
        <div className={TakeOrder.lineResumeOrders}></div>
        <div className={TakeOrder.containerDetailOrders}>
          <p>Precio Cantidad Total</p>
        </div>
        <div className={TakeOrder.lineResumeOrders}></div>
        <div className={TakeOrder.resumeOrders}>
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
        <div className={TakeOrder.buttonsContainer}>
          <button className={TakeOrder.button1}>Cancelar Pedido</button>
          <Link href="/vistacocina" className={TakeOrder.button}>
            Enviar Pedido a Cocina
          </Link>
        </div>
      </div>
    </>
  );
}
