import { createActions, handleActions } from "redux-actions";

const { init, setPost, changeField } = createActions({
  INIT: () => {},
  // post: {id, author, korTitle, engTitle, korContent, engContent, isActive, boardId}
  SET_POST: post => post,
  CHANGE_FIELD: ({ key, value }) => ({
    key,
    value
  })
});

export { init, setPost, changeField };

const initialState = {
  author: "",
  korTitle: "",
  engTitle: "",
  korContent: "",
  engContent: "",
  isActive: false,
  isNew: false,
  views: 0
};

const post = handleActions(
  {
    [init]: () => initialState,
    [setPost]: (state, { payload: post }) => ({ ...state, ...post }),
    [changeField]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value
    })
  },
  initialState
);

export default post;
