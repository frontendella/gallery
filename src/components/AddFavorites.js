import { useContext } from "react";
import { FavoritesContext } from "../context/favorites-context";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
} from "../context/favorites-context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
    <div onClick={() => toggleFavoriteStatusHandler(props)}>
      {itemIsFavorite ? (
        <AiFillHeart size={30} color="#e56a77" />
      ) : (
        <AiOutlineHeart size={30} />
      )}
    </div>
  );
};

export default AddFavorites;
