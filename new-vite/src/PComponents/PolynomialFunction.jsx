import { useState } from 'react';
import './PolynomialFunction.css';

function PolynomialFunction() {
  const [coefficients, setCoefficients] = useState("");
  const [exponents, setExponents] = useState("");
  const [xValue, setXValue] = useState("");
  const [polynomial, setPolynomial] = useState("");
  const [evaluation, setEvaluation] = useState("");

  function handlePolynomialCalculation(event) {
    event.preventDefault();

    const coArray = coefficients.split(" ").map(Number);
    const expArray = exponents.split(" ").map(Number);

    let polynomialString = "";
    let polynomialValue = 0;

    for (let i = 0; i < coArray.length; i++) {
      const co = coArray[i];
      const exp = expArray[i];

      if (co === 0) continue;

      if (polynomialString) {
        polynomialString += co > 0 ? ` + ${co}x^${exp}` : ` - ${Math.abs(co)}x^${exp}`;
      } else {
        polynomialString += co > 0 ? `${co}x^${exp}` : `-${Math.abs(co)}x^${exp}`;
      }

      polynomialValue += co * Math.pow(parseFloat(xValue), exp);
    }

    setPolynomial(polynomialString);
    setEvaluation(polynomialValue);
  }

  return (
    <div className="container">
      <h1>Polynomial Function</h1>
      <form onSubmit={handlePolynomialCalculation}>
        <label htmlFor="coefficients">Coefficients:</label>
        <input type="text" id="coefficients" name="coefficients" value={coefficients} onChange={(event) => setCoefficients(event.target.value)} required/>
        <label htmlFor="exponents">Exponents:</label>
        <input type="text" id="exponents" name="exponents" value={exponents} onChange={(event) => setExponents(event.target.value)} required/>
        <label htmlFor="xValue">x Value:</label>
        <input type="number" id="xValue" name="xValue" value={xValue} onChange={(event) => setXValue(event.target.value)} required/>
        <label htmlFor="polynomial">Polynomial:</label>
        <input type="text" id="polynomial" name="polynomial" value={polynomial} readOnly />
        <label htmlFor="evaluation">Evaluation at x:</label>
        <input type="text" id="evaluation" name="evaluation" value={evaluation} readOnly />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default PolynomialFunction;