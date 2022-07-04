import "../App.css";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Movies from "../pages/Movies";
import Books from "../pages/Books";
import Albums from "../pages/Albums";
import {FavoritesContextProvider} from "../store/favorites-context"
// import Header from './Header'
// import Footer from './Footer'
// import Content from './Content'
// import Popup from './Popup'
// import {cardList} from '../Images.js'
// import Fetch from './Fetch';

export default function App() {


  return (
    <FavoritesContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/movies' element={<Movies />} />
          <Route path='/' element={<Favorites />} />
          <Route path='/books' element={<Books />} />
          <Route path='/albums' element={<Albums />} />
        </Routes>
      </Router>

      </FavoritesContextProvider>
    //  {error && <p>Error!: {error.message}</p>

    //   {data.map((d) => (
    //     <div
    //       key={d.id}
    //       style={{
    //         display: 'inline-block',
    //         border: '1px solid black',
    //         margin: '10px',
    //       }}
    //     >
    //       <img src={} />
    //       <p>{d.title}</p>
    //     </div>
    //   ))}}

  );
}
