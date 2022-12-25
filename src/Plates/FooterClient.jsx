import React, { useEffect, useState } from "react";
import data from "../data/ClientData.js";
import Carousel from "react-elastic-carousel";

const FooterClient = () => {
  const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const last = data.length - 1;
  //     if (index < 0) {
  //       setIndex(last);
  //     }
  //     if (index > last) {
  //       setIndex(0);
  //     }
  //   }, [index, data]);

  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(index + 1);
  //     }, 5000);
  //     clearInterval(slider);
  //   }, [index]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  //   console.log(data);
  return (
    <div className="w-full flex flex-col py-10 bg-red-400">
      <div className="w-full flex-col items-center   text-6xl text-gray-100 flex justify-center">
        <h1>Client</h1>
        <h2 className="text-sm">
          At R2S Security, our security personnel understand the specialized
          needs of customer environment.
        </h2>
      </div>
      <Carousel
        breakPoints={breakPoints}
        className=" w-full px-[200px] flex pt-10 justify-evenly flex-wrap"
      >
        {data.map((item, index) => (
          <div
            className="p-2 rounded-2xl font-bold flex justify-center  w-48 bg-green-400"
            key={index}
          >
            {item.title}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FooterClient;
