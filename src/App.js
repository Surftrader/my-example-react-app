import './App.css';

function App() {
  const sendForm = (e) => {
    e.preventDefault();
    console.log('Форма отправлена');
  };
  return (
    <div className="App">
      <form onSubmit={sendForm}>
        <button type="submit" >Отправить</button>
      </form>
    </div>
  );
}

export default App;
