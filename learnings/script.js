// const h2 = React.createElement(
//   "h2",
//   { className: "sub-head" },
//   "hello react you are awesome"
// );

/*
ReactDOM is a package in React that provides an interface for rendering React components to the DOM (Document Object Model), 
which is the programming interface for web documents.

When building a web application with React, we write our UI components in JSX,
a syntax that looks like a combination of JavaScript and HTML. 
However, to display these components in the browser,
we need to convert them into actual HTML elements and add them to the web page. This is where ReactDOM comes in.
  
ReactDOM provides methods for rendering React components to the DOM, such as ReactDOM.render(),
which takes a React component and a DOM element, and inserts the component into the specified element in the DOM.

For example, here's how you might use ReactDOM.render() to render a simple React component to the DOM:


*/

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h2);

const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces"
      ),
      React.createElement("img", {
        key: 2,
        style: {
          width: 200,
          backgroundColor: "teal",
          borderRadius: 8,
          padding: 16,
        },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { className: "input-group", key: 1 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Username"
          ),
          React.createElement("input", { key: 2, id: "username" }),
        ]),
        React.createElement("div", { className: "input-group", key: 2 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "password" },
            "Password"
          ),
          React.createElement("input", {
            key: 2,
            id: "password",
            type: "password",
          }),
        ]),
      ]),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
