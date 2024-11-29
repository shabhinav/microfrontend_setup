import React, { useState,Suspense,lazy } from 'react'
// import Button from 'remoteApp/Button';

const RemoteButton = lazy(() => import('mfvite/Button'));


function App() {
  const [count, setCount] = useState(0)


  const handleClick = () => {
    alert('Button clicked from Vite!');
  };


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
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteButton 
          label="Click me from Webpack!" 
          onClick={handleClick} 
        />
      </Suspense>

    </>
  )
}

export default App
