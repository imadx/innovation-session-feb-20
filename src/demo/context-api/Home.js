import React, { useContext } from 'react';
import UserContext from './UserContext'

const Home =  () => {

    const authenticatedUserInfo = useContext(UserContext);

    return (<div>
        This is application home page. User name {authenticatedUserInfo.userName}.
    </div>);
}

export default Home;
