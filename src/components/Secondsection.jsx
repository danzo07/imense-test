import React, { useContext } from "react";
import Question from "./Question";
import { AppContext } from "../AppContext";



function Secondsection() {
    const { numQuestions, handleAddQuestion } = useContext(AppContext);

    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
      questions.push(<Question key={i} />);
    }
    
  return (
    <div className="secondsection-grid">
      <div className="header-text">
        <p>Training quiz</p>
        <p>
          Here you can manage the questions by clicking on the “Add Question”
          button and choose from the available types of question. You can add up
          to 100 questions.
        </p>
      </div>
      {questions}
      <button className="add-btn" onClick={handleAddQuestion}>
        Add Question +
      </button>
    </div>
  );
}

export default Secondsection;
