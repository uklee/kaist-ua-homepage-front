import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ margin: "auto" }}
          className="d-block w-100"
          src="https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/77330654_114472603354402_6066259349863399424_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=2tjSG_A57r4AX-iT-0M&_nc_ht=scontent.ficn2-1.fna&oh=0793b6ea6a650e5c9e05a87db31d356f&oe=5E9343FE"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>동해물과 백두산이</h3>
          <p>Nulla vitae elit Fred, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ margin: "auto" }}
          className="d-block w-100"
          src="https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/77330654_114472603354402_6066259349863399424_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=2tjSG_A57r4AX-iT-0M&_nc_ht=scontent.ficn2-1.fna&oh=0793b6ea6a650e5c9e05a87db31d356f&oe=5E9343FE"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>마르고 닳도록</h3>
          <p>Lorem ipsum namuk sit stupid, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
