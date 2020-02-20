import React from 'react';
import ErrorCausingComponent from './ErrorCausingComponent';
import ErrorBoundary from './ErrorBoundary';

import logo from '../../img/logo.svg';

const App = () => {
	return (
		<div className='App'>
			<div className='content'>
				<hgroup>
					<h1>Error Boundary Demo</h1>
					<h3>Hint: Click the button until the counter reaches 5</h3>
				</hgroup>

				<ErrorBoundary>
					<ErrorCausingComponent />
				</ErrorBoundary>
			</div>
			<div className='footer'>
				<img src={logo} alt='' />
			</div>
		</div>
	);
};

export default App;
