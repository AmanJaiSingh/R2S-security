import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <div className="h-24 w-full justify-evenly items-center bg-slate-200 flex ">
      <div className=" flex">
        <img src="/logo.png" className=" w-16" />
        <div className="flex flex-col justify-center font-medium">
          <span className=" text-2xl tracking-wide'' text-red-500">
            Resolution2Solution
          </span>
          <span className=" text-gray-600 tracking-widest">Guard Service</span>
        </div>
      </div>
      <div className="flex text-xl font-bold items-center">
        <button className="bg-[#25D366] p-2 font-medium text-white rounded-3xl hover:bg-white hover:text-[#25D366] border-2 duration-200 align-middle  border-[#25D366]">
          WhatsApp
        </button>

        <div className="text-sm font-semibold pl-6 flex ">
          <div className="text-xl mr-2">
            <EmailIcon style={{ color: "blue", fontSize: "45px" }} />
          </div>
          <div>
            <h1 className="font-bold text-xl">Mail us</h1>{" "}
            <h1 className="font-semibold text-red-600">
              resolution2solution@gmail.com
            </h1>
          </div>
        </div>
        <div className="text-sm font-semibold pl-2 flex ">
          <div>
            <CallIcon style={{ color: "blue", fontSize: "45px" }} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Contact us</h1>
            <h1 className="font-semibold text-red-600">8192072297</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
