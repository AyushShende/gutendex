import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardContainer">
        <img
          className="cardImg"
          src="https://images-na.ssl-images-amazon.com/images/I/6156MReb60L.jpg"
          alt=""
        />
        <div className="cardText">
          <h3 className="cardTextHeading">{props.name}</h3>
          <p className="cardTextDesc">{props.author}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
