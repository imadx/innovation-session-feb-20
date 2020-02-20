import React from 'react';
import formatPrice from './utils/formatPrice';

const ExpensiveComponent = ({ price, lastUpdated, className, ...others }) => {
	console.log(
		'TCL: ExpensiveComponent -> ExpensiveComponent',
		others['data-component-id'],
	);
	return (
		<div className={`price-details ${className}`} {...others}>
			<div className="price">
				<h1>Price: <b>{formatPrice(price)}</b></h1>
				<h3>Including tax: <b>{formatPrice(price * 1.1)}</b></h3>
			</div>
			<div className="last-updated">Last updated on <b>{lastUpdated.toDateString()}</b></div>
		</div>
	);
};

export default ExpensiveComponent;
