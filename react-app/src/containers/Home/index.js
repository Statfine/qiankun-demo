import React, { memo } from 'react';
import LogoPng from '../../logo.svg';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img style={{ width: 240, height: 240 }} src={LogoPng} alt="" />
        Home Page
      </header>
    </div>
  )
}

export default memo(Home);
