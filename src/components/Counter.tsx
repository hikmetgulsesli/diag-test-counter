import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-card">
      <div className="counter-value" aria-live="polite" aria-atomic="true">
        {count}
      </div>
      <div className="counter-controls">
        <button
          onClick={decrement}
          className="counter-button"
          type="button"
          aria-label="Decrease counter by 1"
        >
          -
        </button>
        <button
          onClick={reset}
          className="counter-button"
          type="button"
          aria-label="Reset counter to zero"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="counter-button primary"
          type="button"
          aria-label="Increase counter by 1"
        >
          +
        </button>
      </div>
    </div>
  );
}
