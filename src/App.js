import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    console.log("Изменено в ", new Date().toISOString);
  }, [counter]);
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
    </div>
  );
}

export default App;
