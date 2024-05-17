import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function onPlus() {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  function onMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Time Counter</h1>
      <h3 className="text-3xl font-bold underline"> Counter Value : {count}</h3>
      <button id="plus" onClick={onPlus}>Add Value</button>
      <button id="minus" onClick={onMinus}>Minus Value</button>
      <footer>Counter limit between 0 and 20 </footer>
    </>
  );
}

export default App;
