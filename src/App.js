import './App.css';
import PreviewPost from './components/PreviewPost';

function App() {
  return (
    <div className="App">
      <PreviewPost
        title="Новость №1"
        shortDescription="Описание новости №1"
      />
      <PreviewPost
        title="Новость №2"
        shortDescription="Описание новости №2"
      />
      <PreviewPost
        title="Новость №3"
        shortDescription="Описание новости №3"
      />
    </div>
  );
}

export default App;
