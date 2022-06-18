import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
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

let imgUrl = [

 'https://api.lorem.space/image/movie?w=150&h=220&hash=8B7BCDC2',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=500B67FB',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=A89D0DE6',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=9D9539E7',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=BDC01094',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=7F5AE56A',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=4F32C4CF',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=B0E33EF4',
 'https://api.lorem.space/image/movie?w=150&h=220&hash=2D297A22',
]


useEffect(() => {
  
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((json) => 
      json.map((elem, index) => ({
        id: elem.id,
        title: elem.title,
        image: imgUrl.forEach((one, index, array) => {
          return array[index]
        })
}))

    )

    .then((finalData) => {
      setError(undefined);
      setData(finalData);
    })
    .catch((e) => {
      console.error('Errors: ', e);
      setError(e);
    });
}, []);



  return (
    <div>
      {error && <p>Error!: {error.message}</p>}
      
      {data.map((d) => (
        <div
          key={d.id}
          style={{ display: "inline-block", border: "1px solid black", margin: "10px"}}
        >
         
          <img src={d.image}/>
          <p>{d.title}</p>
          </div>
          ))}
          
   </div>
   
  );
}

