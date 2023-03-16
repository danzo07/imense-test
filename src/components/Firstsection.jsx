import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Normaldropdown from  "./Normaldropdown";
import options from "../options.json";

function Firstsection() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (option, dropdownId) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [dropdownId]: option,
    }));
  };

  return (
    <div className="grid-box">
      <div className="box-1">
        <div className="box-category">
          <p className="text-left">Category</p>
          <button className="text-right">add topic +</button>
          <div className="box-1__dropdown">
            <Dropdown
              options={options.find((opt) => opt.id === "category").options}
              value={selectedOptions["category"]}
              onChange={(option) => handleChange(option, "category")}
              placeholder="Select category"
            />
          </div>
        </div>
        <div className="box-topic">
          <p className="text-left">Topic</p>
          <p className="text-right">add new +</p>
          <div className="box-1__dropdown">
            <Dropdown
              options={options.find((opt) => opt.id === "topic").options}
              value={selectedOptions["topic"]}
              onChange={(option) => handleChange(option, "topic")}
              placeholder="Select a topic"
            />
          </div>
        </div>
        <div className="box-years">
          <p className="text-left">Valid for</p>
          <div className="box-1__dropdown">
            <Normaldropdown
              options={options.find((opt) => opt.id === "years").options}
              value={selectedOptions["years"]}
              onChange={(option) => handleChange(option, "years")}
              placeholder="Select years"
            />
          </div>
        </div>
        <div className="box-training">
          <p className="text-top">Training</p>
          <div className="box-training__sub">
            <p>Working at height</p>
            <div className="tr-right">
              <img src="./vca.svg" alt="" />
              <img src="./delete.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="box-work">
          <p className="text-top">Assign To</p>
          <div className="box-1__dropdown">
            <Normaldropdown
              options={options.find((opt) => opt.id === "work").options}
              value={selectedOptions["work"]}
              onChange={(option) => handleChange(option, "work")}
              placeholder="worker"
            />
          </div>
        </div>
        <div className="dep-func">
          <div className="box-Departments">
            <p className="text-left">Departments</p>
            <p className="text-right-grey">Optional</p>
            <div className="box-1__dropdown">
              <Normaldropdown
                options={
                  options.find((opt) => opt.id === "departments").options
                }
                value={selectedOptions["departments"]}
                onChange={(option) => handleChange(option, "departments")}
                placeholder="Select departments"
              />
            </div>
          </div>
          <div className="box-function">
            <p className="text-left"> Functions</p>
            <p className="text-right-grey">Optional</p>
            <div className="box-1__dropdown">
              <Normaldropdown
                options={options.find((opt) => opt.id === "functions").options}
                value={selectedOptions["functions"]}
                onChange={(option) => handleChange(option, "functions")}
                placeholder="Select functions"
              />
            </div>
          </div>
        </div>
        <div className="box-description">
          <p className="text-left">Description</p>
          <textarea name="desc" id="" placeholder="type here"></textarea>
        </div>
      </div>
      <div className="box-2">
        <p className="text-grey">Image</p>
        <div className="doted-box">
          <img src="./upload.svg" alt="" />
          <div className="upload-text">
            <p>Drag and drop your image here or</p>
            <input
              type="file"
              accept="image/*"
              required
              placeholder="browsefile"
            />
          </div>
        </div>
        <p className="ft-text">
          *Only JPG, PNG files are allowed. Image must be less than 2 MB
        </p>
      </div>
      <div className="box-3"></div>
    </div>
  );
}

export default Firstsection;
