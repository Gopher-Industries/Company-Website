// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { StyledCarouselItem, StyledArrow  } from "./Carousel2.style";
// import { ChevronLeft, ChevronRight } from "react-feather"

// function SimpleCarousel() {
//   const items = [
//     {
//       image: "https://example.com/image1.jpg",
//       title: "<placeholer title 1>",
//       description: "<placeholder description 1>"
//     },
//     {
//       image: "https://example.com/image2.jpg",
//       title: "<placeholer title 2>",
//       description: "<placeholder description 2>"
//     },
//     {
//       image: "https://example.com/image3.jpg",
//       title: "<placeholer title 3>",
//       description: "<placeholder description 3>"
//     }
//   ];

//   const carouselItems = items.map((item) => {
//     return (
//       <StyledCarouselItem key={item.title}>
//         {/* <img src={item.image} alt={item.title} /> */} 
//         <h3>{item.title}</h3>
//         <p>{item.description}</p>
//       </StyledCarouselItem>
//     );
//   });

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     //prevArrow: <Arrow className="slick-prev" onClick={() => {console.log("i was clicked")}} />,
//     //nextArrow: <Arrow className="slick-next" />,
//     prevArrow: <ArrowIcon direction="left"  />,
//     nextArrow: <ArrowIcon direction="right"  />,
//   };

//   function Arrow(props) {
//     const { direction, onClick } = props;
//     const arrowClass = `slick-arrow slick-${direction}`;
  
//     // Set the appropriate arrow icon based on the direction prop
//     const ArrowIconLeft = direction === "left" ? ChevronLeft : ChevronLeft;
//     const ArrowIconRight = direction === "right" ? ChevronRight : ChevronRight;
  
//     // Use CSS to position the arrows
//     const arrowStylesLeft = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       [direction === "left" ? "left" : "left"]: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
//       zIndex: 1, // ensure the arrows are above the slides
//     };
    
//     const arrowStylesRight = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       [direction === "left" ? "left" : "right"]: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
//       zIndex: 1, // ensure the arrows are above the slides
//     };
  
    // return (
    //   <div className={arrowClass} onClick={onClick}>
    //     <ArrowIconLeft style={arrowStylesLeft}/>
    //     <ArrowIconRight style={arrowStylesRight}/>
    //   </div>
    // );
  // }
  
  // function Arrow(props) {
  //   const { direction, onClick } = props;
  //   const arrowClass = `slick-arrow slick-${direction}`;
  
  //   // Set the appropriate arrow icon based on the direction prop
  //   const ArrowIconLeft = direction === "left" ? ChevronLeft : ChevronLeft;
  //   const ArrowIconRight = direction === "right" ? ChevronRight : ChevronRight;
  
  //   // Use CSS to position the arrows | Will move later
  //   const arrowStylesLeft = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translateY(50%)",
  //     left: direction === "left" ? "-10px" : "100px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
  //     zIndex: 1, // ensure the arrows are above the slides
  //   };
  
  //   const arrowStylesRight = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translateY(-50%)",
  //     right: "100px",
  //     zIndex: 1,
  //   };

  
  //   return (
  //     <div className={arrowClass} onClick={onClick}>
  //       <ArrowIconLeft style={arrowStylesLeft}/>
  //       <ArrowIconRight style={arrowStylesRight}/>
  //     </div>
  //   );
  // }

  // const dotsStyles = {
  //   position: "absolute",
  //   bottom: "10px",
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   zIndex: 1,
  // };

  // return (
  //   <Slider {...settings}>
  //     {carouselItems}
  //   </Slider>
  // );

  // return (
  //   <Slider {...settings}>
  //     <div><h3>test 1</h3></div>
  //     <div><h3>test 2</h3></div>
  //     <div><h3>test 3</h3></div>
  //     <div><h3>test 4</h3></div>
  //   </Slider>
  // );

  // return (
  //   <div className="carousel-container" style={containerStyles}>
  //     <Slider {...settings}>
  //       {images.map((image, index) => (
  //         <div key={index}>
  //           <img src={image} alt="carousel slide" />
  //         </div>
  //       ))}
  //     </Slider>
  //     <div className="carousel-dots" style={dotsStyles}>
  //       <Dots value={currentSlide} onChange={handleSlideChange} dots={images.length} />
  //     </div>
  //   </div>
  // );
// }

// export default SimpleCarousel;








// _______________________________________________

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { StyledCarouselItem, StyledArrow  } from "./Carousel2.style";
// import { ChevronLeft, ChevronRight } from "react-feather"

// function SimpleCarousel() {
//   const items = [
//     {
//       image: "https://example.com/image1.jpg",
//       title: "<placeholer title 1>",
//       description: "<placeholder description 1>"
//     },
//     {
//       image: "https://example.com/image2.jpg",
//       title: "<placeholer title 2>",
//       description: "<placeholder description 2>"
//     },
//     {
//       image: "https://example.com/image3.jpg",
//       title: "<placeholer title 3>",
//       description: "<placeholder description 3>"
//     }
//   ];

//   const carouselItems = items.map((item) => {
//     return (
//       <StyledCarouselItem key={item.title}>
//         {/* <img src={item.image} alt={item.title} /> */}
//         <h3>{item.title}</h3>
//         <p>{item.description}</p>
//       </StyledCarouselItem>
//     );
//   });

//   function PrevArrow(props) {
//     const {onClick} = props;

//     const arrowStylesLeft = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       left: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
//       zIndex: 1, // ensure the arrows are above the slides
//       cursor: "pointer",
//     };

//     return (
//         <div><ChevronLeft onClick={onClick} style={arrowStylesLeft}/></div>
//     )
//   }

