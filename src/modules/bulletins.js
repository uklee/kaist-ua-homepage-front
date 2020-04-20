import { createAction, handleActions } from "redux-actions";

const LIST_BULLETINS = "bulletins/LIST_BULLETINS";

export const listBulletins = createAction(
  LIST_BULLETINS,
  bulletins => bulletins
);

const initialState = {
  bulletins: null
};

const bulletins = handleActions(
  {
    [LIST_BULLETINS]: (state, { payload: bulletins }) => ({
      ...state,
      bulletins
    })
  },
  initialState
);

export default bulletins;
