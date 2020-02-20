import React from 'react';
import formatPrice from './utils/formatPrice';

const ExpensiveComponent = ({ price, lastUpdated, ...others }) => {
	console.log(
		'TCL: ExpensiveComponent -> ExpensiveComponent',
		others['data-component-id'],
	);
	return (
		<div className="price-details" {...others}>
			<div className="price">
				<h1>Price: {formatPrice(price)}</h1>
				<h3>Including tax: {formatPrice(price * 1.1)}</h3>
			</div>
			<div className="last-updated">Last updated on {lastUpdated.toDateString()}</div>
		</div>
	);
};

export default ExpensiveComponent;
