import { useState, useEffect } from "react";
import classNames from "classnames";

//image
import male from "./assets/male.jpg";
import female from "./assets/female.jpg";

//style
import { Wrapper, BackgroundLeft, BackgroundRight } from "./App.styled";
import "./App.css";

//component
import Form from "./components/Form";
import Probability from "./components/Probability";

function App() {
  const [imgRight, setImgRight] = useState("");
  const [imgLeft, setImgLeft] = useState("");
  const [prob, setProb] = useState("");

  const greyLeft = classNames({
    greyScale: imgLeft === "grey",
    color: imgLeft === "color"
  });
  const greyRight = classNames({
    greyScale: imgRight === "grey",
    color: imgRight === "color"
  });

  useEffect(() => {
    let reset = setTimeout(() => {
      setImgLeft("");
      setImgRight("");
      setProb("");
    }, 10000);
    // こういう処理を書く
    return () => {
      clearTimeout(reset);
    };
  }, [prob]);

  const revealFunction = (data) => {
    if (data.gender === "male") {
      setImgRight("grey");
      setImgLeft("color");
      setProb(data.probability);
    } else {
      setImgLeft("grey");
      setImgRight("color");
      setProb(data.probability);
    }
  };
  return (
    <>
      <Form genderReveal={revealFunction} />
      <Wrapper>
        <BackgroundLeft src={male} className={greyLeft} />
        <BackgroundRight src={female} className={greyRight} />
      </Wrapper>
      <Probability probability={prob} />
    </>
  );
}

export default App;
