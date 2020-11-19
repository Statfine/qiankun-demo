import React from 'react';
import './App.css';

function App() {

  const handleJump = (subapp) => {
    window.history.pushState(null, subapp, subapp)
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello word
      </header>
      <div className="flex">
        <div onClick={() => handleJump('react')}>React</div>
        <div onClick={() => handleJump('vue')}>Vue</div>
      </div>
      <div id="subapp-"></div>
    </div>
  );
}

export default App;
