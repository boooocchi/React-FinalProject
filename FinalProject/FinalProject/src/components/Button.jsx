import React from "react";

const Button = ({ onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="btn bg-primary w-[8rem] text-[white] rounded-[7px] py-3  mt-5 text-[1.1rem] max-md:w-full text-center hover:bg-[#0b8b47] max-xs:py-2 max-xs:mt-3 "
    >
      {children}
    </button>
  );
};

export default Button;
