import React, { useState } from "react";
import { useFetch } from "./useFetch";
import OneItem from "./OneItem";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginationList from "./PaginationList";

function ImagesList({ number, imageName, category, loading }) {
  const { data } = useFetch(number, imageName);

  const [currentImage, setcurrentImage] = useState(1);
  const [imagesPerPage] = useState(12);

  const indexOfLastImage = currentImage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = data.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setcurrentImage(pageNumber);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      <h1 className="header__title">{category}</h1>
      {
        <div className="items-list itemlist">
          {currentImages.map((item) => {
            return (
              <OneItem
                key={item.url}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            );
          })}
        </div>
      }
      <div className="container mt-6">
        <PaginationList
          imagesPerPage={imagesPerPage}
          totalImages={data.length}
          paginate={paginate}
        />
      </div>
    </Container>
  );
}
export default ImagesList;
