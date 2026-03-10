import { ThemeToggle } from './components/ThemeToggle';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="app">
      <header className="header">
        <ThemeToggle />
      </header>
      <main className="counter-container">
        <Counter />
      </main>
    </div>
  );
}

export default App;
