import React from "react";

const Button = ({ onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="btn bg-primary w-[6rem] text-[white] rounded-[7px] px-1 pt-[0.2rem]  pb-[0.3rem] mt-5 text-[1.1rem] max-md:w-[80%] max-md:text-center hover:bg-[#0b8b47] max-xs:pt-[0.1rem] max-xs:pb-[0.2rem] "
    >
      {children}
    </button>
  );
};

export default Button;
