import Foot from "./footer";
import Nav from "./header";
import Linksnavegacion from "./linksnavegacion";

export default function VistaAdministrador() {
  return (
    <div>
      <Nav></Nav>
      <Linksnavegacion></Linksnavegacion>
      <h1> Aqui deberia estar la vista de administrador si fueras admin</h1>
      <Foot></Foot>
    </div>
  );
}
