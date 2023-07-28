const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Im an H1 tag"),React.createElement("h1",{},"Im an H2 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);