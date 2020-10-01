import { createAction, handleActions } from "redux-actions";

const SET_PETITIONS = "petitions/SET_PETITIONS";

export const setPetitions = createAction(
  SET_PETITIONS,
  ({ petitions, lastPage }) => ({
    petitions,
    lastPage
  })
);

const initialState = {
  petitions: [],
  lastPage: 1
};

const petitions = handleActions(
  {
    [SET_PETITIONS]: (state, { payload: { petitions, lastPage } }) => ({
      ...state,
      petitions,
      lastPage
    })
  },
  initialState
);

export default petitions;
