import React, { useState } from "react";
import Logo from "../assets/Images/Logo.png";
import Icu from "./Icu";

const MantraForm = () => {
  const [icuCount, setIcuCount] = useState(1);

  const handleAddIcu = () => {
    setIcuCount(icuCount + 1);
  };
  return (
    <div className="bg-gray-700 p-8">
      <img src={Logo} alt="company-logo" />
      <div className="bg-gray-700">
        <h2 className="mb-4 text-white text-2xl ">Add Hospital</h2>
        <div
          className="bg-gray-700 p-6 rounded-lg"
          style={{ backgroundColor: "rgb(89, 89, 89)" }}
        >
          <p className="text-white">Hospital Details</p>
          <div className="w-full border-dashed border-t border-white my-2"></div>
          <div className="my-4 grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <label className="text-white block mb-1">Hospital Name</label>
              <input
                type="text"
                className="w-full bg-gray-700 rounded px-3 py-2 text-white"
                placeholder="Enter hospital name"
                style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
              />
            </div>
          </div>
          <div className="my-4 grid grid-cols-3 gap-4">
            <div>
              <label className="text-white block mb-1">Hospital Pincode</label>
              <input
                type="text"
                className="w-full bg-gray-700 rounded px-3 py-2 text-white"
                placeholder="Enter hospital pincode"
                style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
              />
            </div>
            <div>
              <label className="text-white block mb-1">Hospital State</label>
              <select
                className="w-full bg-gray-700 rounded px-3 py-2 text-white"
                style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
              >
                <option>Select State</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div>
              <label className="text-white block mb-1">Hospital City</label>
              <select
                className="w-full bg-gray-700 rounded px-3 py-2 text-white"
                style={{ backgroundColor: "rgb(70, 70, 70)", border: "none" }}
              >
                <option>Select City</option>
                <option>Option A</option>
                <option>Option B</option>
              </select>
            </div>
          </div>
          {Array.from({ length: icuCount }, (_, index) => (
            <Icu key={index} />
          ))}
          <div className="flex flex-col gap-8">
            <p className="text-white">ICU Details</p>
            <button
              className="bg-custom-color hover:bg-custom-color-dark text-white py-2 px-4 rounded"
              type="button"
              style={{ backgroundColor: "#FF5733", width: "166px" }}
              onClick={handleAddIcu}
            >
              + Add New ICU
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MantraForm;
