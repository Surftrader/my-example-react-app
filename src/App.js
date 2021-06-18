import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';

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
      <Welcome>{name}</Welcome>
    </div>
  );
}

export default App;
