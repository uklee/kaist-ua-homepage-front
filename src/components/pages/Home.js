import React from "react";
import { Container } from "react-bootstrap";

import { Header, Footer } from "../organisms";

const Home = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#eee" }}
      className="d-flex flex-column"
    >
      <Header />
      <Container className="flex-grow-1"></Container>
      <Footer />
    </div>
  );
};

export default Home;
