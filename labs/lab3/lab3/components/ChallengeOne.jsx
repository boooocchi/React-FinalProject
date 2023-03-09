import React, { Component } from "react";
import lookleft from "../assets/look-left.jpeg";
import lookright from "../assets/look-right.jpeg";
// import Image from "../assets/look-left.jpg";
//import images

class ChallengeOne extends Component {
  //declare the state here
  state = { direction: lookleft };

  //click left/right button handler goes here
  directionHandler = (side) => {
    this.setState({ direction: side });
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.direction} />
        </div>
        <button
          className="btn"
          onClick={(side) => this.directionHandler(lookleft)}
        >
          ⭠
        </button>
        <button
          className="btn"
          onClick={(side) => this.directionHandler(lookright)}
        >
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
