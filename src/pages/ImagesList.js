import React, { useContext, useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import OneItem from "./OneItem";
import AddFavorites from "../components/AddFavorites";
import Favorites from "./Favorites";

function ImagesList({ number, imageName, category }) {
  const { data } = useFetch(number, imageName);


  // function handleFavorites(id) {
  //   alert(id);
  // }

  // console.log(data);
  // if (!data.length) return <p>"No data"</p>;

  return (
    <>
      <h1 className="header__title">{category}</h1>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4">
          
         
          {data.map((item) => {
 
            // return <p >{item.title}</p>
  
            return (
              
              <OneItem
                key={item.url}
                id={item.id}
                title={item.title}
                image={item.image}
                // FavoriteComponent = {AddFavorites}
                
              />
              
            );
          })}
        </div>
      }
    </>
  );
}
export default ImagesList;
