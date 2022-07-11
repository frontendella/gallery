import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [], 
  totalFavorites: 0,
};

//create context
export const FavoritesContext = createContext(initialState);



// const FavoritesContext = createContext({
//     favorites: [],
//     totalFavorites: 0,
//     addFavorite: (favoriteItem) => {},
//     removeFavorite: (itemId) => {},
//     itemIsFavorite: (itemId) => {}
// });

export const FavoritesContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites)
     );
  }, [state]);

  const addFavoriteHandler = (id) => {
    dispatch({ type: "ADD_ITEM_TO_FAVORITES", payload: id });
  };

  const removeFavoriteHandler = (id) => {
      dispatch({type: "REMOVE_ITEM_FROM_FAVORITES", payload: id  });
  };


  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        totalFavorites: state.totalFavorites,
        addFavoriteHandler,
        removeFavoriteHandler, 
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );

 
};


