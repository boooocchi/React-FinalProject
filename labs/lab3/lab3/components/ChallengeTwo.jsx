import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
  };

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount = () => {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({ arr: studentList });
    }, 3000);
  };

  //random button handler
  randomize = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    this.setState({ arr: array });
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.arr.map((student) => {
              return <li>{student}</li>;
            })}
          </ul>
        </div>
        <button
          className="btn large"
          onClick={(arr) => this.randomize(studentList)}
        >
          Randomize
        </button>
      </>
    );
  }
}
