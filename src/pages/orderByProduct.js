import TakeOrder from "../styles/takeorder.module.css";
import Image from "next/image";


export default function OrderByProduct(props) {
    console.log(props);
    let subTotalProduct = props.price*props.quantityProduct;

    return (
        <div key={props.id}>
            <div className={TakeOrder.detailProductscontainer}>
                <p className={TakeOrder.nameProduct}>{props.name}</p>
                <p className={TakeOrder.priceProduct}>{props.price}</p>
                <p className={TakeOrder.quantityProduct}>{props.quantityProduct}</p>
                <p className={TakeOrder.subTotalProduct}>{subTotalProduct}</p>
                <Image className={TakeOrder.imageTrash}
                    alt="trash image" src={require("src/images/trash2.png")} />
            </div>
        </div>
    );
}
