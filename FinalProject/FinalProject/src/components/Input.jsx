import React, { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  return (
    <input
      type={props.type}
      ref={ref}
      value={props.value}
      onChange={props.onChange}
      className="w-[11rem] text-blueblack border-blueblack border-solid border rounded-[10px] px-3 pt-[2px] pb-[4px]  mb-2 max-sm:w-[80%] max-xs:text-[0.9rem] "
    />
  );
});

export default Input;
