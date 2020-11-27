import './App.css';
import appicon2 from './images/appicon2.png';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={appicon2} className="App-logo" alt="logo" />
        <p>
          A To-Do App
        </p>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
