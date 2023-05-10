import OrderByProduct from "@/pages/orderByProduct";
import TakeOrder from "../styles/takeorder.module.css";
import { useEffect, useState } from "react";


export default function TotalPedido(props) {
    // const [subTotal, setSubTotal] = useState([]);
    
    // const subTotalProduct = 0;
    
    // let sumSubTotalOrder = subTotal.reduce((subTotal, subTotalProduct) => {
    //     subTotal += subTotalProduct; 
    //     return subTotal;
        
    // }, 0);
    let TotalOrder = 1700
    let sumSubTotalOrder = (TotalOrder/1.18);
    let igvTotalOrder = TotalOrder - sumSubTotalOrder;
    
    // subTotal.map(obj);
    // useEffect(() => {
    //     setSubTotal(subTotal);
    // }, []);

    return (
        <div key={props.id}>
            <div className={TakeOrder.dataLabelResumeOrders}>
                <p>{sumSubTotalOrder.toFixed(2)}</p>
                <p>{igvTotalOrder.toFixed(2)}</p>
                <p>{TotalOrder.toFixed(2)}</p>
            </div>
        </div>
    );
}