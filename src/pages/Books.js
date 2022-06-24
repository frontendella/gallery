import React, { useState, useEffect } from "react";
import "../styles/images.css"

function Books() {

  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
      .then((res) => res.json())
      .then((json) => {
        const data = json.map((elem, index) => {
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
        console.log(json);
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
    <div className='wrapper'>
      <h1>Books</h1>
      {error && <p>Error!: {error.message}</p>}

{data.map((d) => (
  <div className="container"
    key={d.id}
    style={{
      display: 'inline-block',
      border: '1px solid black',
      margin: '10px',
    }}
  >
    <div className="card">
    <img className="image" src={d.image} />
    <p className="caption">{d.title}</p>
    </div>
  </div>
))}
</div>
  )
}




export default Books