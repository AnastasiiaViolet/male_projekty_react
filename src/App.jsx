import React, { useState } from "react";
import "./index.scss";
import Collection from "./Collection";

const cats = [
  { name: "Wszystko" },
  { name: "Morze" },
  { name: "Góry" },
  { name: "Arhitektura" },
  { name: "Miasta" },
];
let count_colections = 0;

function App() {
  const [categoryId, setCategoryId] = useState(0); //0 - to wszystki kategori
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  React.useEffect(() => {
    setIsLoading(true); //gdy wybiramy categorie

    fetch("../public/data.json") //można bylo nie rozdzielać json a prosto  setCollections(json.collections)
      .then((res) => res.json())
      .then((json) => {
        const startIndex = page * 3; //nasz początkoy indeks ,3 oznacza liczbe elementów na page
        const danePage = json.collections.slice(startIndex, startIndex + 3);
        count_colections = Math.ceil(json.collections.length / 3);
        console.log(count_colections);
        //filtrowanie otrzymanych danych na stronie po categorys(jeśli wszystkie to prosto nasza [] z danymi)
        setCollections(
          categoryId
            ? danePage.filter((obj) => {
                return obj.category === categoryId;
              })
            : danePage
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Bląd przy otrzymaniu danych");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId, page]); //robimy rendering gdy zmieniamy categoryId lub page
  return (
    <div className="App">
      <h1>{`Moja kolekcja zdjęć o((>ω< ))o`}</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, index) => (
            <li
              onClick={() => setCategoryId(index)}
              className={categoryId === index ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          // onChange przy podaniu do input zmieniamy searchValue
          className="search-input"
          placeholder="Szukaj według nazwy"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Lodowanie...</h2>
        ) : (
          collections
            .filter((obj) => {
              return obj.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {
          [...Array(count_colections)].map((_, i) => (
            <li
              key={i}
              className={page === i ? "active" : ""}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </li>
          )) //liczbe stron poinien mówić nam back-end
        }
      </ul>
    </div>
  );
}

export default App;
