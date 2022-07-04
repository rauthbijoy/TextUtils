import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FormBox from "./components/FormBox";
import AboutUs from "./components/AboutUs";

function App() {
  //this is for dark mode in navbar------//
  const [mode, setMode] = useState("light");

  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };
  //---------//

  //this for UpperCase conversion logic//
  const [text, setText] = useState("Enter Your Text Here!");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);    //gets the value entered in a field.
  };
  //---------//

  return (
    <>
      <NavBar
        about="About TextUtils"
        mode={mode}
        toggleBtn={toggleBtn}
        title="TextUtils"
      />

      <FormBox
        handleUpClick={handleUpClick}
        handleOnChange={handleOnChange}
        text={text}
        heading="Enter your Text Below"
        mode = {mode}
      />

      <AboutUs
      about="About TextUtils"
      />
    </>
  );
}

export default App;
