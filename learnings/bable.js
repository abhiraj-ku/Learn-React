//in this we will use babel to write our jsx code
// import React from "react";
// import "./styles.css";
//this is a jsx code
const title = "lawda.com";
const h2 = <h2 style={{ color: "green" }}>Hello world {title} </h2>;
const elem = (
  <div>
    <p style={{ fontSize: "25px", color: "red" }}>
      Hello world how are you learning react ha!
    </p>
    <button
      style={{
        backgroundColor: "yellow",
        padding: "12px",
        marginRight: "15px",
      }}
    >
      Click Me !
    </button>
    <button
      style={{
        backgroundColor: "yellow",
        padding: "12px",
        marginRight: "15px",
      }}
    >
      hello
    </button>
    <button
      style={{
        backgroundColor: "yellow",
        padding: "12px",
        marginRight: "15px",
      }}
    >
      world
    </button>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
const root2 = ReactDOM.createRoot(document.querySelector("#root2"));
root.render(elem);
root2.render(h2);
