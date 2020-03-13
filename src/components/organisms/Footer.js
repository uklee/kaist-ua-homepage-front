import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => (
  <Navbar
    style={{ height: "150px", backgroundColor: "#fff" }}
    className="d-flex flex-column justify-content-center"
  >
    <Nav>
      <a href="https://www.facebook.com/kaistundergraduateassociation">
        <img
          className="facebook-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
          alt="facebook"
        />
      </a>
    </Nav>
  </Navbar>
);

export default Footer;
