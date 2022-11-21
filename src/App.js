import './App.css';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <TodoFeature />
      <CounterFeature />
    </div>
  );
}

export default App;
