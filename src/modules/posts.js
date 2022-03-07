import { createAction, handleActions } from "redux-actions";

const LIST_POSTS = "posts/LIST_POSTS";
const LIST_POSTS2 = "posts/LIST_POSTS2";

export const listPosts = createAction(LIST_POSTS);
export const listPosts2 = createAction(LIST_POSTS2);

const initialState = {
  posts: null,
  lastPage: 1,
  posts2: null,
  lastPage2: 1
};

const posts = handleActions(
  {
    [LIST_POSTS]: (state, { payload: { posts, lastPage } }) => ({
      ...state,
      posts,
      lastPage
    }),
    [LIST_POSTS2]: (state, { payload: { posts, lastPage } }) => ({
      ...state,
      posts2: posts,
      lastPage2: lastPage
    })
  },
  initialState
);

export default posts;
