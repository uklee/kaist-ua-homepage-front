import React from "react";
import { Container } from "react-bootstrap";
import { HomeCarousel } from "../organisms";

const HomeContent = () => {
  return (
    <Container className="flex-grow-1">
      <br />
      <HomeCarousel />
    </Container>
  );
};

export default HomeContent;
