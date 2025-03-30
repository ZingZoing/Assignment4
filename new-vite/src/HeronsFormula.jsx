import React, { useState } from "react";

const HeronsFormula = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [area, setArea] = useState("");

  const calculateArea = (e) => {
    e.preventDefault();

    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
      const s = (a + b + c) / 2; // Semi-perimeter
      const areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setArea(areaValue.toFixed(2));
    } else {
      setArea("Invalid sides");
    }
  };

  return (
    <div>
      <h1>Heron's Formula</h1>
      <form onSubmit={calculateArea}>
        <label htmlFor="SideA">Side A:</label>
        <input
          type="number"
          id="SideA"
          step="any"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          required
        />
        <br />

        <label htmlFor="SideB">Side B:</label>
        <input
          type="number"
          id="SideB"
          step="any"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          required
        />
        <br />

        <label htmlFor="SideC">Side C:</label>
        <input
          type="number"
          id="SideC"
          step="any"
          value={sideC}
          onChange={(e) => setSideC(e.target.value)}
          required
        />
        <br />

        <label htmlFor="Hresult">Area:</label>
        <input type="text" id="Hresult" value={area} readOnly />
        <br />

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default HeronsFormula;