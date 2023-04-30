import Footer from "../styles/footer.module.css";

export default function Foot() {
  return (
    <>
      <div className={Footer.containerButtons}>
        <div>
          <button className={Footer.button1}>Clientes</button>
          {/* <Link href="/menuvistas" className={Footer.button1}>Revisar Estado de Pedidos</Link> */}
        </div>
        <div className={Footer.copy}>
            <p>Copyright © 2023 Natalia Aspee & Nelly Cumpa</p>
            <p>A Project Built with Next.js</p>        
        </div>
      </div>  
    </>
  );
}


// import tomapedidodetalle from "../styles/toma.pedido.detalle.module.css";

// //usar Link de next
// export default function TomaPedidoDetalle() {
//   return (
//     <div className={tomapedidodetalle.containerOrders}>
//       <section classname="containerOrdersHeader">
//         <p>PEDIDO Nº </p>
//         <p>Mesero :</p>
//         <p>Cliente :</p>
//         <p>Hora Pedido:</p>
//         <p>-----------------------------------------------------</p>
//       </section>
//       <section classname="containerDetailOrders">aqui va el detalle del pedido</section>
//       <section classname="containerResumeOrders">
//         <p>-----------------------------------------------------</p>
//         <p>Sub-Total </p>
//         <p>IGV</p>
//         <p>Total Pedido</p>
//       </section>
//       <section classname={tomapedidodetalle.containerButtonsOrders}>
//         <button>Cancelar Pedido</button>
//         <button>Enviar Pedido a Cocina</button>
//       </section>
//     </div>
//   );
// }
