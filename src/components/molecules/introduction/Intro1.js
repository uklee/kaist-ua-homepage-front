import React from "react";
import "./IntroductionMaterial.scss";

const IntroductionMaterial = () => {
  return (
    <div className="text">
      <h3 className="title-1">KAIST 학부 총학생회</h3>
      <br />
      KAIST 학부생이라면 누구나 학부 총학생회의 회원입니다. <br />
      총학생회는 4천학우를 대변하고 이들의 생각을 모아 실현시키는 단체입니다.{" "}
      <br />
      또한, 모든 활동은{" "}
      <span className="title-3">KAIST 학부 총학생회 학생회칙</span>을 근거로
      진행합니다. <br />
      내부적으로는 학생회칙에 의한 민주적인 의사결정 구조 속에서 여러 행사나
      복지 사업을 진행하며, 외부적으로는 4천학우의 목소리를 한 데 모아 외쳐
      학교와 국가의 구성원으로서, 민주시민으로서 역할을 행사합니다. <br />
      KAIST 학부 총학생회, 줄여서 ‘총학’은 KAIST의 모든 학부생을 포함하는
      자치단체입니다. 그렇기에
      <br />
      <span className="title-3">
        여러분 모두 학부 총학생회원이며, 총학의 모든 의사 결정과 사업 집행에
        참여할 수 있습니다.
      </span>
      <br />
    </div>
  );
};

export default IntroductionMaterial;
