import TakeOrder from "../styles/takeorder.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import OrderByProduct from "./orderByProduct";
import MessageButtons from "./buttonOrder";
import TotalPedido from "./totales";

export default function TakeOrders(prop) {
  const [dataOrders, setdataOrders] = useState([]);

  let arrayOrders = []; //
  let obj1 = {
    name: "Café ",
    price: 350.0,
    quantityProduct: 2,
    subTotalProduct: 700.0,
  };
  let obj2 = {
    name: "Sandwich",
    price: 1000.0,
    quantityProduct: 1,
    subTotalProduct: 1000.0,
  };
  arrayOrders.push(obj1, obj2);
  useEffect(() => {
    setdataOrders(arrayOrders);
  }, []);

  return (
    <>
      <main key={prop.id} className={TakeOrder.containerOrders}>
        <section className={TakeOrder.containerOrdersHeader}>
          <label htmlFor="mesero" className={TakeOrder.optMesero}>
            Mesero:
          </label>
          <select className={TakeOrder.optturno} name="meseros">
            <option value="Mesero 1"> 1</option>
            <option value="Mesero 2"> 2</option>
            <option value="Mesero 3"> 3</option>
          </select>
          <input
            className={TakeOrder.optMesero}
            type="text"
            required=""
            autoComplete="off"
            placeholder="Ingresa N° de mesa"
          />
          <input
            className={TakeOrder.optMesero}
            type="text"
            required=""
            autoComplete="off"
            placeholder="Ingresa nombre del cliente"
          />
          <p>Hora Pedido:</p>
        </section>
        <div className={TakeOrder.lineResumeOrders}></div>
        <section className={TakeOrder.containerDetailOrders}>
          <p>Producto</p>
          <p>Precio</p> <p>Cantidad</p> <p>Sub-Total</p>
          <p>Eliminar</p>
        </section>
        {dataOrders.map((item) => {
          console.log(item);

          return (
            <OrderByProduct
              key={item.id}
              name={item.name}
              price={item.price}
              quantityProduct={item.quantityProduct}
              subTotalProduct={item.subTotalProduct}
            />
          );
        })}
        <div className={TakeOrder.lineResumeOrders}></div>
        <section className={TakeOrder.resumeOrders}>
          <div className={TakeOrder.labelResumeOrders}>
            <p>Sub-Total </p>
            <p>Impuestos(18%)</p>
            <p>Total Pedido</p>
          </div>
          <TotalPedido />
        </section>
        <MessageButtons />
      </main>
    </>
  );
}
