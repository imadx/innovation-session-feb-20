import React from 'react';
import CallError from './CallError';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <div className='App'>
        <h1>
            Demo - Error Boundary
        </h1>
        <ErrorBoundary>
            <CallError />
        </ErrorBoundary>
    </div>
  );
};

export default App;
