import Field from "./components/Field";
import Button from "./components/Button";
import React, { useReducer } from "react";
import { reducer, initialState } from "./reducer";

/**
 *
 *
 * Create a form with common features like validation and hint messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a hint message for validation errors
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 * - Manage the state of the form using React Hooks (useState, useEffect, useReducer)
 *
 */

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onEmailChange = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_EMAIL", payload: event.target.value });
    console.log(state.email);
  };

  const onPassChange = (event) => {
    event.preventDefault();
    console.log(state.pass);
    dispatch({ type: "SET_PASS", payload: event.target.value });
  };

  const clearHandler = () => {
    console.log("hi");
    dispatch({ type: "SET_PASS", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
  };

  const loginBtnHandler = (email, pass) => {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      dispatch({ type: "SET_EMAIL_HELPER", payload: "invalid email address" });
    } else {
      dispatch({ type: "SET_EMAIL_HELPER", payload: "" });
    }

    if (!pass.match(lowerCaseLetters)) {
      dispatch({
        type: "SET_PASS_HELPER",
        payload: "at least 1 lowercase letter is required"
      });
      return;
    } else if (!pass.match(upperCaseLetters)) {
      dispatch({
        type: "SET_PASS_HELPER",
        payload: "at least 1 uppercase letter is required"
      });
      return;
    } else if (!pass.match(numbers)) {
      dispatch({
        type: "SET_PASS_HELPER",
        payload: "at least 1 number is required"
      });
      return;
    } else if (pass.length < 8) {
      dispatch({
        type: "SET_PASS_HELPER",
        payload: "at least 8 letters are required"
      });
      return;
    } else {
      dispatch({
        type: "SET_PASS_HELPER",
        payload: ""
      });
    }

    dispatch({ type: "SET_PASS", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
    if (state.emailHelper === "" && state.passHelper === "") {
      alert("login succecefully!!");
    }
  };
  ////////login Btn Handler
  // const clearHandler=(event)=>{
  //   event.target.value=""
  // }
  // const loginBtnHandler

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field
          label="Email"
          pattern=""
          value={state.email}
          onChange={onEmailChange}
          helperMsg={state.emailHelper}
        />
        <Field
          label="Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={state.pass}
          onChange={onPassChange}
          helperMsg={state.passHelper}
        />

        <div className="Buttons">
          <Button label="Clear" loginHandler={clearHandler} />
          <div className="Spacer" />
          <Button
            label="Login"
            loginHandler={() => loginBtnHandler(state.email, state.pass)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// function ValidateEmail(input) {

//   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (input.value.match(validRegex)) {

//     alert("Valid email address!");

//     document.form1.text1.focus();

//     return true;

//   } else {

//     alert("Invalid email address!");

//     document.form1.text1.focus();

//     return false;

//   }

// }
