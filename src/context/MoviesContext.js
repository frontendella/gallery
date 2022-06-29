// import React, { useState, useEffect } from "react";

// export const MoviesContext = React.createContext();

// const MoviesContextProvider = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [myfavorites, setMyfavorites] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const FavoriList = getMoviesFromStorage();
//     setMyfavorites(FavoriList);
//   }, []);

//   const getMoviesFromStorage = () => {
//     if (localStorage.getItem("myFavoriList")) {
//       let FavoriList = JSON.parse(localStorage.getItem("MyFavoriList"));
//       return FavoriList;
//     } else {
//       let FavoriList = [];
//       return FavoriList;
//     }
//   };


// return (
//     <MoviesContext.Provider value={{ movies, loading, setMovies, setLoading, setMyfavorites ,myfavorites,getMoviesFromStorage }}>
//         {props.children}
//     </MoviesContext.Provider>
// )
// };
// export default MoviesContextProvider;