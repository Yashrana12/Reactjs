import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../Pages/Home/HomeCom.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="Carousel-com pb-5 "
    >
      <Carousel.Item className="item">
        <img
          className="d-block w-100 lighting"
          src="https://wallpapercave.com/wp/wp2149359.jpg"
          alt="first"
          style={{ maxHeight: "900px" }}
        ></img>
        <Carousel.Caption className="cap">
          <h3>Rolex</h3>
          <p className="font-w bold">
            In general, Rolex has three watch lines: Oyster Perpetual,
            Professional and Cellini{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp2149312.png"
          alt="second"
          style={{ maxHeight: "900px" }}
        ></img>
      </Carousel.Item>

      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp2149295.jpg"
          alt="third"
          style={{ maxHeight: "900px" }}
        ></img>
        <Carousel.Caption className="cap">
          <h3>Oyster Perpetual</h3>
          <p className="font-w bold">
            The Oyster case of the Oyster Perpetual models is guaranteed
            waterproof to a depth of 100 metres
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function HomeP() {
  return (
    <>
      <ControlledCarousel />
    </>
  );
}

export default HomeP;
