import React, { useState, useEffect, useContext } from "react";

// import FavoritesContext from "../store/favorites-context";
import ImagesList from "./ImagesList";


const Movies = (category, number) => {
  

  return (
    <ImagesList category="Movies" number="3" imageName="movie"/>

  );
}

export default Movies;
