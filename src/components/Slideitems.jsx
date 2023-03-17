import React from "react";
import{AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai";

function Slideitems({
  imsgsrc,
  text,
  counter,
  type,
  index,
  onIncrement,
  onDecrement,
  renderDifferentDiv,
}) {
  return (
    <div className="slide-item">
      <img src="./info.svg" alt="" className="info" />
      <div className="content-box">
        <img src={imsgsrc} alt="" />
        <p>{text}</p>
        <div className="counter">
          <button className="minus" onClick={() => onDecrement(index)}>
            <AiOutlineMinus />
          </button>
          {renderDifferentDiv ? (
            <div>This is a different.</div>
          ) : (
            <div className="value-box">
              <div className="input-box">
                <p>{counter}</p>
              </div>
              <div className="type-box">
                <p>{type}</p>
              </div>
            </div>
          )}
          <button className="plus" onClick={() => onIncrement(index)}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slideitems;
