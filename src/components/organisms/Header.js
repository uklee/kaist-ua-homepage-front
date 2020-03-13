import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../static/logo/logo.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{ height: "100px", backgroundColor: "#fff" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150px"
            alt="UA_logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="">총학 소개</Nav.Link>
            <Nav.Link href="">공지사항</Nav.Link>
            <Nav.Link href="">학우 청원</Nav.Link>
            <Nav.Link href="">학생 복지</Nav.Link>
          </Nav>
          <Nav.Link href="">로그인</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
