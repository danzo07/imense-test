import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { AppContext } from "../AppContext";

function Question({ index }) {
  const { handleRemoveQuestion } = useContext(AppContext);
  //we can use anonymous fucntion
  const handleRemove = () => {
    handleRemoveQuestion(index);
  };
  return (
    <div className="qst-box">
      <div className="qst-left">
        <div className="qst-text-number">
          <p>Question 1</p>
          <MdClose onClick={handleRemove} />
        </div>
        <div className="qst-text-context">
          <p>
            Dust-filter respirators may be used for continuous protection while
            silica sand is used as the blasting abrasive.
          </p>
        </div>
        <div className="qst-option">
          <p className="text-left">True</p>
          <div className="right-box">
            <div className="svg-box">
              <BsCheckLg />
            </div>
            <div className="small-upload">
              <label htmlFor="small-upload-1">
                <img src="./upload-small.svg" alt="" />
              </label>
              <input
                id="small-upload-1"
                type="file"
                accept="image/*"
                required
              />
            </div>
          </div>
        </div>
        <div className="qst-option">
          <p className="text-left">False</p>
          <div className="right-box">
            <div className="svg-box">
              <BsCheckLg />
            </div>
            <div className="small-upload">
              <label htmlFor="small-upload">
                <img src="./upload-small.svg" alt="" />
              </label>
              <input id="small-upload" type="file" accept="image/*" required />
            </div>
          </div>
        </div>
      </div>
      <div className="qst-right">
        <div className="qst-image-text">
          <p>Question Image</p>
          <p>Optional</p>
        </div>
        <label className="doted-box" htmlFor="upload-3">
          <img src="./upload.svg" alt="" />
          <div className="upload-text">
            <p>
              Drag and drop your image here or <span>browes files</span>
            </p>
            <input
              className="upload-image"
              type="file"
              accept="image/*"
              required
              id="upload-3"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Question;
