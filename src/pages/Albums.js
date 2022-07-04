import React, { useState, useEffect } from "react";
import "../styles/images.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/favorites.css"
import ImagesList from "./ImagesList";

const Albums = (category, number) => {

  return (
  <ImagesList category="Albums" number="1" />
  )
}

export default Albums;