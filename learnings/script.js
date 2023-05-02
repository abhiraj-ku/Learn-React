const h2 = React.createElement(
  "h2",
  { className: "sub-head" },
  "hello react you are awesome"
);

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

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);
