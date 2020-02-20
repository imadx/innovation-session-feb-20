import React from 'react';
import {
  Link
} from "react-router-dom";

import logo from '../img/logo.svg'

export default () => {
  return <div className='App App-home'>
    <div className="content">
      <hgroup>
        <h1>Innovation Session - Feb 20</h1>
        <h3>Demo Applications</h3>
      </hgroup>
      <Link to="/memoize">React.memo()</Link>
      <Link to="/context-api">Context API</Link>
      <Link to="/derived-state">Derived State</Link>
      <Link to="/error-boundary">Error Boundary</Link>
      <Link to="portal">Portals</Link>
    </div>
    <div className="footer">
      <img src={logo} alt="" />
    </div>
  </div>
}