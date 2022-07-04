import React, { useState, useEffect } from "react";

export const useFetch = (address) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const type="https://api.lorem.space/image/book?w=150&h=220&hash=$"


    const fetchData = async () => {

     await fetch(address)
      .then((res) => res.json())
      .then((json) => {
        const data = json.map((elem) => {
          
          const imageUrl = `${type}${elem.id}`
          
          const newObject = {
            id: elem.id,
            title: elem.title,
            image: imageUrl,
          };
          return newObject;
        });
        return data;
      })

      .then((finalData) => {
        setError(undefined);
        setData(finalData);
      })
      .catch((e) => {
        console.error("Errors: ", e);
        setError(e);
      });
    }

    useEffect(() => {
        fetchData();
  }, [address]);


  return {data}

}

