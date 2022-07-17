import { useContext } from "react";
import { FavoritesContext } from "../context/favorites-context";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
} from "../context/favorites-context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import favorites from "../styles/favorites.css";

const AddFavorites = (props) => {
  const { favorites, addFavoriteHandler, removeFavoriteHandler } =
    useContext(FavoritesContext);
  let itemIsFavorite = favorites.find((item) => item.id === props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      removeFavoriteHandler(props);
    } else {
      addFavoriteHandler({
        id: props.id,
        title: props.title,
        image: props.image,
      });
    }
  }

  return (
    <div
      className="toggelFavorite"
      onClick={() => toggleFavoriteStatusHandler(props)}
    >
      {itemIsFavorite ? (
        <AiFillHeart
          size={50}
          color="#e56a77"
          style={{
            stroke: "black",
            strokeWidth: 35,
          }}
        />
      ) : (
        <AiOutlineHeart
          size={50}
          style={{
            stroke: "red",
            strokeWidth: 20,
          }}
        />
      )}
    </div>
  );
};

export default AddFavorites;
