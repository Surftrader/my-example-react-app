
import './App.css';

function App() {
  const posts = [{
    id: 1,
    title: 'Новость №1',
    shotDescription: 'Краткое описание новости №1'
  },
  {
    id: 2,
    title: 'Новость №2',
    shotDescription: 'Краткое описание новости №2'
  },
  {
    id: 3,
    title: 'Новость №3',
    shotDescription: 'Краткое описание новости №3'
  }];
  return (
    <div className="App">
      {posts.map(post => (
        <div key={post.id.toString()}>
          <h2>{post.title}</h2>
          <p>{post.shotDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
