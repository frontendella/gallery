import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteItem) => {},
    removeFavorite: (itemId) => {},
    itemIsFavorite: (itemId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites,setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteItem) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteItem)
            
            
        });
        
        // useEffect(() => {
        //     localStorage.setItem(userFavorites, JSON.stringify(userFavorites))
        // }, [userFavorites])
    }


    function removeFavoriteHandler(itemId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(item => item.id !== itemId )
        });

    }

    function itemIsFavoriteHandler(itemId) {
        return userFavorites.some(item => item.id === itemId)
    }


    const context ={
        favorites: userFavorites,
        totalFavorites: userFavorites.length, 
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>

}

export default FavoritesContext;