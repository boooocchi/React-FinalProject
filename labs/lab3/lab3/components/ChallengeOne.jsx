import React, { Component } from "react";
//import images

class ChallengeOne extends Component {
  //declare the state here
  state = {};

  //click left/right button handler goes here
  // directionHandler = (direction) => {
  //   this.setState(() => ({ state: direction }));
  // };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={`../assets/look-${this.state.direction}.jpeg`}
            alt=""
          />
        </div>
        <button className="btn" onClick={this.directionHandler}>
          ⭠
        </button>
        <button className="btn" onClick={this.directionHandler}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
