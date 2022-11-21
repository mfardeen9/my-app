import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("To Upper case" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard!", "success");
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!", "success");
    };

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter text here!");

    return (
        <>
            <div
                className="container fluid"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        rows="8"
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#324a5d" : "white",
                            color: props.mode === "dark" ? "white" : "#042743",
                        }}
                    ></textarea>
                </div>
                <div >
                <button disabled={text.length===0} className="btn btn-primary mx-2  " onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
                    Convert to LowerCase
                </button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
                    Clear text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 " onClick={handleCopy}>
                    Copy Text
                </button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 " onClick={handleExtraSpace}>
                    Remove Extra Space
                </button>
                </div>
            </div>
            <div
                className="container-fluid my-3"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h2>Your text summary</h2>
                <p>
                    {" "}
                    {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
