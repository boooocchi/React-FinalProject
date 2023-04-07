import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ChallengeOne from "./components/ChallengeOne";
import ChallengeTwo from "./components/ChallengeTwo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Lab 102</h1>
        <ChallengeOne></ChallengeOne>
        <ChallengeTwo></ChallengeTwo>
      </div>
    );
  }
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
