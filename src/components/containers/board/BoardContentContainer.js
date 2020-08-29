import React, { useCallback, useEffect } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BoardContent from "../../templates/BoardContent";
import * as boardsAPI from "../../../lib/api/board";
import * as postsAPI from "../../../lib/api/post";
import { listBoards } from "../../../modules/boards";
import { listPosts } from "../../../modules/posts";

const BoardContentContainer = ({ location, boardId, history, isUser }) => {
  const dispatch = useDispatch();
  const { posts, boards } = useSelector(({ posts, boards }) => ({
    posts: posts.posts,
    boards: boards.boards
  }));

  const { author, title, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const redirect = useCallback(() => {
    if (!page) history.push(`${location.pathname}?page=1`);
  }, [page, history, location.pathname]);

  useEffect(() => {
    redirect();
  }, [location.pathname, boardId, redirect]);

  const getBoardsList = useCallback(() => {
    boardsAPI
      .list()
      .then(res1 => {
        dispatch(listBoards(res1.data));

        postsAPI
          .listPosts({ author, title, page, boardId })
          .then(res2 => {
            const { posts, lastPage } = res2.data;
            dispatch(listPosts({ posts, lastPage }));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [dispatch, author, boardId, page, title]);

  useEffect(() => {
    getBoardsList();
  }, [dispatch, location.search, getBoardsList]);

  return (
    <BoardContent
      isUser={isUser}
      boards={boards}
      boardId={boardId}
      posts={posts}
    />
  );
};

export default withRouter(BoardContentContainer);
