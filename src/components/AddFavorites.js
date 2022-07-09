import { useContext, useState, useEffect } from "react";
import ImagesList from "../pages/ImagesList"; 
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import FavoritesContext from "../store/favorites-context";


const AddFavorites = (props) => {

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id)

// console.log(itemIsFavorite)
  function toggleFavoriteStatusHandler() {
      if(itemIsFavorite){
        favoritesCtx.removeFavorite(props.id)
      } else {
        favoritesCtx.addFavorite({
          id: props.id,
          title: props.title,
          image: props.image
        })
        
      }

 
  }

  return (
    <>
      <span className="fav" onClick={toggleFavoriteStatusHandler} >{itemIsFavorite ? ( <AiFillHeart size={30} color="#e56a77"/> ) : (<AiOutlineHeart size={30} />) } 
       {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="red"
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>  */}
      
      </span>
    </>
  );
};

export default AddFavorites;
