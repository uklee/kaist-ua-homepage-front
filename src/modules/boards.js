import { createAction, handleActions } from "redux-actions";

const ALL_BOARDS = "boards/ALL_BOARDS";
const CURRENT_BOARD = "boards/CURRENT_BOARD";

export const setBoards = createAction(ALL_BOARDS);
export const setCurrentBoard = createAction(CURRENT_BOARD);

const initialState = {
  boards: [],
  board: {}
};

const boards = handleActions(
  {
    [ALL_BOARDS]: (state, { payload: boards }) => ({
      ...state,
      boards
    }),
    [CURRENT_BOARD]: (state, { payload: board }) => ({
      ...state,
      board
    })
  },
  initialState
);

export default boards;
