import React from "react";

const PlusMinus = ({ plusMinus, counter, setCounter }) => {
  if (plusMinus === "plus") {
    return;
    <button
      type="button"
      className="plusMinus"
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      <img src={plusMinus} alt="" />
    </button>;
  } else {
    return;
    <button
      type="button"
      className="plusMinus"
      onClick={() => {
        setCounter(counter - 1);
      }}
    >
      <img src={plusMinus} alt="" />
    </button>;
  }
};

export default PlusMinus;
