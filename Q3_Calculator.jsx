// Q3: Calculator application using React.
//     Supports addition, subtraction, multiplication and division,
//     with a clear button.

import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter two valid numbers");
      return;
    }

    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b === 0 ? "Cannot divide by zero" : a / b);
        break;
      default:
        break;
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div
      style={{
        maxWidth: "320px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
      />

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => calculate("+")}>+</button>{" "}
        <button onClick={() => calculate("-")}>-</button>{" "}
        <button onClick={() => calculate("*")}>×</button>{" "}
        <button onClick={() => calculate("/")}>÷</button>{" "}
        <button onClick={clear}>Clear</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
