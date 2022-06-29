import React, { useState, useEffect, useContext } from "react";
import "../styles/images.css";
import "../styles/favorites.css"
import FavoritesContext from "../store/favorites-context";


function Books(d) {
  const favoritesCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoritesCtx.itemIsFavorite(d.id)


  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(d.id)
    }
      else {
        favoritesCtx.addFavorite({
          id: d.id,
          title: d.title,
          description: d.description,
          image: d.image, 
          address: d.address
        })
      }
  }

  

  const [data, setData] = useState([]);
  const [error, setError] = useState();


  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
      .then((res) => res.json())
      .then((json) => {
        const data = json.map((elem) => {
          const imageUrl = `https://api.lorem.space/image/book?w=150&h=220&hash=${elem.id}`;
          const newObject = {
            id: elem.id,
            title: elem.title,
            image: imageUrl,
          };
          return newObject;
        });
        return data;
      })
      .then((json) => {
        // (json);
        return json;
      })
      .then((finalData) => {
        setError(undefined);
        setData(finalData);
      })
      .catch((e) => {
        console.error("Errors: ", e);
        setError(e);
      });
  }, []);
  return (
    <div>
      <h1 className="header__title">Books</h1>
      {error && <p>Error!: {error.message}</p>}
      <main className="container">
      <div className="items-list" data-style="cards">
        {data.map((d) => (


              
                <div className="items-list__item item">
                <img className="item__img" src={d.image} 
                />
                <button onClick={toggleFavoriteStatusHandler}className=" heart d-inline-block"> ❤️ </button>
                <div className="item__info">
                <div className="caption">
                
                <h6 className="item__name text--center">{d.title}</h6>
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
  );
}

export default Books;
