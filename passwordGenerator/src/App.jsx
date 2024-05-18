import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  // useRed Hook
  const copiedText = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "`~@#$%^&*()_+{}|<>?/";

    for (let i = 0; i < length; i++) {
      const char = Math.round(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

  const copyToClipBoard = useCallback(()=>{
    copiedText.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-screen text-xl max-w-screen-md shadow-lg rounded-lg bg-gray-600 text-white mx-auto my-10 px-4 py-2 text-center">
        <h1 className="py-10 text-4xl">Password Generator</h1>
        <div className=" flex shadow-lg rounded-lg mb-4">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-2 outline-none text-black"
            placeholder="Password"
            readOnly
            ref={copiedText}
          />
          <button className="bg-green-950 py-1 px-2" onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className="flex gap-x-12 py-10 justify-center">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            ></input>
            <label>Length({length})</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="numberCheck"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="numberCheck">Numbers</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="specialCharCheck"
              defaultChecked={specialCharAllowed}
              onChange={() => setSpecialCharAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="specialCharCheck">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
