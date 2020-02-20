import React from 'react'

const authenticatedUserInfo = {
    userName: 'AppUser',
    id: '0001'
  };
  
const UserContext = React.createContext(authenticatedUserInfo)

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
export default UserContext