import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./BoardModuleRow.scss";

const BoardModuleRow = props => {
  const { t } = useTranslation(["BoardModule"]);
  if (typeof props.title === "object") {
    return (
      <Row as={Link} to={`/web/post/${props.id}`} className="boardModule-row">
        <Col md="2" lg="3" className="row-author">
          {t("content", { value: props.author })}
        </Col>
        <Col md="8" lg="5" className="row-title">
          {t("content", { value: props.title })}
        </Col>
        <Col md="2" lg="4" className="row-date">
          {props.createdAt ? props.createdAt.split(/T|.000Z/)[0] : null}
        </Col>
      </Row>
    );
  } else {
    return <Row className="boardModule-row" />;
  }
};

export default BoardModuleRow;
