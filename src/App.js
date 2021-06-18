
import './App.css';

function App() {
  const sendForm = () => {
    alert("Форма отправлена");
  };
  const mouseEnter = () => {
    console.log("Mouse enter");
  };
  const mouseLeave = () => {
    console.log("Mouse leave");
  };
  return (
    <div className="App">
      <button
        type="button"
        onClick={sendForm}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>
        Отправить
      </button>
    </div>
  );
}

export default App;
