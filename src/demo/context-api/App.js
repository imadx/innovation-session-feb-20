import React from 'react';
import { UserProvider } from './UserContext';
import InnerComponentUsingContextAPI from './InnerComponentUsingContextAPI';

import logo from '../../img/logo.svg'

const userInformation = {
	userName: 'user123',
	id: '0001'
};

const App = () => {
	return (
		<UserProvider value={userInformation}>
			<div className='App'>
				<div className='content'>
					<hgroup>
						<h1>Context API Demo</h1>
						<h3>
							Hint: The inner functional component consumes variables provided through Context API using useContext() hook
						</h3>
					</hgroup>
          <InnerComponentUsingContextAPI />
				</div>
				<div className='footer'>
					<img src={logo} alt='' />
				</div>
			</div>
		</UserProvider>
	);
};

export default App;
