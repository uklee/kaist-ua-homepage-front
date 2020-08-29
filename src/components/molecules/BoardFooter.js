import React from "react";
import { SearchBar } from "../atoms";
import { Button } from "react-bootstrap";
import "./BoardFooter.scss";
import PaginationContainer from "../containers/board/PaginationContainer";
import { withRouter } from "react-router-dom";

const BoardFooter = ({ author, title, page, lastPage, history }) => {
  return (
    <div className="d-flex flex-column justify-content-center Board-footer">
      <PaginationContainer
        author={author}
        title={title}
        page={page}
        lastPage={lastPage}
      />
      <div className="d-flex justify-content-between">
        {window.sessionStorage.accessToken ? (
          <Button
            variant="outline-primary"
            className="h-100 d-inline-block"
            onClick={() => history.push("/web/admin/edit")}
          >
            글 작성하기
          </Button>
        ) : (
          <div />
        )}

        <SearchBar className="d-inline-block" />
      </div>
    </div>
  );
};

export default withRouter(BoardFooter);
