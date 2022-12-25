import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = (e) => {
  const handle = () => {
    // e.preventDefault();
    toast.success("We Will Contact You Shortly");
  };

  return (
    <div className=" flex-4 w-[500px]  rounded-2xl h-[500px] font-mono shadow-2xl shadow-red-400 flex flex-col justify-between items-center ">
      <div className="text-5xl p-1 rounded-t-2xl   w-full text-white bg-slate-700 flex justify-center">
        Get Started Today
      </div>
      <div className="w-full px-8 text-2xl flex flex-col h-[300px]  justify-between">
        <div>
          <div className="flex justify-between pr-2">
            {" "}
            <span>Name</span> <span>🤵</span>
          </div>
          <input
            type="text"
            className="border-2 border-gray-400 w-full rounded-md  outline-1 outline-blue-500 text-sm p-2"
            required
            placeholder=""
            name=""
            id=""
          />
        </div>
        <div>
          <div className="flex justify-between pr-2">
            <span>Contact </span> <span>☎️</span>
          </div>
          <input
            type="text"
            className="w-full rounded-md border-2 border-gray-400  outline-1 outline-blue-500 text-sm p-2"
            name=""
            required
            id=""
            placeholder=""
          />
        </div>
        <div>
          <div className="flex justify-between pr-2">
            <span>Email </span> <span>📧</span>
          </div>
          <input
            type="email"
            name=""
            required
            placeholder=""
            id=""
            className="w-full rounded-md border-2 outline-1 border-gray-400 outline-blue-500 text-sm p-2"
          />
        </div>
      </div>
      <div className="w-full flex justify-center pb-5">
        <button
          className="bg-blue-400 rounded-lg text-white h-12 w-36"
          onClick={handle}
        >
          Sumbit
        </button>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Form;
