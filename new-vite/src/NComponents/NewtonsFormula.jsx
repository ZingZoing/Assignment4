import { useState } from 'react';
import './NewtonsFormula.css'

function NewtonsFormula() {
  const [a, setA] = useState("");
  const [result, setResult] = useState("");

  function newtonsFormula(event) {
    event.preventDefault();

    let x = parseFloat(a);

    for (let i = 0; i < 50; i++) {
      const Function = 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 - 7 * x + 6;
      const Derivative = 24 * x ** 3 - 39 * x ** 2 - 36 * x - 7;
      x = x - Function / Derivative;
    }

    setResult(`${x.toFixed(6)}`);
  }
 
  return (
    <div className="container">
      <h1>Newtons Method</h1>
      <form id="quad-form" onSubmit={(event) => { newtonsFormula(event) }}>
        <label htmlFor="a">a value:</label>
        <input type="number" id="a" name="a" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
        <label htmlFor="result">Root Approximation:</label>
        <input type="text" id="result" name="result" value={result} readOnly />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default NewtonsFormula;