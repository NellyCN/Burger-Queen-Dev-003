import MenuAlmuerzo from "./menualmuerzo"
// import MenuDesayuno from "./menudesayuno"
import { useState, useEffect } from "react"
import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5qYW5ldGN1bXBhQGdtYWlsLmNvbSIsImlhdCI6MTY4MzIxMjQ4NiwiZXhwIjoxNjgzMjE2MDg2LCJzdWIiOiIzIn0.yGrL6iSapzb8v1ggOb2x5mLvZ86eibMJ-tVzgKcQ6hw";
export default function MenuGeneral() {
const [dataProducts, setdataProducts] = useState([])
useEffect(() =>{
axios({
    method: "GET",
    url: "http://localhost:8080/products",
    headers: {
        Authorization: `Bearer ${token}` 
    }
})
.then(Response =>{
    setdataProducts(Response.data)
})

})
    return (
        <div>
         {
            dataProducts.map(item =>{ 
                return (
                    <>
                    <MenuAlmuerzo
                    name ={item.name}
                    price ={item.price}
                    imageProd ={item.image}                    
                    />
                    </>

                )
            })
         }
        </div>
    )
}