import React from "react";

import { Header, Footer } from "../organisms";
import PetitionContentContainer from "../containers/petition/PetitionContentContainer";

const PetitionBoardPage = props => {
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active="petition" />
      <PetitionContentContainer />
      <Footer />
    </div>
  );
};

export default PetitionBoardPage;
