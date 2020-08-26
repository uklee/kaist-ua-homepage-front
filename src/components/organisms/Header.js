import React, { useState, useEffect, useCallback } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../static/logo/ua_logo.png";
import "./Header.scss";
import { withRouter } from "react-router-dom";
import * as adminsAPI from "../../lib/api/admin";
import * as authAPI from "../../lib/api/auth";

const Header = ({ history, ...props }) => {
  const [hover1, setHover1] = useState(<div />);
  const [hover2, setHover2] = useState(<div />);
  const [hover3, setHover3] = useState(<div />);
  const [hover4, setHover4] = useState(<div />);
  const [auth, setAuth] = useState(false);
  const [authButtonBar, setAuthButtonBar] = useState(<div />);

  const active = (
    <div
      style={{
        height: "2px",
        backgroundColor: "#444",
        marginTop: "-2px"
      }}
    />
  );

  const checkAuth = async () => {
    const user = await authAPI.check();
    const admin = await adminsAPI.check();
    setAuth(admin.data.auth ? "admin" : user.data.auth ? "user" : false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const enter = <div className="tab-hover-enter" />;
  const leave = <div className="tab-hover-leave" />;

  const tryLogout = useCallback(async () => {
    authAPI.logout().then(res => setAuth(false));
  }, []);

  useEffect(() => {
    if (auth === "admin")
      setAuthButtonBar(
        <div className="d-flex">
          <Nav>
            <Nav.Link className="header-admin-logout" onClick={tryLogout}>
              어드민 로그아웃
            </Nav.Link>
          </Nav>
        </div>
      );
    else if (auth === "user")
      setAuthButtonBar(
        <div className="d-flex">
          <Nav>
            <Nav.Link className="header-login">마이페이지</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="header-login" onClick={tryLogout}>
              로그아웃
            </Nav.Link>
          </Nav>
        </div>
      );
    else
      setAuthButtonBar(
        <div className="d-flex">
          <Nav>
            <Nav.Link
              className="header-login"
              href={`https://iam2dev.kaist.ac.kr/api/sso/commonLogin?client_id=KAIPEDIA&redirect_url=${encodeURI(
                `${process.env.REACT_APP_API_URL}/auth/signup`
              )}`}
            >
              로그인
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="header-login" href="/web/auth/agreement">
              회원가입
            </Nav.Link>
          </Nav>
        </div>
      );
  }, [auth, tryLogout, history]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar as={Container} collapseOnSelect expand="lg">
        <Navbar.Brand href="/web/main">
          <img
            src={logo}
            width="100px"
            style={{ padding: "10px 0px" }}
            alt="UA_logo"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="header-item"
              href="/web/introduction"
              onMouseEnter={() => setHover1(enter)}
              onMouseLeave={() => {
                setHover1(leave);
              }}
            >
              총학 소개
              {props.active === "0" ? active : hover1}
            </Nav.Link>
            <Nav.Link
              className={`header-item ${props.notice}`}
              href="/web/bulletin/1"
              onMouseEnter={() => setHover2(enter)}
              onMouseLeave={() => {
                setHover2(leave);
              }}
            >
              공지사항
              {props.active === "1" ? active : hover2}
            </Nav.Link>
            <Nav.Link
              className="header-item"
              href=""
              onMouseEnter={() => setHover3(enter)}
              onMouseLeave={() => {
                setHover3(leave);
              }}
            >
              학생 청원
              {props.tab3 ? active : hover3}
            </Nav.Link>
            <Nav.Link
              className="header-item"
              href="/web/bulletin/2"
              onMouseEnter={() => setHover4(enter)}
              onMouseLeave={() => {
                setHover4(leave);
              }}
            >
              학생 복지
              {props.active === "2" ? active : hover4}
            </Nav.Link>
          </Nav>
          {authButtonBar}
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: "1px", backgroundColor: "#ddd" }} />
    </div>
  );
};

export default withRouter(Header);
