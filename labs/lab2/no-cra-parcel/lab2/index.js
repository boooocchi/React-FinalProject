import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const App = () => {
  const SNSs = [
    "Instagram",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Youtube",
    "Github",
  ];
  return (
    <section>
      <div className="wrapper">
        {SNSs.map((snsName) => (
          <Button sns={snsName} />
        ))}
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
