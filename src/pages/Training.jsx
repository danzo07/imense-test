import React from "react";
import Firstsection from "../components/Firstsection";
import Secondsection from "../components/Secondsection";
import Thirdsection from "../components/Thirdsection";

function Training() {
  return (
    <div className="training">
      <div className="training-container">
        <div className="training-action">
          <h2>Edit Training “Working At Height”</h2>
          <div className="action-btn">
            <button className="cancel-btn">Cancel</button>
            <button className="Update-btn">Update and save</button>
          </div>
        </div>
        <Firstsection />
        <Secondsection />
      </div>
      <Thirdsection />
    </div>
  );
}

export default Training;
