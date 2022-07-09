import { useContext, useEffect } from "react";
import ImagesList from "./ImagesList";
import FavoritesContext from "../store/favorites-context";
import AddFavorites from "../components/AddFavorites";
import OneItem from "./OneItem";
import FavoritesContextProvider from "../store/favorites-context"

function Favorites() {
 

  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p> You got no favorites yet. Start adding some?</p>;
  } else {
    content = <ImagesList items={favoritesCtx.favorites} category="Favorites" />;
  }

  return (
    <>
      {content}
     
    </>
  );
}

export default Favorites;
