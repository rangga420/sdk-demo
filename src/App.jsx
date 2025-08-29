import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="widget-container">
      <h1>Widget Preact Demo</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
    </div>
  )
}