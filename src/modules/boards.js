import { createAction, handleActions } from "redux-actions";

const ALL_BOARDS = "boards/ALL_BOARDS";
const CURRENT_BOARD = "boards/CURRENT_BOARD";
const ALL_BOARDS2 = "boards/ALL_BOARDS2";
const CURRENT_BOARD2 = "boards/CURRENT_BOARD2";

export const setBoards = createAction(ALL_BOARDS);
export const setCurrentBoard = createAction(CURRENT_BOARD);
export const setBoards2 = createAction(ALL_BOARDS2);
export const setCurrentBoard2 = createAction(CURRENT_BOARD2);

const initialState = {
  boards: [],
  board: {},
  boards2: [],
  board2: {}
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
    }),
    [ALL_BOARDS2]: (state, { payload: boards }) => ({
      ...state,
      boards2: boards
    }),
    [CURRENT_BOARD2]: (state, { payload: board }) => ({
      ...state,
      board2: board
    })
  },
  initialState
);

export default boards;
