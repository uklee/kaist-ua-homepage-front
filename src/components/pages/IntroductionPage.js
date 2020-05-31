import React from "react";

import { Header, Footer } from "../organisms";
import { IntroductionContent } from "../templates";


const IntroductionPage = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                // backgroundColor: "#eee",
                fontFamily: "NanumSquare"
            }}
            className="d-flex flex-column"
        >
            <Header active="0" />
            <IntroductionContent />
            <Footer />
        </div>
    );
};

export default IntroductionPage;
