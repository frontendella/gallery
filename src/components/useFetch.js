import { useState, useEffect } from "react";

export const useFetch = (number, imageName) => {
  const [data, setData] = useState([]);

  const address = `https://jsonplaceholder.typicode.com/albums/${number}/photos`;
  const path = `https://api.lorem.space/image/${imageName}?w=150&h=220&hash=`;

  useEffect(() => {
    const fetchData = async () => {
      await fetch(address)
        .then((res) => res.json())
        .then((json) => {
          const data = json.map((elem) => {
            const imageUrl = `${path}${elem.id}`;
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
          setData(finalData);
        })
        .catch((e) => {
          console.error("Errors: ", e);
        });
    };
    fetchData();
  }, [address, path]);

  return { data };
};
