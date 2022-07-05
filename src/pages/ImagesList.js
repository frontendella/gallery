import React, { useContext, useState, useEffect } from "react";
// import FavoritesContext from "../store/favorites-context";
import { useFetch } from "./useFetch";
import { MoviesContext } from "../context/MoviesContext";
import OneItem from "./OneItem";

function ImagesList({ category, number }) {
  const { myfavorites, setMyfavorites, getMoviesFromStorage } =
    useContext(MoviesContext);
  const address = `https://jsonplaceholder.typicode.com/albums/${number}/photos`;
  const { data } = useFetch(address);

  // const [showStatus, setShowStatus] = useState(false);
  // const handleShow = () => setShowStatus(true);
  // const handleClose = () => setShowStatus(false);

  // const [ıconStatus, setıconStatus] = useState(false);

  // useEffect(() => {
  //   if (myfavorites.includes(id)) {
  //     setıconStatus(!ıconStatus);
  //   }
  // }, []);

  // const handlerIcon = (e) => {
  //   setıconStatus(!ıconStatus);

  //   if (ıconStatus) {
  //     var index = myfavorites.indexOf(id);
  //     myfavorites.splice(index, 1);
  //     setMyfavorites(myfavorites);

  //     deleteMovieToStorage(id);
  //   } else {
  //     setMyfavorites(myfavorites.concat([id]));

  //     addMovieToStorage(id);
  //   }
  // };

  // const favoritesCtx = useContext(FavoritesContext);

  // const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  // function toggleFavoriteStatusHandler() {
  //   if (itemIsFavorite) {
  //     favoritesCtx.removeFavorite(props.id)
  //   } else {
  //     favoritesCtx.addFavorite(
  //       {
  //         id: props.id,
  //         title: props.title,
  //         image: props.image
  //       }
  //     )
  //   }}

  const deleteMovieToStorage = (id) => {
    const FavoriList = getMoviesFromStorage();
    var index = FavoriList.indexOf(id);
    FavoriList.splice(index, 1);
    localStorage.setItem("myFavoriList", JSON.stringify(FavoriList));
  };
  const addMovieToStorage = (id) => {
    const FavoriList = getMoviesFromStorage();

    FavoriList.push(id);
    localStorage.setItem("myFavoriList", JSON.stringify(FavoriList));
  };

  return (
    <>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4">
          {data.map((item) => {
            // return (
              <OneItem
                // {...item}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            // );
          })}
        </div>
      }
    </>
  );
}
export default ImagesList;
