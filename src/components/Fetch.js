import React, { useState, useEffect } from 'react';
import Data from './Data';
const Fetch = () => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos/')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setImage(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Gallery</h1>
      {image && <Data data={image} />}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};
export default Fetch;