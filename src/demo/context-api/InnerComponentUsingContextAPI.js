import React, { useContext } from 'react';
import UserContext from './UserContext';

const InnerComponentUsingContextAPI = () => {
  const userInformation = useContext(UserContext);

  return (
    <div>
      <h2 className='accent'>User details</h2>
      <p>
        This is InnerComponentUsingContextAPI consuming user details.
      </p>
      <code>
        {JSON.stringify(userInformation)}.
      </code>
    </div>
  );
};

export default InnerComponentUsingContextAPI;
