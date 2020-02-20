import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./demo/index'));
const DemoMemoize = lazy(() => import('./demo/memoize/App'));
const DemoContext = lazy(() => import('./demo/context-api/App'));
const DemoErrorBoundary = lazy(() => import('./demo/error-boundary/App'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/memoize" component={DemoMemoize}/>
        <Route path="/context-api" component={DemoContext}/>
        <Route path="/error-boundary" component={DemoErrorBoundary}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;