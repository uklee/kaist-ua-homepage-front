import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostViewer, PetitionViewer } from "../../templates";
import * as PostAPI from "../../../lib/api/post";
import * as PetitionAPI from "../../../lib/api/petition";
import { setPost } from "../../../modules/post";
import { setPetition } from "../../../modules/petition";

const PostViewerContainer = ({ history, postId, petitionId }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  const petition = useSelector(({ petition }) => petition);
  useEffect(() => {
    if (postId) {
      PostAPI.read(postId)
        .then(res => {
          dispatch(setPost(res.data));
        })
        .catch(err => console.log(err));
    } else if (petitionId) {
      PetitionAPI.read(petitionId)
        .then(res => {
          console.log(res.data);
          dispatch(setPetition(res.data));
        })
        .catch(err => console.log(err));
    }
  }, [dispatch, postId, petitionId]);
  console.log(petition);

  const onEdit = () => {
    history.push(`/web/admin/edit/${post.BoardId}/${postId}`)
  };

  const onRemove = () => {
    PostAPI
      .remove(postId)
      .then(res => history.push(`/web/board/${post.BoardId}`))
      .catch(err => console.log(err));
  };

  return postId ? (
    <PostViewer post={post} onEdit={onEdit} onRemove={onRemove} />
  ) : petitionId ? (
    <PetitionViewer petition={petition} />
  ) : null;
};

export default PostViewerContainer;
