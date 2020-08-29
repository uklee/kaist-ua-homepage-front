import { createAction, handleActions } from "redux-actions";

const LIST_BULLETINS = "boards/LIST_BULLETINS";

export const listBoards = createAction(LIST_BULLETINS, boards => boards);

const initialState = {
  boards: null
};

const boards = handleActions(
  {
    [LIST_BULLETINS]: (state, { payload: boards }) => ({
      ...state,
      boards
    })
  },
  initialState
);

export default boards;
