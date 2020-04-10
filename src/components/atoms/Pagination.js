import React from "react";
import { Pagination } from "react-bootstrap";

export default () => {
  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{14}</Pagination.Item>
      <Pagination.Last />
    </Pagination>
  );
};
