import React, { useState, useEffect, useContext, createContext } from "react";
import "../styles/images.css";
import "../styles/favorites.css";
// import FavoritesContext from "../store/favorites-context";
import ImagesList from "./ImagesList";
import { useFetch } from "./useFetch";

const Books = (category, number) => {
  // const favoritesCtx = useContext(FavoritesContext);
  // const itemIsFavorite = favoritesCtx.itemIsFavorite();

  // function toggleFavoriteStatusHandler(item) {

  //   if (itemIsFavorite) {
  //     favoritesCtx.removeFavorite(item.id);
  //   } else {
  //     favoritesCtx.addFavorite({
  //       id: item.id,
  //       title: item.title,
  //       image: item.image,
  //     });

  //   }
  // }

  return <ImagesList category="Books" number="2" />;
};

export default Books;
