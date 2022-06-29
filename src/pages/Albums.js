import React, { useState, useEffect } from "react";
import "../styles/images.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/favorites.css"

function Albums() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((json) => {
        const data = json.map((elem) => {
          const imageUrl = `https://api.lorem.space/image/album?w=150&h=220&hash=${elem.id}`;
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
        // console.log(json);
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
      <h1 className="header__title">Albums</h1>
      {error && <p>Error!: {error.message}</p>}
      <main className="container">
      <div className="items-list" data-style="cards">
        {data.map((d) => (
            
            <div className="items-list__item item">
              <img className="item__img" src={d.image} 
              />
              <div className="item__info">
              <div className="caption">

              <h6 className="item__name text--center">{d.title}</h6>
              <div className="item__description">Statham stars as Arthur Bishop, a professional assassin who specializes in making his hits look like accidents, suicides, or the acts of petty criminals.</div>
              <p className=" heart d-inline-block"> ❤️ </p>
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

export default Albums;