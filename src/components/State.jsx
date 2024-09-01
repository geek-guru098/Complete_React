import React, { useState } from "react";

function State(props) {
  const [text, setText] = useState(""); // Initialize state with an empty string

  return (
    <>
      <div className="mx-6 my-8 flex justify-center">
        <form>
          <p className="rounded bg-slate-600 bg-blend-saturation font-bold text-blue-500">
            {props.text}
          </p>
          {/* Using props to display text */}
          <textarea
            className="resize-y py-3 px-4 border border-purple-800 w-80 h-80"
            placeholder="Enter text"
            value={text} // Controlled input
            onChange={(e) => setText(e.target.value)} // Event handler for updating state
          />
        </form>
      </div>
      <div className="flex space-x-4 justify-center mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
          onClick={() => {
            setText(text.toUpperCase());
          }}
        >
          Uppercase
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-full"
          onClick={() => {
            setText(text.toLowerCase());
          }}
        >
          Lowercase
        </button>
      </div>
      <div className="flex justify-center">
        <p className="px-2 py-2 mx-2 my-4   rounded-3xl bg-blue-300">
          Numbers of character are: {text.length}
        </p>
        <p className="px-2 py-2 mx-2 my-4   rounded-3xl bg-green-600">
          {" "}
          Words:{text.split(" ").length}
        </p>
      </div>
    </>
  );
}

export default State;
