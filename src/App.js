import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <label className="Label">Имя </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Привет {name}</p>
    </div>
  );
}

export default App;
