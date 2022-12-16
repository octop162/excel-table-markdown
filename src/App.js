import { useState } from "react";

import "./App.css";
import { convertText } from "./convert.js";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  let inputOnChange = (event) => {
    setInput(event.target.value);
    setOutput(convertText(event.target.value));
  };

  let copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div id="container">
      <div id="input">
        <div id="input_header">
          <h3>input</h3>
        </div>
        <textarea id="input_text" onChange={inputOnChange} value={input}></textarea>
      </div>
      <div id="output">
        <div id="output_header">
          <h3>
            output <button onClick={copy}>😎</button>
          </h3>
        </div>
        <textarea id="output_text" readOnly={true} value={output} />
      </div>
    </div>
  );
}

export default App;
