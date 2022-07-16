import { FavoritesContext } from "../context/favorites-context";
import { useContext } from "react";
import AddFavorites from "../components/AddFavorites";
import "../styles/images.css";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <h1 className="header__title"> Favorites </h1>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((item) => (
            <div>
              <img
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
                <div>
                  <h6>{item.title}</h6>

                  <div>
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
    </div>
  );
};
