import React from 'react';

import ExpensiveComponent from '../Expensive';
import MemoizedExpensiveComponent from '../MemoizedExpensive';

const FrequentlyUpdating = ({ numberOfSales, price, lastUpdated }) => {
	return (
		<>
			<div className="pricing-details-container">
				<ExpensiveComponent price={price} lastUpdated={lastUpdated} data-component-id="expensive-component" />
				<MemoizedExpensiveComponent price={price} lastUpdated={lastUpdated} data-component-id="memoized-expensive-component" />
			</div>
			<p className="cart-item-information">Cart Item Count: {numberOfSales}</p>
		</>
	);
};

export default FrequentlyUpdating;
