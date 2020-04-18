import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, init, writePost } from "../../../modules/post";
import { EditorContent } from "../../templates";
import { withRouter } from "react-router-dom";
import * as postsAPI from "../../../lib/api/post";

const EditorContentContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, author, content, post } = useSelector(({ post }) => ({
    title: post.title,
    author: post.author,
    content: post.content,
    post: post.post
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  const onCancel = () => {
    history.goBack();
  };

  const onWrite = () => {
    postsAPI
      .write({ title, author, content })
      .then(res => dispatch(writePost(res.data)))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    return () => {
      dispatch(init());
    };
  }, [dispatch]);

  useEffect(() => {
    if (post) {
      const { id } = post;
      history.push(`/post/${id}`);
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
    />
  );
};

export default withRouter(EditorContentContainer);
