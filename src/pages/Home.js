import { Link, Outlet } from "react-router-dom";
import Tile from "../components/Tile";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="headerContent">
          <h2 className="headerContentTitle">Gutenberg Project</h2>
          <p className="headerContentDesc">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </p>
        </div>
      </div>
      <div className="homeBody">
        <div className="homeBodyItem">
          <Tile title="Fiction" img="../../images/Fiction.svg" />
          <Tile title="Philosophy" img="../../images/Philosophy.svg" />
          <Tile title="Drama" img="../../images/Drama.svg" />
          <Tile title="History" img="../../images/History.svg" />
          <Tile title="Humour" img="../../images/Humour.svg" />
          <Tile title="Adventure" img="../../images/Adventure.svg" />
          <Tile title="Politics" img="../../images/Politics.svg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
