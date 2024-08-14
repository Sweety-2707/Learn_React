import { useState } from "react";
import Header from "./componenets/Header";
import UtilityArea from "./componenets/UtilityArea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header title="TextUtils"/>
    <UtilityArea/>
    </>
  );
}

export default App;
