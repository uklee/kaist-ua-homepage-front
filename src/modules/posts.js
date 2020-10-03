import { createAction, handleActions } from "redux-actions";

const LIST_POSTS = "posts/LIST_POSTS";

export const listPosts = createAction(LIST_POSTS);

const initialState = {
  posts: null,
  lastPage: 1
};

const posts = handleActions(
  {
    [LIST_POSTS]: (state, { payload: { posts, lastPage } }) => ({
      ...state,
      posts,
      lastPage
    })
  },
  initialState
);

export default posts;
