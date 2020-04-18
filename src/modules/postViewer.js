import { createAction, handleActions } from "redux-actions";

const READ_POST = "postViewer/READ_POST";
const UNLOAD_POST = "postViewer/UNLOAD_POST";

export const readPost = createAction(READ_POST, post => post);
export const unloadPost = createAction(UNLOAD_POST);

const initialState = {
  post: null
};

const postViewer = handleActions(
  {
    [READ_POST]: (state, { payload: post }) => ({
      ...state,
      post
    }),
    [UNLOAD_POST]: () => initialState
  },
  initialState
);

export default postViewer;
