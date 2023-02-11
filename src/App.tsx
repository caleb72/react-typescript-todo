import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const DUMMY_TODOS = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div>
      <Todos items={DUMMY_TODOS} />
    </div>
  );
}

export default App;
