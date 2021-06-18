import { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: 'Сходить в супермаркет'
    },
    {
      id: 2,
      item: 'Забрать вещи из химчистки'
    },
    {
      id: 3,
      item: 'Написать список дел'
    }
  ]);

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id.toString()}>
            {todo.item}
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}>
              Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
