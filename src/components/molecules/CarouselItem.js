import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselItem = props => {
  return (
    <Carousel.Item className={props.className}>
      <a href={props.href}>
        <img
          style={{ margin: "auto" }}
          className="d-block w-100"
          src={props.src}
          alt={props.alt}
        />
      </a>
    </Carousel.Item>
  );
};

export default CarouselItem;
