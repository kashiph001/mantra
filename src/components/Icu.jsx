import React, { useState } from "react";
import Bed from "./Bed";
import { FaPlus } from "react-icons/fa";

const Icu = () => {
  const [bedCount, setBedCount] = useState(1);

  const addBed = () => {
    setBedCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="my-4 grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <label className="text-white block mb-1">ICU Name</label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            placeholder="Enter ICU name"
            style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
          />
        </div>
      </div>
      <div className="my-4 grid grid-cols-4 gap-4">
        <div>
          <label className="text-white block mb-1">IP Address of camera</label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            placeholder="Enter IP Addrees"
            style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
          />
        </div>
        <div>
          <label className="text-white block mb-1">RTSP Port Number</label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            placeholder="Enter RTSP Port"
            style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
          />
        </div>
        <div>
          <label className="text-white block mb-1">UserName</label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            placeholder="Enter UserName"
            style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
          />
        </div>
        <div>
          <label className="text-white block mb-1">Password</label>
          <input
            type="password"
            className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            placeholder="Enter Password"
            style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
          />
        </div>
      </div>
      {[...Array(bedCount)].map((_, index) => (
        <Bed bedCount={index + 1} key={index} />
      ))}
      <div className="relative w-848 h-112 mt-10" onClick={addBed}>
        <textarea
          className="w-full h-full px-3 py-2 border rounded-md bg-gray-700 focus:ring focus:ring-blue-300 resize-none"
          disabled
          style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
        ></textarea>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white">
            <FaPlus />
          </span>
        </div>
      </div>
    </>
  );
};

export default Icu;
