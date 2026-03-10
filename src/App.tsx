import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark', !isDark)
  }

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <header>
        <h1>Counter App</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </header>
      
      <main>
        <div className="counter-display">
          <span className="count">{count}</span>
        </div>
        
        <div className="counter-controls">
          <button onClick={() => setCount(c => c - 1)}>
            − Decrement
          </button>
          <button onClick={() => setCount(0)} className="reset">
            Reset
          </button>
          <button onClick={() => setCount(c => c + 1)}>
            + Increment
          </button>
        </div>
      </main>
    </div>
  )
}

export default App