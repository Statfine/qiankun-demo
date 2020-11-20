import React from 'react';

function App() {

  const handleJump = (subapp) => {
    window.history.pushState(null, subapp, subapp)
  }

  return (
    <div className="App">
      <div className="flex">
        <div onClick={() => handleJump('/react')} style={{ flex: 1 }}>React</div>
        <div onClick={() => handleJump('/vue')} style={{ flex: 1 }}>Vue</div>
      </div>
      <div id="subapp-"></div>
    </div>
  );
}

export default App;
