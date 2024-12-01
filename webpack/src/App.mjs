import React, { useState, useEffect, Suspense } from 'react';
// const ViteButton = React.lazy(() => import('viteRemote/ViteButton'))
// import Button from 'layout/Button';
const YourRemoteComponent = React.lazy(() => import('remoteApp/Button'));

// const loadRemoteModule = async () => {
//   try {
//     // Use dynamic import with full URL
//     const remoteModule = await import('http://localhost:5173/remoteEntry.js');
    
//     // Additional handling for ESM vs CommonJS
//     const Button = remoteModule.default 
//       ? remoteModule.default 
//       : remoteModule;
    
//     return Button;
//   } catch (error) {
//     console.error('Module loading error:', error);
//   }
// };

// // Usage
// const RemoteButton = React.lazy(() => loadRemoteModule());


const App = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  };
  console.log('YourRemoteComponent',YourRemoteComponent)
  return (
    <div className="app">
      <h1>React Webpack App</h1>
      <p>Welcome to your new React application!</p>
      <React.Suspense fallback={<div>Loading...</div>}>
          <YourRemoteComponent />
      </React.Suspense>
      {/* <Button /> */}
    </div>
  );
};

export default App;