import React from "react";
import Pagination from "../../atoms/Pagination";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import qs from "qs";

const PaginationContainer = ({ location }) => {
  const { lastPage, posts } = useSelector(({ posts }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts
  }));

  if (!posts) return null;

  const { author, title, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  return (
    <Pagination author={author} title={title} page={page} lastPage={lastPage} />
  );
};

export default withRouter(PaginationContainer);
