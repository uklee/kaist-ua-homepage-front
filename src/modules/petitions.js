import { createAction, handleActions } from "redux-actions";

const PETITIONS = "petitions/PETITIONS";

export const setPetitions = createAction(PETITIONS);

const initialState = {
  petitions: null,
  lastPage: 1
};

const petitions = handleActions(
  {
    [PETITIONS]: (state, { payload: { petitions, lastPage } }) => ({
      ...state,
      petitions,
      lastPage
    })
  },
  initialState
);

export default petitions;
