import React from "react";
import { SearchBar } from "../atoms";
import { Button } from "react-bootstrap";
import "./BulletinFooter.scss";
import PaginationContainer from "../containers/bulletin/PaginationContainer";
import { withRouter } from "react-router-dom";

const BulletinFooter = ({ author, title, page, lastPage, history }) => {
  return (
    <div className="d-flex flex-column justify-content-center Bulletin-footer">
      <PaginationContainer
        author={author}
        title={title}
        page={page}
        lastPage={lastPage}
      />
      <div className="d-flex justify-content-between">
        <Button
          variant="outline-primary"
          className="h-100 d-inline-block"
          onClick={() => history.push("/edit")}
        >
          글 작성하기
        </Button>
        <SearchBar className="d-inline-block" />
      </div>
    </div>
  );
};

export default withRouter(BulletinFooter);
