import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => (
  <Navbar
    bg="light"
    style={{ height: "150px" }}
    className="d-flex flex-column justify-content-center"
  >
    <Nav>
      <a href="https://www.facebook.com/kaistundergraduateassociation">
        <img
          style={{ height: "25px", filter: "grayscale(100%)", opacity: "30%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
          alt="facebook"
        />
      </a>
    </Nav>
  </Navbar>
);

export default Footer;
