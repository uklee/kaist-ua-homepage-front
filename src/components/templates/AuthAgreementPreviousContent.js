import React from "react";


import Terms1 from "../molecules/terms/terms_20210908.js"
import Terms2 from "../molecules/terms/terms_20220414.js"
import Terms3 from "../molecules/terms/terms_20230207.js"

const AuthAgreementPreviousContent = () => {
  return (
    <div>
      <details>
        <summary>홈페이지 최초 운영일 ~ 2021.09.07 적용지침</summary>
        <Terms1 />
      </details>
      <details>
        <summary>2021.09.08 ~ 2022.04.13 적용지침</summary>
        <Terms2 />
      </details>
      <details>
        <summary>2022.04.14 ~ 2023.02.06 적용지침</summary>
        <Terms3 />
      </details>
    </div>
  );
};

export default AuthAgreementPreviousContent;
