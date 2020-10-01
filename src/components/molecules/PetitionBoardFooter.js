import React from "react";
import { withRouter } from "react-router-dom";

// import { SearchBar } from "../atoms";
import { Button } from "react-bootstrap";
import PaginationContainer from "../containers/board/PaginationContainer";
import "./BoardFooter.scss";

import { useSelector } from "react-redux";

const BoardFooter = ({ title, page, lastPage, history }) => {
  const { auth } = useSelector(state => state.auth);

  return (
    <div className="d-flex flex-column justify-content-center Board-footer">
      <PaginationContainer title={title} page={page} lastPage={lastPage} />
      <div className="d-flex justify-content-between">
        {auth === "student" ? (
          <Button
            variant="outline-primary"
            className="h-100 d-inline-block"
            onClick={() => history.push(`/web/user/edit`)}
          >
            지금 청원하기
          </Button>
        ) : (
          <div />
        )}

        {/* <SearchBar className="d-inline-block" /> */}
      </div>
    </div>
  );
};

export default withRouter(BoardFooter);
