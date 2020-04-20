import React from "react";
import { Pagination } from "react-bootstrap";
import qs from "qs";

export default ({ author, title, page, lastPage }) => {
  const buildUrl = (author, title, page) => {
    const queryString = qs.stringify({ author, title, page });
    return `?${queryString}`;
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First
        style={{ fontFamily: "arial" }}
        href={buildUrl(author, title, 1)}
      />
      {page > 1 && (
        <Pagination.Item href={buildUrl(author, title, page - 1)}>
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {page < lastPage && (
        <Pagination.Item href={buildUrl(author, title, parseInt(page) + 1)}>
          {parseInt(page) + 1}
        </Pagination.Item>
      )}
      <Pagination.Last
        style={{ fontFamily: "arial" }}
        href={buildUrl(author, title, lastPage)}
      />
    </Pagination>
  );
};
