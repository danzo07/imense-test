import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // this code updates the selectedOptions state when an option is selected from a dropdown by creating a new object with the updated value for the specific dropdown.
  const [selectedOptions, setSelectedOptions] = useState({});
  const handleChange = (option, dropdownId) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [dropdownId]: option,
    }));
  };

  //input file state
  const [pdfFile, setPdfFile] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };
  const handleRemovePdf = () => {
    setPdfFile(null);
  };


  //question state
  const [numQuestions, setNumQuestions] = useState(1);
  
  const handleAddQuestion = () => {
    if (numQuestions < 5) {
      setNumQuestions(numQuestions + 1);
    }
  };
  const handleRemoveQuestion = (index) => {
    if (numQuestions > 1) {
      setNumQuestions(numQuestions - 1);
    }
  };
  

  return (
    <AppContext.Provider
      value={{
        selectedOptions,
        pdfFile,
        handleChange,
        handleFileUpload,
        handleRemovePdf,
        numQuestions,
        setNumQuestions,
        handleAddQuestion,
        handleRemoveQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
