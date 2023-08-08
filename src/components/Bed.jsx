import React from "react";

const Bed = ({ bedCount }) => {
  return (
    <div>
      <p className="text-white">Bed {bedCount}</p>
      <div style={{ backgroundColor: "#525252", padding: "20px" }}s>
        {" "}
        <div className="my-4 grid grid-cols-3 gap-4">
          <div>
            <label className="text-white block mb-1">Monitor IP</label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded px-2 py-2 text-white"
              placeholder="Enter IP Addres"
              style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
            />
          </div>
          <div>
            <label className="text-white block mb-1">
              Upper Body Preset Number
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded px-3 py-2 text-white"
              placeholder="Enter preset"
              style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
            />
          </div>
          <div>
            <label className="text-white block mb-1">
              Lower Body Preset Number
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded px-3 py-2 text-white"
              placeholder="Enter preset"
              style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
            />
          </div>
        </div>
        <div className="my-4 grid grid-cols-3 gap-4">
          <div>
            <label className="text-white block mb-1">Left Preset Number</label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded px-2 py-2 text-white"
              placeholder="Enter preset"
              style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
            />
          </div>
          <div>
            <label className="text-white block mb-1">Right Preset Number</label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded px-3 py-2 text-white"
              placeholder="Enter preset"
              style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
            />
          </div>
          <div>
            <label className="text-white block mb-1">Head Preset Number</label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded px-3 py-2 text-white"
              placeholder="Enter preset"
              style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bed;
