import React from "react";

const Display = (props) => {
  return (
    <div className={`display ${props.height}`}>
      <span>{props.display}</span>
    </div>
  );
};

export default Display;
