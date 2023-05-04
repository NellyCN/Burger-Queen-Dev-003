import Footer from "../styles/footer.module.css";
import Link from "next/link";

export default function Foot() {
  return (
    <>
      <div className={Footer.containerButtons}>
        <div className={Footer.buttonsFooterContainer}>
          {/* <button className={Footer.button1}>Clientes</button> */}
          <Link href="/vistacocina" className={Footer.button1}>Revisar Estado de Pedidos</Link>
        </div>
        <div className={Footer.copy}>
            <p>Copyright © 2023 Natalia Aspee & Nelly Cumpa</p>
            <p>A Project Built with Next.js</p>        
        </div>
      </div>  
    </>
  );
}
