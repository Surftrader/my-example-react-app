import { useState } from "react";
import './App.css';

function App() {

  // const counterStateVariable = useState(0);
  // const counter = counterStateVariable[0];
  // const setCounter = counterStateVariable[1];
  // or
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      {counter}
      <button type="button" onClick={increaseCounter}>Увеличить значение</button>
    </div>
  );
}

export default App;
