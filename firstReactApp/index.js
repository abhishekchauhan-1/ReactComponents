// //First way to create React Element
// const ReactHeading = React.createElement(
//   "h1",
//   { className: "heading" },
//   "hello React I am your First element"
// );

// //Second Way to Create react react element
// const SecondWayReact = React.createElement("h2", {
//   className: "head",
//   id: "header",
//   children: "hello I am your react Children",
// });

// const ImageElement = React.createElement("img", {
//   src: "https://files.codingninjas.in/coding-ninjas-24647.png",
//   alt: "image-cn",
//   className: "react-image",
// });

// const containerElement = React.createElement(
//   "div",
//   null,
//   ReactHeading,
//   SecondWayReact,

// );

//This is the JSX
// const jsxheading =
//   <>
//     <h1>hello JSX</h1>
//     <p>This is your first Paragraph</p>
//   </>

//This is the first React Component

const App = () => (
  
    <>
      <h1>hello First React Component </h1>
      <p>This is your first Paragraph</p>
    </>

)

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.getElementById("root")).render(SecondWayReact);

// console.log(ReactHeading);

// console.log(SecondWayReact);
