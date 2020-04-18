import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, init } from "../../../modules/edit";
import { EditorContent } from "../../templates";

const EditorContentContainer = () => {
  const dispatch = useDispatch();
  const { title, author, content } = useSelector(({ edit }) => ({
    title: edit.title,
    author: edit.author,
    content: edit.content
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  useEffect(() => {
    return () => {
      dispatch(init());
    };
  }, [dispatch]);
  return (
    <EditorContent
      onChangeField={onChangeField}
      content={content}
      title={title}
      author={author}
    />
  );
};

export default EditorContentContainer;
