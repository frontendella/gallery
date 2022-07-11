import { useContext } from "react";
import ImagesList from "./ImagesList";
import { FavoritesContext } from "../store/favorites-context";
import AddFavorites from "../components/AddFavorites";
import OneItem from "./OneItem";
import "../styles/favorites.css";
import "../styles/images.css";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1 className="header__title"> Favorites </h1>

      {favorites.length > 0 ? (
        <div className="items-list">
          {favorites.map((item) => (
            <div className="items-list__item item">
              <img
                key={item.url}
                id={item.id}
                className="item__img"
                src={item.image}
                // onClick={handlerIcon}
                alt={item.title}
              />
              <AddFavorites
                key={item.url}
                image={item.image}
                id={item.id}
                title={item.title}
              />

              <div className="item__info">
                <div className="caption">
                  <h6 className="item__name text--center">{item.title}</h6>

                  <div className="item__description">
                    Statham stars as Arthur Bishop, a professional assassin who
                    specializes in making his hits look like accidents,
                    suicides, or the acts of petty criminals.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="header__title" > <br/>No movies in your list! Add some!</h2>
      )}
    </div>
  );
};
