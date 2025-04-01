import { useState } from 'react';
import './AmbiguousCase.css';

function AmbiguousCase() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  function ambiguousCase(event) {
    event.preventDefault();

    const angleA = parseFloat(a)
    const sideA = parseFloat(b);
    const sideB = parseFloat(c);;

    const h = sideB * Math.sin(angleA);

  if (sideA < h){
      setResult("No triangle");
    } else if (sideA === h){
      setResult("right triangle");
    } else if (sideA > sideB){
      setResult("one triangle");
    } else if (h < sideA < sideB){
      setResult("two triangle (ambiguous case)");
    } else if (sideA < sideB || sideA == sideB){
      setResult("no triangle");
    } else if (sideA > sideB){
      setResult("one triangle");
    } else {
      setResult("error");
    }
  }

  return (
    <div className="container">
      <h1>Ambiguous Case</h1>
      <form id="quad-form" onSubmit={(event) => { ambiguousCase(event) }}>
        <label htmlFor="a">angle A:</label>
        <input type="number" id="a" name="a" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
        <label htmlFor="b">side A:</label>
        <input type="number" id="b" name="b" value={b} onChange={(event) => { setB(Number(event.target.value)) }} required />
        <label htmlFor="c">side B:</label>
        <input type="number" id="c" name="c" value={c} onChange={(event) => { setC(Number(event.target.value)) }} required />
        <label htmlFor="result">Triangle Type:</label>
        <input type="text" id="result" name="result" value={result} readOnly />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default AmbiguousCase;