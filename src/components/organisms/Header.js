import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../static/logo/ua_logo.png";
import "./Header.scss";

const Header = props => {
  const [hover1, setHover1] = useState(<div />);
  const [hover2, setHover2] = useState(<div />);
  const [hover3, setHover3] = useState(<div />);
  const [hover4, setHover4] = useState(<div />);

  const active = (
    <div
      style={{
        height: "2px",
        backgroundColor: "#444",
        marginTop: "-2px"
      }}
    />
  );

  const enter = <div className="tab-hover-enter" />;
  const leave = <div className="tab-hover-leave" />;

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar as={Container} collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
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
              href=""
              onMouseEnter={() => setHover1(enter)}
              onMouseLeave={() => {
                setHover1(leave);
              }}
            >
              총학 소개
              {props.tab1 ? active : hover1}
            </Nav.Link>
            <Nav.Link
              className={`header-item ${props.notice}`}
              href="/bulletin/1"
              onMouseEnter={() => setHover2(enter)}
              onMouseLeave={() => {
                setHover2(leave);
              }}
            >
              공지사항
              {props.notice ? active : hover2}
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
              href="/bulletin/2"
              onMouseEnter={() => setHover4(enter)}
              onMouseLeave={() => {
                setHover4(leave);
              }}
            >
              학생 복지
              {props.tab4 ? active : hover4}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="header-login" href="">
              로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: "2px", backgroundColor: "#ddd" }} />
    </div>
  );
};

export default Header;
