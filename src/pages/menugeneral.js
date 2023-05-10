import menugeneral from "../styles/menugeneral.module.css";
import MenuAlmuerzo from "./menualmuerzo";
import { useState, useEffect } from "react";
import axios from "axios";
import MenuDesayuno from "./menudesayuno";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5qYW5ldGN1bXBhQGdtYWlsLmNvbSIsImlhdCI6MTY4MzMzOTg3MCwiZXhwIjoxNjgzMzQzNDcwLCJzdWIiOiIzIn0.-dzkidvhWWh0cUmc7oF5VtfC8ghqn0wPEbMr6y-rMFI";
export default function MenuGeneral() {
  const [dataProducts, setdataProducts] = useState([]); // useState: permite agregar una variable de estado a su componente
    // console.log(dataProducts);
  // Usamos useEffect para sincronizar la Api con axios. Se llama en el nivel superior del componente
  // Se lanza despues del primer renderizado, luego se cargan los elementos
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/products",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((Response) => {
      setdataProducts(Response.data);
    });
  }, []);   // Si le pongo una dependencia a UseEffect, se va a volver a lanzar useEffect
  return (
    <div>
      <h2 className={menugeneral.title}>Desayuno</h2>
      <div className={menugeneral.containerMenu}>
        {dataProducts
          .filter((item) => item.type === "Desayuno")
          .map((item) => {
            return (
              <MenuDesayuno
                key={item.id}
                name={item.name}
                price={item.price}
                imageProd={item.image}
                type={item.type}
              />
            );
          })}
      </div>
      <h2 className={menugeneral.title}>Almuerzo</h2>
      <section className={menugeneral.containerMenu}>
        {dataProducts
          .filter((item) => item.type === "Almuerzo")
          .map((item) => {
            return (
              <MenuAlmuerzo
                key={item.id}
                name={item.name}
                price={item.price}
                imageProd={item.image}
                type={item.type}
              />
            );
          })}
      </section>
    </div>
  );
}
