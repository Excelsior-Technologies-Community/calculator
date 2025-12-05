import React, { useState } from "react";
import "./calculator.css";
const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState("");
  const handleAddition = () => {
    setTotal(Number(number1) + Number(number2));
  };

  const handleSubtraction = () => {
    setTotal(Number(number1) - Number(number2));
  };

  const handleMultiply = () => {
    setTotal(Number(number1) * Number(number2));
  };

  const handleDivide = () => {
    if (Number(number2) === 0) {
      setTotal("Cannot divide by zero");
    } else {
      setTotal(Number(number1) / Number(number2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="calculator">
      <h2>Basic Arithmetic Calculator</h2>

      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter number 1"
      />
      <br /><br />

      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter number 2"
      />
      <br /><br />

      <button onClick={handleAddition}>Add (+)</button>
      <button onClick={handleSubtraction}>Subtract (-)</button>
      <button onClick={handleMultiply}>Multiply (×)</button>
      <button onClick={handleDivide}>Divide (÷)</button>

      <h3 style={{ marginTop: "20px" }}>Result: {total}</h3>
    </div>
  );
};

export default Calculator;