import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Designer by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default App;
