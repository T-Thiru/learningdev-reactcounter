import React from "react";
import { useState } from "react";
import PlusMinus from "../components/PlusMinus";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";
import Display from "../components/Display";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container-counter">
      <div
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        <PlusMinus plusMinus={minus} />
      </div>

      <div className="container-display">
        <Display display={counter} height="H" />
        <div
          onClick={() => {
            setCounter(0);
          }}
        >
          <Display display="Reset" />
        </div>
      </div>

      <div>
        <PlusMinus plusMinus={plus} counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default Counter;
