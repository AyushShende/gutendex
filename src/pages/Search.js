import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "./Search.css";

function Search(props) {
  const [books, setBooks] = useState([]);
  let params = useParams();
  let url = "http://skunkworks.ignitesol.com:8000/books/?topic=" + params.genre;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search">
      <div className="searchHeader">
        <div className="searchHeaderContent">
          <div className="searchHeaderTitle">
            <Link className="link" to={"/"}>
              <img src="../../images/Back.svg" alt="" />
            </Link>
            <h2 className="searchHeaderTitleName">{params.genre}</h2>
          </div>
          <div className="searchBoxWrapper">
            <input className="searchBox" type="search" placeholder="Search" />
            <img src="../../images/Search.svg" className="searchIcon" alt="" />
          </div>
        </div>
      </div>
      <div className="searchBody">
        <div className="cardWrapper">
          {books.map((book) => {
            return (
              <Card
                image={`${book.formats.image}/jpeg`}
                name={book.title}
                author={book.authors[0].name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
