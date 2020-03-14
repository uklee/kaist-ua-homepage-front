import React from "react";
import { Container } from "react-bootstrap";
import { HomeCarousel } from "../molecules";

const HomeContent = () => {
  return (
    <Container className="flex-grow-1">
      <HomeCarousel />
    </Container>
  );
};

export default HomeContent;
