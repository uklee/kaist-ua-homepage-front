import React, { useState, useEffect, useCallback } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../static/logo/ua_logo.png";
import "./Header.scss";
import { withRouter, Link } from "react-router-dom";
import * as authAPI from "../../lib/api/auth";

const Header = ({ history, ...props }) => {
  const [hover1, setHover1] = useState(<div />);
  const [hover2, setHover2] = useState(<div />);
  const [hover3, setHover3] = useState(<div />);
  const [hover4, setHover4] = useState(<div />);
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true);
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

  const checkAuth = () => {
    authAPI
      .check()
      .then(res => {
        setName(res.data.name);
        setAuth(res.data.auth);
      })
      .catch(err => {
        setLoading(false);
      });
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const enter = <div className="tab-hover-enter" />;
  const leave = <div className="tab-hover-leave" />;

  const tryLogout = useCallback(async () => {
    authAPI.logout().then(res => {
      window.location.reload(false);
    });
  }, []);

  useEffect(() => {
    if (auth === "admin")
      setAuthButtonBar(
        <Nav>
          <Nav.Link className="header-admin-logout" onClick={tryLogout}>
            어드민 로그아웃
          </Nav.Link>
        </Nav>
      );
    else if (auth === "student")
      setAuthButtonBar(
        <Nav>
          <NavDropdown alignRight title={name} id="user-name">
            <NavDropdown.Item as={Link} to="/web/user/studentFee">
              학생회비
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={tryLogout} className="header-logout">
              로그아웃
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    else
      setAuthButtonBar(
        <Nav>
          <Nav.Link
            className="header-login"
            href={`${process.env.REACT_APP_SSO}?client_id=${
              process.env.REACT_APP_CLIENT_ID
            }&redirect_url=${encodeURI(
              `${process.env.REACT_APP_API_URL}/auth/signup`
            )}`}
          >
            로그인
          </Nav.Link>
          <Nav.Link className="header-login" href="/web/auth/agreement">
            회원가입
          </Nav.Link>
        </Nav>
      );
  }, [auth, tryLogout, history, name]);

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
              className="header-item"
              href=""
              onMouseEnter={() => setHover2(enter)}
              onMouseLeave={() => {
                setHover2(leave);
              }}
            >
              학생청원
              {props.tab3 ? active : hover2}
            </Nav.Link>
            <Nav.Link
              className={`header-item ${props.notice}`}
              href="/web/bulletin/1"
              onMouseEnter={() => setHover3(enter)}
              onMouseLeave={() => {
                setHover3(leave);
              }}
            >
              공지사항
              {props.active === "1" ? active : hover3}
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
          {loading ? null : authButtonBar}
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: "1px", backgroundColor: "#ddd" }} />
    </div>
  );
};

export default withRouter(Header);
