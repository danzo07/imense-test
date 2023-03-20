import React, { useState } from "react";
import Slide from "./Slide";
import Slideitems from "./Slideitems";

function Thirdsection() {
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);

  const handleIncrement = (index) => {
    const newCounters = [...counters]; //copy the values of the original counters
    newCounters[index] += 1; //increments the value at the specified index in the new array
    setCounters(newCounters); //update the state of the counters variable with the new array of values.
  };
  const handleDecrement = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };
  return (
    <Slide>
      <Slideitems
        imsgsrc="./dice.svg"
        text="Random questions"
        type=""
        index={0}
        counter={counters[0]}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        itemContent="Choose number of questions"
      />
      <Slideitems
        imsgsrc="./time.svg"
        text="Time per question"
        index={1}
        counter={counters[1]}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        type="s"
        itemContent="When the countdown is finished, the system will automatically move to the next question."
      />
      <Slideitems
        imsgsrc="./checkmark.svg"
        text="Passing score"
        type="%"
        index={2}
        counter={counters[2]}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        itemContent="Passing score purcantages"
      />
      <Slideitems
        imsgsrc="./camera.svg"
        text="Webcam validation"
        type="min"
        index={3}
        counter={counters[3]}
        renderDifferentDiv
        itemContent="Turn on or off"
      />
      <Slideitems
        imsgsrc="./time2.svg"
        text="Time Expected"
        type="min"
        index={4}
        counter={counters[4]}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        itemContent="Time expected in minutes"
      />
      <Slideitems
        imsgsrc="./attempt.svg"
        text="Attemps"
        type=""
        index={5}
        counter={counters[5]}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        itemContent="Number of attempts"
      />
    </Slide>
  );
}

export default Thirdsection;
