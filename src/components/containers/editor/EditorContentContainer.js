import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, init, writePost } from "../../../modules/post";
import { listBulletins } from "../../../modules/bulletins";
import { EditorContent } from "../../templates";
import { withRouter } from "react-router-dom";
import * as postsAPI from "../../../lib/api/post";
import * as bulletinsAPI from "../../../lib/api/bulletin";

const EditorContentContainer = ({ history }) => {
  const dispatch = useDispatch();

  const { title, author, content, post, bulletins, bulletinId } = useSelector(
    ({ post, bulletins }) => ({
      title: post.title,
      author: post.author,
      content: post.content,
      post: post.post,
      bulletins: bulletins.bulletins,
      bulletinId: post.bulletinId
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
      .write({ title, author, content, bulletinId })
      .then(res => dispatch(writePost(res.data)))
      .catch(err => console.log(err));
  };

  const getBulletinsList = useCallback(() => {
    bulletinsAPI
      .list()
      .then(res1 => {
        dispatch(listBulletins(res1.data));
        console.log(res1.data);
      })
      .catch(err => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    getBulletinsList();
  }, [getBulletinsList]);

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
      bulletins={bulletins}
      bulletinId={bulletinId}
    />
  );
};

export default withRouter(EditorContentContainer);
