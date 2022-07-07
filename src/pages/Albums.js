import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import ImagesList from "./ImagesList";

const Albums = (category, number) => {

  return (
  <ImagesList category="Albums" number="1" imageName="album" />

  )
}

export default Albums;