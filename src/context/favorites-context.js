import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

export const FavoritesContext = createContext(initialState);

export const FavoritesContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);

  function addFavoriteHandler(id) {
    dispatch({ type: "ADD_ITEM_TO_FAVORITES", payload: id });
  }

  function removeFavoriteHandler(id) {
    dispatch({ type: "REMOVE_ITEM_FROM_FAVORITES", payload: id });
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        addFavoriteHandler,
        removeFavoriteHandler,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
