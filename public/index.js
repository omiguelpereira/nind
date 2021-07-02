import React from "react";
import ReactDOM from "react-dom";
import Button from "../src";
import "tailwindcss/tailwind.css"

const App = () => (
    <Button>Clica!</Button>
);

ReactDOM.render(<App />, document.getElementById("root"));