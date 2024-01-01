import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

export default function Main() {
  return (
    <div className="main">
      <Header />

      <nav>
        <Link to="">Acceuil</Link>
        <Link to="country-list">Liste de Pays</Link>
        <Link to="add-country">Ajouter un Pays</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
