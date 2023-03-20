import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function Slideitems({
  imsgsrc,
  text,
  counter,
  type,
  index,
  onIncrement,
  onDecrement,
  renderDifferentDiv,
  itemContent,
}) {
  const [showinfo, setInfo] = useState(false);

  const handleUserClick = () => {
    setInfo(!showinfo);
  };

  return (
    <div className="slide-item">
      <div className="slide-item-info" onClick={handleUserClick}>
        <img src="./info.svg" alt="" className="info" />
      </div>
      {showinfo && (
        <div className="slide-item-content">
          <p>{itemContent}</p>
        </div>
      )}
      <div className="content-box">
        <img src={imsgsrc} alt="" />
        <p>{text}</p>
        <div className="counter">
          {renderDifferentDiv ? (
            <div className="toggle-switch">
              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
            </div>
          ) : (
            <div className="value-box">
              <button name="minus" className="minus" onClick={() => onDecrement(index)}>
                <AiOutlineMinus />
              </button>
              <div className="blue-border">
                <div className="input-box">
                  <p>{counter}</p>
                </div>
                <div className="type-box">
                  <p>{type}</p>
                </div>
              </div>
              <button name="plus" className="plus" onClick={() => onIncrement(index)}>
                <AiOutlinePlus />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slideitems;
