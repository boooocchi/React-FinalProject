import React, { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  return (
    <input
      type={props.type}
      ref={ref}
      value={props.value}
      onChange={props.onChange}
      className="border-blueblack border-solid border rounded-[10px] px-2"
    />
  );
});

export default Input;
