import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../store/favorites-context";
import ImagesList from "../pages/ImagesList";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Alert } from "react-bootstrap";
// import Favorites from "../pages/Favorites";

const AddFavorites = (props) => {
  const {  favorites, addFavoriteHandler, removeFavoriteHandler } = useContext(FavoritesContext);
  let storedFavorites = favorites.find((o) => o.id === props.id);




  const favoritesListDisabled = storedFavorites ? true : false;

  // const favoritesCtx = useContext(FavoritesContext);
  // const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id)

  // function toggleFavoriteStatusHandler() {
  //     if(itemIsFavorite){
  //       favorites.removeFavoriteHandler(props.id)
  //     } else {
  //       favorites.addFavoriteHandler({
  //         id: props.id,
  //         title: props.title,
  //         image: props.image
  //       })

  //     }

  // }

  return (
    <div>
      <div className="fav">
        {
          <AiFillHeart size={30} color="#e56a77" disabled={favoritesListDisabled}  onClick={() =>  addFavoriteHandler(props)} />
          //  itemIsFavorite ? <AiFillHeart size={30} color="#e56a77"/> : <AiOutlineHeart size={30} />
        }
      </div>
      <div className="remove" >
        {
          <AiFillHeart size={30} color="black" onClick={() => removeFavoriteHandler((props))} />
          //  itemIsFavorite ? <AiFillHeart size={30} color="#e56a77"/> : <AiOutlineHeart size={30} />
        }
      </div>
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
