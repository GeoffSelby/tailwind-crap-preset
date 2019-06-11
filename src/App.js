import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="flex justify-center items-center h-full">
      <header className="w-1/2 text-center">
        <img src={logo} className="w-2/3 mx-auto" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
