import React from "react";

const Button = ({ onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="btn bg-primary w-[100px] text-[white] rounded-[10px] px-1 py-[0.3rem] mt-8 text-[1.1rem]"
    >
      {children}
    </button>
  );
};

export default Button;
