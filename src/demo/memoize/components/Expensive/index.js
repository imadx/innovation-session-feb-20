import React from 'react';
import formatPrice from './utils/formatPrice';

const ExpensiveComponent = ({ price, lastUpdated, ...others }) => {
	console.log(
		'TCL: ExpensiveComponent -> ExpensiveComponent',
		others['data-component-id'],
		lastUpdated
	);
	return (
		<div {...others}>
			<h1>Price: {formatPrice(price)}</h1>
			<h3>Including tax: {formatPrice(price * 1.1)}</h3>
			<span>Last updated on {lastUpdated.toDateString()}</span>
		</div>
	);
};

export default ExpensiveComponent;
