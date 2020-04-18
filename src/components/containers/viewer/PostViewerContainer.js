import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "../../../modules/postViewer";
import PostViewer from "../../templates/PostViewer";
import * as PostsAPI from "../../../lib/api/post";

const PostViewerContainer = ({ postId }) => {
  const dispatch = useDispatch();
  const { post } = useSelector(({ postViewer }) => ({
    post: postViewer.post
  }));

  useEffect(() => {
    PostsAPI.read(postId)
      .then(res => {
        dispatch(readPost(res.data));
      })
      .catch(err => console.log(err));

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} />;
};

export default PostViewerContainer;
