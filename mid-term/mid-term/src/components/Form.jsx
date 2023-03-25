import React, { useState } from "react";

//imgs
import Spinner from "../assets/spinner.svg";
import ErrorModal from "./ErrorModal";

import {
  Wrapper,
  Title,
  StyledForm,
  StyledInput,
  StyledButton
} from "./Form.styled";

const Form = (props) => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //fetch
  const fetchGender = async (name) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      console.log(data.probability);

      if (data.gender === null) {
        setError({
          title: "Sorry!!",
          message: "The name is not on our list yet :("
        });
      } else {
        props.genderReveal(data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchGender(name);
    setName("");
  };

  //errorhandler
  const errorHandler = () => {
    setError("");
  };

  return (
    <Wrapper>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
      <Title>True Gender Reveal</Title>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          type="text"
          placeholder="Your First Name"
          onChange={nameHandler}
          value={name}
        />

        <StyledButton type="submit">
          {isLoading ? (
            <img src={Spinner} style={{ verticalAlign: "middle" }} />
          ) : (
            "Let's check it out!!"
          )}
        </StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
