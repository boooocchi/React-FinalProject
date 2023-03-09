import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const App = () => {
  const SNSs = [
    "instagram",
    "facebook",
    "youtube",
    "github",
    "linkedin",
    "twitter",
  ];
  return (
    <section>
      <div className="wrapper">
        <Button sns={SNSs[0]} />
        <Button sns={SNSs[1]} />
        <Button sns={SNSs[2]} />
        <Button sns={SNSs[3]} />
        <Button sns={SNSs[4]} />
        <Button sns={SNSs[5]} />
      </div>
    </section>
  );
};

const rootNode = document.getElementById("root");
// for (let i = 1; i < SNSs.length - 1; i++) {
//   ReactDOM.render(<App sns={SNSs[i]} />, rootNode);
// }

ReactDOM.render(<App />, rootNode);

// function App() {
//     return (
//         <div>
//             <Card name={dogs[0].name} image={dogs[0].image} />
//             <Card name={dogs[1].name} image={dogs[1].image} />
//             <Card name={dogs[2].name} image={dogs[2].image} />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root"));
