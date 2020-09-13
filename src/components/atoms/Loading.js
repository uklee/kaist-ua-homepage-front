import React from "react";

import { Container, Spinner } from "react-bootstrap";

const Loading = () => (
  <Container className="flex-grow-1 board-loading">
    <Spinner animation="border" />
    <div>Loading...</div>
  </Container>
);

export default Loading;
