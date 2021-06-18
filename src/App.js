
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <ul>
        {numbers.map((value) => (
          <li key={value.toString()}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
