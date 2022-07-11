import { useContext, useState, useEffect } from "react";

import ImagesList from "./ImagesList";
import "../styles/favorites.css";
import "../styles/images.css";
import AddFavorites from "../components/AddFavorites";
import {FavoritesContext} from "../store/favorites-context";


const OneItem = (props) => {
  const { id, title, image, url } = props;
  // const AddFavorites = props.AddFavorites;
  

  return (
    <div>
      {/* {error && <p>Error!: {error.message}</p>} */}
      

        <div className="items-list">
          <div key={url} className="items-list__item item">
            <img
              key={url}
              className="item__img"
              src={image}
              // onClick={handlerIcon}
              alt={title}
            />
            
            <AddFavorites key={id} image={image} id={id} title={title}  />

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

    </div>
  );
};

export default OneItem;
