import React from "react";

// style
import { Wrapper, H2, Prob } from "./Probability.styled";

const Probability = ({ probability }) => {
  const percentage = (parseFloat(probability) * 100).toFixed(1);
  console.log(percentage);
  return (
    <Wrapper>
      {probability && (
        <>
          <H2>Probability</H2>
          <Prob>{`${percentage}%`}</Prob>
        </>
      )}
    </Wrapper>
  );
};
export default Probability;
