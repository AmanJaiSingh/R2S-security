import React, { useState } from "react";
import Data from "../data/SliderData.js";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div className=" slider_con w-full h-[745px] object-contain flex  relative overflow-hidden">
      <div className="arrow left-3" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </div>
      <div
        className="Wraper_slider "
        style={{ transform: `translate( ${sliderIndex * -100}vw)` }}
      >
        {Data.map((item, index) => (
          <div
            key={index}
            className="Slider_1 "
            style={{ background: `url(${item.img})` }}
          >
            <div className="flex-1 info_con text-white font-bold ">
              <h1>{item.title}</h1>
              <p>{item.dis}</p>
              <button className="border-2">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right-3" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
