import { createActions, handleActions } from "redux-actions";

const { init, setPetition, changeField } = createActions({
  INIT: () => {},
  // petition: {id, author, korTitle, engTitle, korContent, engContent, isActive, boardId}
  SET_PETITION: petition => petition,
  CHANGE_FIELD: ({ key, value }) => ({
    key,
    value
  })
});

export { init, setPetition, changeField };

const initialState = {
  korTitle: "",
  engTitle: "",
  korContent: "",
  engContent: ""
};

const petition = handleActions(
  {
    [init]: () => initialState,
    [setPetition]: (state, { payload: petition }) => ({
      ...state,
      ...petition
    }),
    [changeField]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value
    })
  },
  initialState
);

export default petition;
