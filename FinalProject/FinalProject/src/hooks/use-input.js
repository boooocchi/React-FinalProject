import { useState } from "react";
import { useSelector } from "react-redux";

const useInput = (method) => {
  const [enteredValue, setEnteredValue] = useState("");
  const validation = method(enteredValue);
  // const user = useSelector((state) => {
  //   state.user;
  // });
  const inputValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return { enteredValue, inputValueHandler, reset, validation };
};

export default useInput;
