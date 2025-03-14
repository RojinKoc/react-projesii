import { useState } from "react";
import { pizzas } from "../data.js";

export default function Events() {
  const [index, setIndex] = useState(0); // İlk pizza ile başlat
  const pizza = pizzas[index] || pizzas[0]; // Geçersiz index'leri önlemek için
  const [showMore, setShowMore] = useState(false);

  function handlePreviousClick() {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  }

  function handleNextClick() {
    setIndex((prevIndex) => Math.min(pizzas.length - 1, prevIndex + 1));
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary me-2"
        onClick={handlePreviousClick}
        disabled={index === 0} // İlk pizzadaysa devre dışı bırak
      >
        Previous
      </button>

      <button
        className="btn btn-primary"
        onClick={handleNextClick}
        disabled={index === pizzas.length - 1} // Son pizzadaysa devre dışı bırak
      >
        Next
      </button>

      {pizza && (
        <div className="card" style={{ width: "400px" }}>
          <img
            src={"/" + pizza.image} // Resim yolunu düzelttik
            alt="pizza"
            className="card-img-top p-2 p-md-3 border-bottom"
          />
          <div className="card-body">
            <h2 className="card-title">
              {pizza.title}{" "}
              <button className="btn btn-link p-0" onClick={handleMoreClick}>
                {showMore ? "△" : "▽"}
              </button>{" "}
            </h2>
            {showMore && (
              <p className="card-description">{pizza.description}</p>
            )}
            <span className="badge text-bg-primary bg-dark">
              {pizza.price} TL
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
