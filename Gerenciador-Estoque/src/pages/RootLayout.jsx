import { Link, Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
      <>
        <header>
          <Link to="/" className="logo">REACT ESTOQUE</Link>
          <nav>
            <Link to="/"><button className="button">Início</button></Link>
            <Link to="/itens"><button className="button">Itens</button></Link>
          </nav>
        </header>
        <Outlet />
        <footer>
          <h5>Feito por Felipe</h5>
        </footer>
      </>
    );
  }
  