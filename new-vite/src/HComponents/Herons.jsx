import { useState } from 'react';
import './Herons.css';

function Herons() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  function heronsFormula(event) {
    event.preventDefault();

    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const sideC = parseFloat(c);

    const s = (sideA + sideB + sideC) / 2;
    const Area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    setResult(`x=${Area}`);
  }

  return (
    <div className="container">
      <h1>Herons Formula</h1>
      <form id="quad-form" onSubmit={(event) => { heronsFormula(event) }}>
        <label htmlFor="a">side A:</label>
        <input type="number" id="a" name="a" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
        <label htmlFor="b">side B:</label>
        <input type="number" id="b" name="b" value={b} onChange={(event) => { setB(Number(event.target.value)) }} required />
        <label htmlFor="c">side C:</label>
        <input type="number" id="c" name="c" value={c} onChange={(event) => { setC(Number(event.target.value)) }} required />
        <label htmlFor="result">Area:</label>
        <input type="text" id="result" name="result" value={result} readOnly />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default Herons;