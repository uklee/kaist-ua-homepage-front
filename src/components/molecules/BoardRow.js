import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./BoardRow.scss";

const BoardRow = props => {
  return (
    <Row as={Link} to="/" className="board-row">
      <Col md="2" lg="3" className="row-author">
        {props.author}
      </Col>
      <Col md="8" lg="5" className="row-title">
        {props.title}
      </Col>
      <Col md="2" lg="4" className="row-date">
        {props.date}
      </Col>
    </Row>
  );
};

export default BoardRow;
