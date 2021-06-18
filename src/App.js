import { useState } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  return (
    <div className="App">
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {password.length < 8 ? <div>Простой</div> : <div>Сложный</div>}
    </div>
  );
}

export default App;
