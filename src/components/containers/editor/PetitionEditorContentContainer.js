import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, init } from "../../../modules/post";
import { PetitionEditorContent } from "../../templates";
import { withRouter } from "react-router-dom";
import * as petitionsAPI from "../../../lib/api/petition";

const PetitionEditorContentContainer = ({ history }) => {
  const dispatch = useDispatch();
  const petition = useSelector(({ petition }) => petition);

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  const onCancel = () => {
    history.goBack();
  };

  const onWrite = () => {
    petitionsAPI
      .write(petition)
      .then(res => {
        history.push(`/web/petition`);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    return () => {
      dispatch(init());
    };
  }, [dispatch]);

  return (
    <PetitionEditorContent
      onChangeField={onChangeField}
      onWrite={onWrite}
      onCancel={onCancel}
    />
  );
};

export default withRouter(PetitionEditorContentContainer);
