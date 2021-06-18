import { useState } from "react";
import './App.css';

function App() {

  // const counterStateVariable = useState(0);
  // const counter = counterStateVariable[0];
  // const setCounter = counterStateVariable[1];
  // or
  const [counter, setCounter] = useState(0);
  const [myDate, setMyDate] = useState(new Date());

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setMyDate(new Date());
  };

  console.log("render");

  return (
    <div className="App">
      <div>{myDate.toISOString()}</div>
      {counter}
      <button type="button" onClick={increaseCounter}>Увеличить значение</button>
    </div>
  );
}

export default App;
