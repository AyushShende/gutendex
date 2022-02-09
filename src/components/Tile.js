import React from "react";
import { Link } from "react-router-dom";

function Tile(props) {
  return (
    <Link className="link" to={"/search/" + props.title}>
      <div className="tile">
        <div className="ItemWrapper">
          <div className="homeBodyItemTitle">
            <img className="homeBodyItemTitleImg" src={props.img} alt="" />
            <span className="homeBodyItemTitleName">{props.title}</span>
          </div>

          <img src="../../images/Next.svg" alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Tile;
