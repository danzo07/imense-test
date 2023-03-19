import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Slide = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (splide) => {
    setCurrentIndex(splide.index);
  };

  const progressBarStyle = {
    width: `${((currentIndex + 1) / children.length) * 100}%`,
  };

  return (
    <div className="slide-container">
      <div className="slide-wrapper">
        <Splide
          options={{
            perPage: 6,
            gap: 9,
            pagination: false,
            breakpoints: {
              1095: {
                perPage: 3,
              },
              573: {
                perPage: 1,
              },
            },
          }}
          onMove={handleSlideChange}
        >
          {React.Children.map(children, (child) => (
            <SplideSlide>{child}</SplideSlide>
          ))}
        </Splide>
        <div className="progress-bar-container">
          <div className="progress-bar" style={progressBarStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
