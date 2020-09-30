import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, init } from "../../../modules/post";
import { setBoards, setCurrentBoard } from "../../../modules/boards";
import { EditorContent } from "../../templates";
import { withRouter } from "react-router-dom";
import * as postsAPI from "../../../lib/api/post";
import * as boardsAPI from "../../../lib/api/board";

const EditorContentContainer = ({ history, boardId }) => {
  const dispatch = useDispatch();
  const post = useSelector(({ post }) => post);

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  const onCancel = () => {
    history.goBack();
  };

  const onWrite = () => {
    console.log(post);
    postsAPI
      .write(post)
      .then(res => {
        history.push(`/web/board/${boardId}`);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    dispatch(changeField({ key: "boardId", value: boardId }));
  }, [dispatch, boardId]);

  useEffect(() => {
    boardsAPI
      .list()
      .then(res => {
        const boards = res.data;
        dispatch(setBoards(boards));
        boards.forEach(board => {
          if (board.id === parseInt(boardId)) {
            dispatch(setCurrentBoard(board));
          }
        });
      })
      .catch(err => console.log(err));
  }, [boardId, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(init());
    };
  }, [dispatch]);

  return (
    <EditorContent
      onChangeField={onChangeField}
      onWrite={onWrite}
      onCancel={onCancel}
    />
  );
};

export default withRouter(EditorContentContainer);
