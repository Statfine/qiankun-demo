import React from 'react';
import ReactDOM from 'react-dom';

import {registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted} from 'qiankun';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render (<React.StrictMode>
  <App/>
</React.StrictMode>, document.getElementById('root'));

registerMicroApps([
  {
    name: 'react App', // app name registered
    entry: '//localhost:7001',
    container: '#subapp-',
    activeRule: '/react'
  }, {
    name: 'vue App',
    // entry: {
    //   scripts: ['//localhost:7100/main.js']
    // },
    entry: '//localhost:7101',
    container: '#subapp-',
    activeRule: '/vue'
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

setDefaultMountApp('react')

// 第一个子应用加载完毕后回调
runAfterFirstMounted(()=>{
  console.log('第一个子应用加载完毕后的回调');
})

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
