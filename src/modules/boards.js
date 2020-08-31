import { createAction, handleActions } from "redux-actions";

const GET_BOARDS = "boards/GET_BOARDS";

export const getBoards = createAction(GET_BOARDS, boards => boards);

const initialState = {
  boards: []
};

const boards = handleActions(
  {
    [GET_BOARDS]: (state, { payload: boards }) => ({
      ...state,
      boards
    })
  },
  initialState
);

export default boards;
