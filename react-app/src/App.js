import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './containers/Home';
const About = lazy(() => import('./containers/About'));

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <nav>
        <Link to="/">Home Page</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/about">About Page</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

function App() {
  return (
    <div className="App">
      <RouteExample />
    </div>
  );
}

export default App;
