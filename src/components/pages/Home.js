import React from "react";

import { Header, Footer } from "../organisms";
import { HomeContent } from "../templates";

const Home = () => {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#eee" }}
      className="d-flex flex-column"
    >
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
