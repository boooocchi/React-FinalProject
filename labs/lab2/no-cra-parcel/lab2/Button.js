import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <div className="icon">
        <i className={`fa fa-${props.sns.toLowerCase()}`}></i>
      </div>
      <span>{props.sns}</span>
    </div>
  );
};

export default Button;
