import menugeneral from "../styles/menugeneral.module.css"
import MenuAlmuerzo from "./menualmuerzo"
import { useState, useEffect } from "react"
import axios from "axios"
import MenuDesayuno from "./menudesayuno";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZGFAZ21haWwuY29tIiwiaWF0IjoxNjgzMjQyMzIyLCJleHAiOjE2ODMyNDU5MjIsInN1YiI6IjMifQ.eUdwLZ7vkel2OXdS6EKej8-7oIP7JE9SIKsIOvHkXSg";
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
      <div className={menugeneral.containerMenu}>
        <h2 className={menugeneral.title}>Desayuno</h2>
        {
          dataProducts
            .filter(item => item.type === "Desayuno")
            .map(item => {
              return (
                <>
                  <MenuDesayuno
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    imageProd={item.image}
                    type={item.type}
                  />
                </>

              )
            })
        }
      </div>
      <section className={menugeneral.containerMenu}>
        <h2 className={menugeneral.title}>Almuerzo</h2>
        {
          dataProducts
            .filter(item => item.type === "Almuerzo")
            .map(item => {
              return (
                <>
                  <MenuAlmuerzo
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    imageProd={item.image}
                    type={item.type}
                  />
                </>

              )
            })
        }
      </section>
    </div>
  )
}