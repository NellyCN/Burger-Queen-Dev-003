import TakeOrder from "../styles/takeorder.module.css";
import Link from "next/link";

export default function TakeOrders() {
  return (
    <>
      <div className={TakeOrder.containerOrders}>
        <div className={TakeOrder.containerOrdersHeader}>
          <label htmlFor="mesero" className={TakeOrder.optMesero}>Mesero:</label>
          <select className={TakeOrder.optturno} name="meseros">
            <option value="Mesero 1"> 1</option>
            <option value="Mesero 2"> 2</option>
            <option value="Mesero 3"> 3</option>
          </select>
          <input className={TakeOrder.optMesero}
            type="text"
            required=""
            autoComplete="off"
            placeholder="Ingresa N° de mesa"
          />
          <input className={TakeOrder.optMesero}
            type="text"
            required=""
            autoComplete="off"
            placeholder="Ingresa nombre del cliente"
          />

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
