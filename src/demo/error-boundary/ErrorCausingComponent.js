import React from 'react';

class ErrorCausingComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(({ counter }) => ({
			counter: counter + 1
		}));
	}

	render() {
		if (this.state.counter === 5) {
			// Simulate a JS error
			throw new Error('I crashed!');
		}
		return (
			<div>
				<h2 className='accent'>Click the button to increment count</h2>
				<button onClick={this.handleClick}>{this.state.counter}</button>
			</div>
		);
	}
}

export default ErrorCausingComponent;
