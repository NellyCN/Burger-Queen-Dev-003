import takeorder from "../styles/takeorder.module.css";

export default function TakeOrders() {
  return (
    <>
    <div className={takeorder.containerOrders}>
      <div className="containerOrdersHeader">
       <p>PEDIDO Nº </p>
        <p>Mesero :</p>
        <p>Cliente :</p>
        <p>Hora Pedido:</p>
        <p>-----------------------------------------------------</p>
      </div>
      <div className="containerDetailOrders">aqui va el detalle del pedido</div>

      <div className="containerResumeOrders">
          <div className={takeorder.lineResumeOrders}>
            <p>-----------------------------------------------------</p>
          </div>
          <div className={takeorder.containerResumeOrder}>
              <div className={takeorder.labelResumeOrders}>
                <p>Sub-Total </p>
                <p>IGV</p>
                <p>Total Pedido</p>
              </div>
              <div className={takeorder.dataLabelResumeOrders}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
          </div>
      </div>
      <div className="containerButtonsOrders">

            <button className={takeorder.cancelOrder}>Cancelar Pedido</button>
            <button className={takeorder.sendOrder}>Enviar Pedido a Cocina</button>
    
      </div>
    <Footer></Footer>
    </>
  );
}
