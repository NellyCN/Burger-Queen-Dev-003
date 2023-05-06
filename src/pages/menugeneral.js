import menugeneral from "../styles/menugeneral.module.css"
import MenuAlmuerzo from "./menualmuerzo"
import { useState, useEffect } from "react"
import axios from "axios"
import MenuDesayuno from "./menudesayuno";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZGFAZ21haWwuY29tIiwiaWF0IjoxNjgzMzMyNjc5LCJleHAiOjE2ODMzMzYyNzksInN1YiI6IjMifQ.1r4uIACLKq-C5ts_ZXd_2QcHXsXkDnedMA-rl-7xzNI";
export default function MenuGeneral() {
  const [dataProducts, setdataProducts] = useState([])
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/products",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(Response => {
        setdataProducts(Response.data)
      })
  })
  return (
    <div>        
      <h2 className={menugeneral.title}>Desayuno</h2>
      <div className={menugeneral.containerMenu}>

        {
          dataProducts
            .filter(item => item.type === "Desayuno")
            .map(item => {
              return (
                <MenuDesayuno
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imageProd={item.image}
                  type={item.type}
                />


              )
            })
        }
      </div>        
      <h2 className={menugeneral.title}>Almuerzo</h2>
      <section className={menugeneral.containerMenu}>

        {
          dataProducts
            .filter(item => item.type === "Almuerzo")
            .map(item => {
              return (
                <MenuAlmuerzo
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imageProd={item.image}
                  type={item.type}
                />
              )
            })
        }
      </section>
    </div>
  )
}