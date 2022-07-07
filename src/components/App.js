import "../App.css";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Movies from "../pages/Movies";
import Books from "../pages/Books";
import Albums from "../pages/Albums";


// import Footer from './Footer'
// import Content from './Content'

export default function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Favorites />} />
          <Route path="/books" element={<Books />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>

     </>
  );
}
