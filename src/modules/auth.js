import { createActions, handleActions } from "redux-actions";

const SET_AUTH = "SET_AUTH";

export const { setAuth } = createActions({
  SET_AUTH: ({ auth, korName, engName }) => ({ auth, korName, engName })
});

const defaultState = {
  auth: "loading",
  name: {
    korName: "",
    engName: ""
  }
};

const auth = handleActions(
  {
    [SET_AUTH]: (state, { payload: { auth, korName, engName } }) => ({
      ...state,
      auth,
      name: { korName, engName }
    })
  },
  defaultState
);

export default auth;
