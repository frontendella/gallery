import React, { useState, useEffect, useContext} from "react";
// import FavoritesContext from "../store/favorites-context";
import { useFetch } from "./useFetch"

function ImagesList({category,number}) {
  
  const address = `https://jsonplaceholder.typicode.com/albums/${number}/photos`
  const {data} = useFetch(address)
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

  return (
    <div>
      <h1 className="header__title"> {category}</h1>
      {/* {error && <p>Error!: {error.message}</p>} */}
      <main className="container">
      <div className="items-list" data-style="cards">
      {data.map((item,i) => (        
            
            <div key={i} className="items-list__item item">
              <img className="item__img" src={item.image} 
              />
             
              <div className="item__info" >
              <div className="caption">
              <h6 className="item__name text--center">{item.title}</h6>
              <div className="item__description">Statham stars as Arthur Bishop, a professional assassin who specializes in making his hits look like accidents, suicides, or the acts of petty criminals.</div>
        
              </div>
              </div>
              <div>
              </div>
            </div>
          // </div>
        ))}
      </div>
      </main>
    </div>
  )
        }
      


export default ImagesList