import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const letterCapitalize = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Letter Capitalized", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Handled Extra Spaces", "success");
  };
  const copyText = () => {
    let text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard", "success");
  };
  const clearText = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const toLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const toUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const clickOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={clickOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your Text Here"
            style={{
              backgroundColor: props.mode === "dark" ? "#071330" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={letterCapitalize}>
          Capital First Letter
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>{text}</p>
        <p>
          <b>Count entered Word And Character</b>
        </p>
        <p>
          {text.split(" ").length}-Words and {text.length}-Character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Takes to Read </p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in above text area to preview"}
        </p>
      </div>
    </>
  );
}
