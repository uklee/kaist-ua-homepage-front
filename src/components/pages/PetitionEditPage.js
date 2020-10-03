import React from "react";
import { Header, Footer } from "../organisms";
import PetitionEditorContentContainer from "../containers/editor/PetitionEditorContentContainer";

const PetitionEditPage = props => {
  return (
    <div
      style={{
        minHeight: "100vh",
        // backgroundColor: "#eee",
        fontFamily: "NanumSquare"
      }}
      className="d-flex flex-column"
    >
      <Header active="petition" />
      <PetitionEditorContentContainer />
      <Footer />
    </div>
  );
};

export default PetitionEditPage;
