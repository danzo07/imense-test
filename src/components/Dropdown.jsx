import React from "react";
import Select from "react-select";

const Dropdown = ({ options, value, onChange, placeholder,showImage }) => {
  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      height: "36px",
      gap: "6px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      display: "grid", 
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      height: "40px",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      gap: "6px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      //isClearable={true}
      //getOptionLabel function is used to render the label for each option in the dropdown
      getOptionLabel={(option) => (
        <>
          {showImage && <img src={option.image} width="20" height="20" />}
          <span>{option.label}</span>
        </>
      )}
      //getOptionValue function is used to get the value for each option
      getOptionValue={(option) => option.value}
    />
  );
};

export default Dropdown;
