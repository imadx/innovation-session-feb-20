import React from 'react';
import {
  Link
} from "react-router-dom";

export default () => {
  return <div>
    <h1>Demo Homepage</h1>
    <Link to="/memoize">React.memo()</Link>
    <Link to="/context-api">Context API</Link>
  </div>
}