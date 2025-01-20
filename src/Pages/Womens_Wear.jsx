import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/women/cloth2.webp";
import Image2 from "../assets/women/cloth1.avif";
import Image3 from "../assets/women/cloth3.jpg";
import Image4 from "../assets/women/cloth4.webp";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

const slides = [
  {
    id: 1,
    image: Image1,
    text: "",
  },
  {
    id: 2,
    image: Image2,
    text: ""
  },
  {
    id: 3,
    image: Image3,
    text: "Summer Collection"
  },
  {
    id: 4,
    image: Image4,
    text: ""
  },
];

const Womens_Wear = () => {

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            className="relative h-[600px]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
          </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-8xl font-bold text-center">{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Womens_Wear;
