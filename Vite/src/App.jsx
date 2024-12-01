import React, { useState,Suspense } from 'react'
// const RemoteButton = React.lazy(() => import('remote/Button')); // Importing Button from Webpack remote


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <React.Suspense fallback="Loading...">
      <RemoteButton label="Click Me!" onClick={() => alert('Button clicked!')} />
    </React.Suspense> */}
    </>
  )
}

export default App
