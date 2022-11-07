import React from "react";

const PlusMinus = (props) => {
  return (
    <button type="button" className="plusMinus" disabled>
      <img src={props.plusMinus} alt="" />
    </button>
  );
};

export default PlusMinus;
