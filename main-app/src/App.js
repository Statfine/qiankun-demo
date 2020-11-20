import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledAppList = styled.div`
  display: flex;
`;

const StyledAppItem = styled.div`
  margin: 20px;
  flex: 1;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  text-align: center;
  padding: 20px;
  background: ${(props) => (props.background)};
  &:hover {
    box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09);
  }
`;

const APP_LIST = [
  {
    name: 'React',
    router: '/react',
    background: '#46daf9',
  },
  {
    name: 'Vue',
    router: '/vue',
    background: '#23b886',
  },
  {
    name: 'Html',
    router: '/html',
    background: '#e3e3e3',
  }
]

function App(props) {

  const [pathname, setPathname ] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  const handleJump = (subapp) => {
    setPathname(subapp)
    window.history.pushState(null, subapp, subapp)
  }

  return (
    <div>
      <StyledAppList>
        {
          APP_LIST.map((item) => (
            <StyledAppItem
              key={item.name}
              background={pathname.startsWith(item.router) && item.background}
              onClick={() => handleJump(item.router)}
            >{item.name}</StyledAppItem>
          ))
        }
      </StyledAppList>
      <div id="subapp-"></div>
    </div>
  );
}

export default App;
