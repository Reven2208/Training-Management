import React from 'react';
import { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const validateInputs = () => {
    if (!frameInputValue || !frameInput1Value || !selectedOption) {
      setValidationMessage("Please fill in all fields");
      return false;
    }
    // Add more validations as needed
    setValidationMessage("");
    return true;
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (validateInputs()) {
      // Continue with the login logic
      console.log("Login logic here");
    }
  };

  const handlecancel = () => {
    if (frameInputValue || frameInput1Value || selectedOption) {
      setFrameInput1Value("");
      setFrameInputValue("");
      setSelectedOption("")
    }
  };

  return (
    <div className="login">
      
      {validationMessage && (
        <div className="validation-container">
          {validationMessage}
        </div>
      )}
       <img className="frame-iconn" alt="" src="/networ-services 2.png" />
      <div className="frame">
        <form className="frame-group" id="form1" onSubmit={handleLogin}>
          <div className="logo-ishan-2-wrapper">
            <img
              className="logo-ishan-2-icon"
              alt=""
              src="/image 7.png"
            />
          </div>
          <div className="custom-dropdown">
      <select
        className="custom-dropdown-select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="" disabled className="first-option">
          Select user-type
        </option>
        <option value="Admin">Admin</option>
        <option value="HR">HR</option>
        <option value="Department Head">Department Head</option>
        <option value="Reporting Manager">Reporting Manager</option>
      </select>
    </div>
          <input
            className="frame-item"
            placeholder="Enter user-name"
            type="text"
            value={frameInputValue}
            onChange={(event) => setFrameInputValue(event.target.value)}
          />
          <input
            className="frame-item"
            placeholder="Password"
            type="password"
            value={frameInput1Value}
            onChange={(event) => setFrameInput1Value(event.target.value)}
          />
          <button className="log-in-wrapper" onClick={handleLogin}>
            <div className="log-in">Log-in</div>
          </button>
          <button className="cancel-wrapper" cancel onClick={handlecancel}>
            <div className="cancel">Cancel</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;