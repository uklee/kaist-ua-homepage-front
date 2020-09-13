import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, init, setPost } from "../../../modules/post";
import { getBoards } from "../../../modules/boards";
import { EditorContent } from "../../templates";
import { withRouter } from "react-router-dom";
import * as postsAPI from "../../../lib/api/post";
import * as boardsAPI from "../../../lib/api/board";

const EditorContentContainer = ({ history }) => {
  const dispatch = useDispatch();

  const { title, author, content, post, boards, boardId } = useSelector(
    ({ post, boards }) => ({
      title: post.title,
      author: post.author,
      content: post.content,
      post: post.post,
      boards: boards.boards,
      boardId: post.boardId
    })
  );

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  const onCancel = () => {
    history.goBack();
  };

  const onWrite = async () => {
    await postsAPI
      .write({ title, author, content, boardId })
      .then(res => dispatch(setPost(res.data)))
      .catch(err => console.log(err));
  };

  const getBoardsList = useCallback(() => {
    boardsAPI
      .list()
      .then(res1 => {
        dispatch(getBoards(res1.data));
      })
      .catch(err => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    getBoardsList();
  }, [getBoardsList]);

  useEffect(() => {
    return () => {
      dispatch(init());
    };
  }, [dispatch]);

  useEffect(() => {
    if (post) {
      const { id } = post;
      history.push(`/web/post/${id}`);
    }
  }, [history, post]);

  return (
    <EditorContent
      onChangeField={onChangeField}
      onWrite={onWrite}
      onCancel={onCancel}
      content={content}
      title={title}
      author={author}
      boards={boards}
      boardId={boardId}
    />
  );
};

export default withRouter(EditorContentContainer);
