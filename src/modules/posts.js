import { createAction, handleActions } from "redux-actions";

const LIST_POSTS = "posts/LIST_POSTS";

export const listPosts = createAction(LIST_POSTS, posts => posts);

const initialState = {
  posts: null
};

const posts = handleActions(
  {
    [LIST_POSTS]: (state, { payload: posts }) => ({
      ...state,
      posts
    })
  },
  initialState
);

export default posts;
