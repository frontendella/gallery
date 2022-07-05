import { useState, useContext, useEffect } from "react";
import ImagesList from "./ImagesList";

const OneItem = ({ id, title, image }) => {
  return (
    <div>
      <h1 className="header__title"> {category}</h1>
      {/* {error && <p>Error!: {error.message}</p>} */}
      <main className="container">
        <div className="items-list" data-style="cards">
          <div key={id} className="items-list__item item">
            <img
              className="item__img"
              src={image}
              onClick={handleShow}
              alt={title}
            />
            <i
              style={
                ıconStatus ? { color: "rgb(207, 5, 5)" } : { color: "black" }
              }
              className={
                ıconStatus
                  ? "heartIcon bi bi-heart-fill"
                  : "hidden heartIcon bi bi-heart-fill"
              }
              onClick={handlerIcon}
            ></i>
            <div className="item__info">
              <div className="caption">
                <h6 className="item__name text--center">{title}</h6>
                <div className="item__description">
                  Statham stars as Arthur Bishop, a professional assassin who
                  specializes in making his hits look like accidents, suicides,
                  or the acts of petty criminals.
                </div>
              </div>
            </div>
            <div></div>
          </div>
          //{" "}
        </div>
      </main>
    </div>
  );
};
