import { createAction, handleActions } from "redux-actions";

const INIT = "edit/INIT";
const CHANGE_FIELD = "edit/CHANGE_FIELD";

export const init = createAction(INIT);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

const initialState = {
  title: "",
  content: ""
};

const edit = handleActions(
  {
    [INIT]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value
    })
  },
  initialState
);

export default edit;
