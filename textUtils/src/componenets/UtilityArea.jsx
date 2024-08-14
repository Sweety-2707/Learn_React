import React, { useState } from "react";

function UtilityArea() {
  const onUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const onLowerClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const onClearClick = () => {
    let newtext = "";
    setText(newtext);
  };

  const onchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <div class="container items-center">
      <h3 className="my-3 text-center">
        Enter text in below textbox to Utilize it...
      </h3>

      <div class="flex-auto mx-32 px-20">
        <textarea
          id="textbox"
          rows="8"
          class="block m-10 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter any text"
          value={text}
          onChange={onchange}
        ></textarea>
      </div>
      <div><center>
      <button
        type="button"
        onClick={onUpClick}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Convert to Upper Case
      </button>

      <button
        type="button"
        onClick={onLowerClick}
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Convert to Lower Case
      </button>
      <button
        type="button"
        onClick={onClearClick}
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Clear TextBox
      </button>
      <h4>Summary of the Text</h4>
      <p>
        {
          text
            .trim()
            .replace(/[\t\n\r\.\?\!]/gm, " ")
            .split(" ").length
        }{" "}
        words and {text.length} characters {text.split("\n").length} sentences
      </p>
      </center></div>
    </div>
  );
}

export default UtilityArea;
