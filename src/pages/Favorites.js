import { FavoritesContext } from "../context/favorites-context";
import { useContext } from "react";
import AddFavorites from "../components/AddFavorites";
import {Card, Button, Badge} from 'react-bootstrap';
import "../styles/images.css";
import { Modal } from "react-bootstrap";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <h1 className="header__title"> Favorites </h1>
      {favorites.length > 0 ? (
        <div className="items-list">
          {favorites.map((item) => (
            <div className="items-list__item item">
              <Card.Img
               className="item__img"
                key={item.url}
                id={item.id}
                src={item.image}
                alt={item.title}
              />
              <AddFavorites
                key={item.url}
                image={item.image}
                id={item.id}
                title={item.title}
              />
              <div>
                <div className="item__name text--center">
                  <h6>{item.title}</h6>

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
        <h2 className="header__title">
          {" "}
          <br />
          No items in your favorite's list! Add some!
        </h2>
      )}
      
 </>
  );
};
