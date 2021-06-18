import { useState } from "react";
import './App.css';
import TestUnmount from "./components/TestUnmount";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [isShow, setIsShow] = useState(false);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const toggle = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return (
    <div className="App">
      <div>
        <label>Имя</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <p>{name}</p>
      </div>
      <div>
        {counter}
        <button type="button" onClick={increaseCounter}>+1</button>
      </div>
      <div>
        <button type="button" onClick={toggle}>toggle</button>
        {isShow && <TestUnmount />}
      </div>
    </div>
  );
}

export default App;
