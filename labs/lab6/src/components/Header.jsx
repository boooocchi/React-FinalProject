import React from "react";
import { BUTTON, WRAPPER, SPAN } from "./Header.styled.js";

const HeaderOne = ({ user, setUser }) => {
  return (
    <WRAPPER>
      <SPAN>Welcome,{user}</SPAN>
      <BUTTON onClick={() => setUser("")}>Logout</BUTTON>
    </WRAPPER>
  );
};

export default HeaderOne;
