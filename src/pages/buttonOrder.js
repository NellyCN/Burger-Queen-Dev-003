// import React from 'react'
// import Hijo from './Hijo';
// import { Button } from 'semantic-ui-react';
import TakeOrder from '../styles/takeorder.module.css';
import Link from 'next/link';
// import { useState } from 'react';


export default function MessageButtons() {
  return (
    <ButtonsOrders
      sendToCook={() => alert('¡Pedido Enviado con "Éxito"!')}
      cancelOrder={() => alert('Puedes Ingresar un Nuevo Pedido')}

    />
  );
}
function ButtonsOrders({ sendToCook, cancelOrder }) {
  return (
    <div className={TakeOrder.buttonsContainer}>
      <Link href="/vistacocina"  className={TakeOrder.button} onClick={sendToCook}>
        Enviar Pedido a Cocina
      </Link>
      <Button className={TakeOrder.cancelBbutton} onClick={cancelOrder} >
        Cancelar Pedido
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
// Los props solo pueden ser enviados del componente "padre" al componente "hijo"

