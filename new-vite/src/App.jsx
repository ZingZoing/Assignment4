import './App.css';
import Herons from './HComponents/Herons';
import AmbiguousCase from './AComponents/AmbiguousCase';
import NewtonsFormula from './NComponents/NewtonsFormula';
import PolynomialFunction from './PComponents/PolynomialFunction';

function App() {
  return (
    <div className="grid-container">
      <Herons />
      <AmbiguousCase />
      <NewtonsFormula />
      <PolynomialFunction />
    </div>
  );
}

export default App;