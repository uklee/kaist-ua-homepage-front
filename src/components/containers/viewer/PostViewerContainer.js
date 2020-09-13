import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../modules/post";
import PostViewer from "../../templates/PostViewer";
import * as PostsAPI from "../../../lib/api/post";

const PostViewerContainer = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);

  useEffect(() => {
    PostsAPI.read(postId)
      .then(res => {
        dispatch(setPost(res.data));
      })
      .catch(err => console.log(err));
  }, [dispatch, postId]);

  return <PostViewer post={post} />;
};

export default PostViewerContainer;
