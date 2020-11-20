import React from 'react';
import ReactDOM from 'react-dom';

import {registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted} from 'qiankun';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render (<React.StrictMode>
  <App/>
</React.StrictMode>, document.getElementById('root'));

function genActiveRule(routerPrefix) {
  return (location) => {
      console.log('micro', location.pathname, routerPrefix)
      return location.pathname.startsWith(routerPrefix);
  };
}

registerMicroApps([
  {
    name: 'react App', // app name registered
    entry: '//localhost:7001',
    container: '#subapp-',
    activeRule: genActiveRule('/react')
  }, {
    name: 'vue App',
    // entry: {
    //   scripts: ['//localhost:7100/main.js']
    // },
    entry: '//localhost:7101',
    container: '#subapp-',
    activeRule: genActiveRule('/vue')
  },  {
    name: 'html',
    entry: '//localhost:7102',
    container: '#subapp-',
    activeRule: genActiveRule('/html')
  },
], {
  beforeLoad: [app => {
      console.log('beforeLoad');
    }
  ],
  beforeMount: [app => {
      console.log('beforeMount');
    }
  ],
  beforeUnmount: [app => {
      console.log('beforeUnmount');
    }
  ],
  afterUnmount: [app => {
      console.log('afterUnmount');
    }
  ]
});

setDefaultMountApp('/react')

// 第一个子应用加载完毕后回调
runAfterFirstMounted(()=>{
  console.log('第一个子应用加载完毕后的回调');
})

// start();
start({
  prefetch: true,
  jsSandbox: true,
  singular: false,
  fetch: window.fetch,
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
