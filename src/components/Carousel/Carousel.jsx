import { ChevronLeft, ChevronRight } from "react-feather"
import { useState, useEffect } from "react"
import { carouselStyles } from './Carousel.style.jsx';

// export default function Carousel({
//   children: slides,
//   autoSlide = false, // Default = false
//   autoSlideInterval = 5000,
// }) {
//   const [curr, setCurr] = useState(0) // Dictates initial state of carousel (Displays first image)

//   const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1)) // Moves back through the array of images
//   const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)) // Moves forward through the array of images

//   useEffect(() => { // Responsible for the Carousel's autoslide functionality | default = off
//     if (!autoSlide) return
//     const slideInterval = setInterval(next, autoSlideInterval)
//     return () => clearInterval(slideInterval)
//   }, [])
//   return (
//     // Localised styling for experimental purposes -> Can be moved to dedicated file

//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}>
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           // ### TO FIX #### | LEFT and RIGHT arrows are not stylized and are not centered 
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           // ### TO FIX #### | LEFT and RIGHT arrows are not stylized and are not centered 
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
//         <ChevronRight size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


// export default function Carousel({
//   children: slides,
//   autoSlide = false, // Default = false
//   autoSlideInterval = 5000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full">{slide}</div>
//         ))}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
//           <ChevronLeft size={40} />
//         </button>
//         <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
//           <ChevronRight size={40} />
//         </button>
//       </div>
//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Carousel({
  children: slides,
  autoSlide = false, // Default = false
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={carouselStyles.carouselContainer}>
      <div
        className={carouselStyles.carouselSlides}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={carouselStyles.carouselSlide}>
            {slide}
          </div>
        ))}
      </div>
      <div className={carouselStyles.carouselArrows}>
        <button
          onClick={prev}
          className={carouselStyles.carouselArrow}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className={carouselStyles.carouselArrow}
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className={carouselStyles.carouselIndicators}>
        <div className={carouselStyles.carouselIndicatorList}>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                ${carouselStyles.carouselIndicator}
                ${curr === i ? carouselStyles.activeIndicator : carouselStyles.inactiveIndicator}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}