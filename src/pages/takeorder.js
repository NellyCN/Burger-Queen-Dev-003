import TakeOrder from "../styles/takeorder.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import OrderByProduct from "./orderByProduct";
// import { useContext } from "react";
// import { PropTypes } from "prop";
// import TotalContext '../';

export default function TakeOrders() {
  const [dataOrders, setdataOrders] = useState([]);

  let arrayOrders = []; //
  let obj1 = {
    name: "Café Americano",
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
  arrayOrders.push(obj1,obj2);
  useEffect(() => {
  setdataOrders(arrayOrders);
}, []);

  return (
    <>
      <div className={TakeOrder.containerOrders}>
        <div className={TakeOrder.containerOrdersHeader}>
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
        </div>
        <div className={TakeOrder.lineResumeOrders}></div>
        <div className={TakeOrder.containerDetailOrders}>
          <p>Precio</p> <p>Cantidad</p> <p>Total</p>
        </div>
        {/* <div className={TakeOrder.detailProductscontainer}>
            <p className={TakeOrder.nameProduct}>sandwich</p>
            <p className={TakeOrder.subTotalProduct}>1000</p>
            <p className={TakeOrder.quantityProduct}>2</p>
            <p className={TakeOrder.subTotalProduct}>2000</p>
            <Image className={TakeOrder.imageTrash} alt="trash image" src={require('src/images/trash2.png')} />
        </div>
        <div className={TakeOrder.detailProductscontainer}>
            <p className={TakeOrder.nameProduct}>te</p>
            <p className={TakeOrder.subTotalProduct}>500</p>
            <p className={TakeOrder.quantityProduct}>3</p>
            <p className={TakeOrder.subTotalProduct}>1500</p>
            <Image className={TakeOrder.imageTrash} alt="trash image" src={require('src/images/trash2.png')} />
        </div> */}
        {
          dataOrders.map(item => {
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
          })
        }
        {


        }


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
