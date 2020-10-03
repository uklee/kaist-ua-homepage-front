import React, { useCallback, useEffect } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PetitionBoardContent from "../../templates/PetitionBoardContent";
import * as petitionsAPI from "../../../lib/api/petition";

import { setPetitions } from "../../../modules/petitions";

const PetitionContentContainer = ({ location, history }) => {
  const dispatch = useDispatch();
  const petitions = useSelector(({ petitions }) => petitions.petitions);

  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const redirect = useCallback(() => {
    if (!page) history.push(`${location.pathname}?page=1`);
  }, [page, history, location.pathname]);

  useEffect(() => {
    redirect();
  }, [location.pathname, redirect]);

  const getPetitions = useCallback(() => {
    petitionsAPI
      .list({ page })
      .then(res => {
        const { petitions, lastPage } = res.data;
        dispatch(setPetitions({ petitions, lastPage }));
      })
      .catch(err => console.log(err));
  }, [dispatch, page]);

  useEffect(() => {
    getPetitions();
  }, [dispatch, getPetitions]);

  return <PetitionBoardContent petitions={petitions} />;
};

export default withRouter(PetitionContentContainer);
