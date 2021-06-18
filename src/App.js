import { useState } from "react";
import './App.css';

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="App">
      <button type="button"
        onClick={() => setIsShow(true)}>
        Показать
      </button>
      {isShow && (
        <div>Здесь важное сообщение
        <button type="button"
            onClick={() => setIsShow(false)}>Закрыть</button>
        </div>
      )}
    </div>
  );
}

export default App;
