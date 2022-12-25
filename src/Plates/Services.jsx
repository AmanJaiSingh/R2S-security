import React from "react";
import Data from "../data/ServiceData.js";

const Services = () => {
  return (
    <div className="mx-20 flex flex-col items-center">
      <div className="text-4xl font-semibold mt-8 mb-10">
        <span className="w-2 border-l-8 border-blue-900 pr-3 "> </span> Security
        Service
      </div>
      <p className=" w-5/6 font-semibold pl-6">
        Security is our core business and we are very passionate about our work.
        Manned Guarding is no longer a one-size-fits-all solution. The
        expectation of security personnel capabilities have evolved and vary
        widely, at times even within the same business. Depending on the size,
        location, nature and requirements of the client’s business, Globe
        Security customises it’s solution after understanding client’s pain
        points. We provide wide range of Security Service which caters to all
        type of Security needs.
      </p>
      <div className="flex flex-wrap w-5/6 justify-evenly ">
        {Data.map((item, index) => (
          <div
            key={index}
            className="hover:shadow-[5px_0px_5px_5px_rgba(241,40,25,0.3)] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-300 h-[350px] p-2 w-[250px]  items-center flex flex-col  m-2 my-5"
          >
            <div className="h-[200px] w-[225px] ">
              <img
                src={item.url}
                alt=""
                className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"
              />
              <span className="w-full pt-1 font-medium text-md  flex justify-center">
                {item.title}
              </span>
            </div>
            <div className="text-sm font-medium box mt-8">{item.dic}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
