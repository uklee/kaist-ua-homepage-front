import { createAction, handleActions } from "redux-actions";

const SAMPLE_ACTION = "sample/SAMPLE_ACTION";

const initialState = {};

const sample = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state
  },
  initialState
);

export default sample;
