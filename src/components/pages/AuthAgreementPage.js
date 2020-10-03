import React from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { Header, Footer } from "../organisms";
import { AuthAgreementContent } from "../templates";
import { withRouter } from "react-router-dom";

const AuthAgreementPage = ({ history, ...props }) => {
  const { login } = props.match.params;
  const [isAgree, setIsAgree] = React.useState(false);
  const state = {
    key: process.env.REACT_APP_REGISTER_KEY
  };
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header />
      <Container className="flex-grow-1 p-3">
        <div>
          <div
            style={{ fontSize: "25pt", fontFamily: "NanumSquare ExtraBold" }}
            className="mb-4 pb-1 border-bottom"
          >
            KAIST 학부 총학생회 개인정보 처리방침
          </div>
          {login ? (
            <Alert variant="primary">초기 회원가입을 먼저 해주세요.</Alert>
          ) : null}
          <AuthAgreementContent />
          <div>
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="mr-1"
                checked={isAgree}
                onChange={e => setIsAgree(e.target.checked)}
              />
              <span>동의합니다.</span>
            </div>
            <div className="d-flex justify-content-end">
              <Button
                variant="info"
                disabled={!isAgree}
                href={`${process.env.REACT_APP_SSO}?client_id=${
                  process.env.REACT_APP_CLIENT_ID
                }&state=${JSON.stringify(state)}&redirect_url=${encodeURI(
                  `${process.env.REACT_APP_API_URL}/auth/signup`
                )}`}
              >
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(AuthAgreementPage);
