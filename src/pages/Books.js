import React, { useState, useEffect, useContext, createContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ImagesList from "./ImagesList";
import { useFetch } from "./useFetch";
import OneItem from "./OneItem";

const Books = ( number, imageName, category) => {
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

  return <ImagesList number="2" imageName="book" category="Books" />;
};

export default Books;