//   function NextArrow(props) {
//     const {onClick} = props;
//     const arrowStylesRight = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       right: "10px",
//       zIndex: 1,
//       cursor: "pointer",
//     };
//     return (
//         <div><ChevronRight onClick={onClick} style={arrowStylesRight}/></div>
//     )
//   }


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

  // function Arrow(props) {
  //   const { direction, onClick } = props;
  //   const arrowClass = `slick-arrow slick-${direction}`;

  //   // Set the appropriate arrow icon based on the direction prop
  //   const ArrowIconLeft = direction === "left" ? ChevronLeft : ChevronLeft;
  //   const ArrowIconRight = direction === "right" ? ChevronRight : ChevronRight;

  //   // Use CSS to position the arrows
  //   const arrowStylesLeft = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translateY(-50%)",
  //     [direction === "left" ? "left" : "left"]: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
  //     zIndex: 1, // ensure the arrows are above the slides
  //   };

  //   const arrowStylesRight = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translateY(-50%)",
  //     [direction === "left" ? "left" : "right"]: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
  //     zIndex: 1, // ensure the arrows are above the slides
  //   };

  //   return (
  //     <div className={arrowClass} onClick={onClick}>
  //       <ArrowIconLeft style={arrowStylesLeft}/>
  //       <ArrowIconRight style={arrowStylesRight}/>
  //     </div>
  //   );
  // }





  // const dotsStyles = {
  //   position: "absolute",
  //   bottom: "10px",
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   zIndex: 1,
  // };

  // return (
  //   <Slider {...settings}>
  //     {carouselItems}
  //   </Slider>
  // );

  // return (
  //   <Slider {...settings}>
  //     <div><h3>test 1</h3></div>
  //     <div><h3>test 2</h3></div>
  //     <div><h3>test 3</h3></div>
  //     <div><h3>test 4</h3></div>
  //   </Slider>
  // );

  // return (
  //   <div className="carousel-container" style={containerStyles}>
  //     <Slider {...settings}>
  //       {images.map((image, index) => (
  //         <div key={index}>
  //           <img src={image} alt="carousel slide" />
  //         </div>
  //       ))}
  //     </Slider>
  //     <div className="carousel-dots" style={dotsStyles}>
  //       <Dots value={currentSlide} onChange={handleSlideChange} dots={images.length} />
  //     </div>
  //   </div>
  // );
// }

// export default SimpleCarousel;


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









// _______________________________________________

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { StyledCarouselItem, StyledArrow  } from "./Carousel2.style";
// import { ChevronLeft, ChevronRight } from "react-feather"

// function SimpleCarousel() {
//   const items = [
//     {
//       image: "https://example.com/image1.jpg",
//       title: "<placeholer title 1>",
//       description: "<placeholder description 1>"
//     },
//     {
//       image: "https://example.com/image2.jpg",
//       title: "<placeholer title 2>",
//       description: "<placeholder description 2>"
//     },
//     {
//       image: "https://example.com/image3.jpg",
//       title: "<placeholer title 3>",
//       description: "<placeholder description 3>"
//     }
//   ];

//   const carouselItems = items.map((item) => {
//     return (
//       <StyledCarouselItem key={item.title}>
//         {/* <img src={item.image} alt={item.title} /> */}
//         <h3>{item.title}</h3>
//         <p>{item.description}</p>
//       </StyledCarouselItem>
//     );
//   });

//   function PrevArrow(props) {
//     const {onClick} = props;

//     const arrowStylesLeft = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       left: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
//       zIndex: 1, // ensure the arrows are above the slides
//       cursor: "pointer",
//     };

//     return (
//         <div><ChevronLeft onClick={onClick} style={arrowStylesLeft}/></div>
//     )
//   }

//   function NextArrow(props) {
//     const {onClick} = props;
//     const arrowStylesRight = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       right: "10px",
//       zIndex: 1,
//       cursor: "pointer",
//     };
//     return (
//         <div><ChevronRight onClick={onClick} style={arrowStylesRight}/></div>
//     )
//   }


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   function Arrow(props) {
//     const { direction, onClick } = props;
//     const arrowClass = `slick-arrow slick-${direction}`;

//     // Set the appropriate arrow icon based on the direction prop
//     const ArrowIconLeft = direction === "left" ? ChevronLeft : ChevronLeft;
//     const ArrowIconRight = direction === "right" ? ChevronRight : ChevronRight;

//     // Use CSS to position the arrows
//     const arrowStylesLeft = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       [direction === "left" ? "left" : "left"]: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
//       zIndex: 1, // ensure the arrows are above the slides
//     };

//     const arrowStylesRight = {
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       [direction === "left" ? "left" : "right"]: "10px", // left arrow is positioned 10px from the left, right arrow is positioned 10px from the right
//       zIndex: 1, // ensure the arrows are above the slides
//     };

//     return (
//       <div className={arrowClass} onClick={onClick}>
//         <ArrowIconLeft style={arrowStylesLeft}/>
//         <ArrowIconRight style={arrowStylesRight}/>
//       </div>
//     );
//   }





//   const dotsStyles = {
//     position: "absolute",
//     bottom: "10px",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     zIndex: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {carouselItems}
//     </Slider>
//   );

//   return (
//     <Slider {...settings}>
//       <div><h3>test 1</h3></div>
//       <div><h3>test 2</h3></div>
//       <div><h3>test 3</h3></div>
//       <div><h3>test 4</h3></div>
//     </Slider>
//   );

//   return (
//     <div className="carousel-container" style={containerStyles}>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt="carousel slide" />
//           </div>
//         ))}
//       </Slider>
//       <div className="carousel-dots" style={dotsStyles}>
//         <Dots value={currentSlide} onChange={handleSlideChange} dots={images.length} />
//       </div>
//     </div>
//   );
// }

// export default SimpleCarousel;