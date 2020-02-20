import React from 'react';
import { UserProvider } from './UserContext'
import Home from './Home';

const authenticatedUserInfo = {
  userName: 'Ishan Madhu',
  id: '0001'
};

const App = () => {
  return (
    <UserProvider value = {authenticatedUserInfo}>
      <div className="App">
        <h1>Context API App</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eius,
          minima quo nesciunt ad odit officiis necessitatibus recusandae esse
          sequi dignissimos et cupiditate itaque aut explicabo quia iure
          possimus molestias!
        </p>
        <Home/>
      </div>
    </UserProvider>
  );
};

export default App;
