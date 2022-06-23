import "../App.css";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Movies from "../pages/Movies";
import Books from "../pages/Books";
import Albums from "../pages/Albums";

// import Header from './Header'
// import Footer from './Footer'
// import Content from './Content'
// import Popup from './Popup'
// import {cardList} from '../Images.js'
// import Fetch from './Fetch';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  // const [selectedCard, setSelectedCard] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const closePopup = () => {
  //   setSelectedCard(null)
  // }

  // const handleCardClick = (card, i) => {
  //   setSelectedCard(card)
  //   setInd(i)
  // }

  // const [ind, setInd] = useState(null)

  // const handlePrevCard = () => {
  //   setSelectedCard(cardList[ind - 1])
  //   setInd(ind - 1)
  // }

  // const handleNextCard = () => {
  //   setSelectedCard(cardList[ind + 1])
  //   setInd(ind + 1)
  // }


  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      // .then((json) => console.log(json))
      .then((json) => {
        const data = json.map((elem, index) => {
          const imageUrl = `https://api.lorem.space/image/movie?w=150&h=220&hash=${elem.id}`;
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
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Favorites />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/books' element={<Books />} />
          <Route path='/albums' element={<Albums />} />
        </Routes>
      </Router>
      {error && <p>Error!: {error.message}</p>}

      {data.map((d) => (
        <div
          key={d.id}
          style={{
            display: 'inline-block',
            border: '1px solid black',
            margin: '10px',
          }}
        >
          <img src={d.image} />
          <p>{d.title}</p>
        </div>
      ))}
    </div>
  );
}
