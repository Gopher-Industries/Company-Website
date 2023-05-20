import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledCarouselItem, StyledArrow  } from "./Carousel2.style";
import { ChevronLeft, ChevronRight } from "react-feather"

function SimpleCarousel() {
  const items = [
    {
      image: "https://example.com/image1.jpg",
      title: "<placeholer title 1>",
      description: "<placeholder description 1>"
    },
    {
      image: "https://example.com/image2.jpg",
      title: "<placeholer title 2>",
      description: "<placeholder description 2>"
    },
    {
      image: "https://example.com/image3.jpg",
      title: "<placeholer title 3>",
      description: "<placeholder description 3>"
    }
  ];

  const carouselItems = items.map((item) => {
    return (
      <StyledCarouselItem key={item.title}>
        {/* <img src={item.image} alt={item.title} /> */}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </StyledCarouselItem>
    );
  });

  


  function PrevArrow(props) {
    const {onClick} = props;

    const arrowStylesLeft = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
      zIndex: 1, // ensure the arrows are above the slides
      cursor: "pointer",
    };

    return (
        <div><ChevronLeft onClick={onClick} style={arrowStylesLeft}/></div>
    )
  }

  function NextArrow(props) {
    const {onClick} = props;
    const arrowStylesRight = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "10px",
      zIndex: 1,
      cursor: "pointer",
    };
    return (
        <div><ChevronRight onClick={onClick} style={arrowStylesRight}/></div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const dotsStyles = {
    position: "absolute",
    bottom: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
  };

  return (
    <Slider {...settings}>
      <div><h3>test 1</h3></div>
      <div><h3>test 2</h3></div>
      <div><h3>test 3</h3></div>
      <div><h3>test 4</h3></div>
    </Slider>
  );
}

export default SimpleCarousel;
