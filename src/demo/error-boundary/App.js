import React from 'react';
import CallError from './CallError';
import ErrorBoundary from './ErrorBoundary';

import logo from '../../img/logo.svg';

const App = () => {
	return (
		<div className='App App-home'>
			<div className='content'>
				<hgroup>
					<h1>Error Boundary</h1>
					<h3>Hint: Click the button until the counter reaches 5</h3>
				</hgroup>

				<ErrorBoundary>
					<CallError />
				</ErrorBoundary>
			</div>
			<div className='footer'>
				<img src={logo} alt='' />
			</div>
		</div>
	);
};

export default App;
