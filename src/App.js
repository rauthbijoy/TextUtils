import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FormBox from "./components/FormBox";
import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  //this is for dark mode in navbar------//
  const [mode, setMode] = useState("light");

  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };
  //---------//

  //form box logic//
  const [text, setText] = useState("Enter Your Text Here!");
  const [alert, setAlert] = useState("this is the alert through useState");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Your text have been converted to Uppercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); //gets the value entered in a field.
  };
  //---------//

  //for alert//
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  //----------//

  return (
    <>
      <Router>
        <NavBar
          about="About TextUtils"
          mode={mode}
          toggleBtn={toggleBtn}
          title="TextUtils"
        />

        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<AboutUs about="About TextUtils" />} />
          
          <Route
            path="/"
            element={
              <FormBox
                handleUpClick={handleUpClick}
                handleOnChange={handleOnChange}
                text={text}
                heading="Enter your Text Below"
                mode={mode}
                alert={alert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
