import { useContext, useState, useEffect } from "react";
// import FavoritesContext from "../store/favorites-context";
import ImagesList from "./ImagesList";
import "../styles/favorites.css";
import "../styles/images.css";
import AddFavorites from "../components/AddFavorites";



const OneItem = (props) => {
  const { id, title, image } = props;
  // const AddFavorites = props.AddFavorites;

  return (
    <div>
      {/* {error && <p>Error!: {error.message}</p>} */}
      
      <main className="">
        <div className="items-list" data-style="cards">
          <div key={id} className="items-list__item item">
            <img
              key={id}
              className="item__img"
              src={image}
              // onClick={handlerIcon}
              alt={title}
            />
            
            <AddFavorites key={id} image={image} id={id} title={title} />

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
        </div>
      </main>
    </div>
  );
};

export default OneItem;
