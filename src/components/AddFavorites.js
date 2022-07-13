import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../store/favorites-context";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
} from "../store/favorites-context";
import ImagesList from "../pages/ImagesList";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Alert } from "react-bootstrap";
// import Favorites from "../pages/Favorites";

const AddFavorites = (props) => {
  const { favorites, addFavoriteHandler, removeFavoriteHandler } =
    useContext(FavoritesContext);

  // const favoritesListDisabled = storedFavorites ? true : false;

  let itemIsFavorite = favorites.find((Object) => Object.id === props.id);

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
{
  /* <AiFillHeart
size={50}
color="#e56a77"

onClick={() => addFavoriteHandler(props)}
/> */
}
