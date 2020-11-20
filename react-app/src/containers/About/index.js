import React, { memo } from 'react';
import LogoPng from '../../logo.svg';

function About() {
  return (
    <div>
      
      <header className="App-header">
        <img style={{ width: 240, height: 240 }} src={LogoPng} alt="" />
        About Page
      </header>
    </div>
  )
}

export default memo(About);

