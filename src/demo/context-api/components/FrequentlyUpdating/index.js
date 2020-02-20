import React from 'react';

import ExpensiveComponent from '../Expensive';
import MemoizedExpensiveComponent from '../MemoizedExpensive';

const FrequentlyUpdating = ({ numberOfSales, price, lastUpdated }) => {
	return (
		<>
			<ExpensiveComponent price={price} lastUpdated={lastUpdated} data-component-id="expensive-component"/>
			<MemoizedExpensiveComponent price={price} lastUpdated={lastUpdated} data-component-id="memoized-expensive-component"/>
			<p>Number of sales: {numberOfSales}</p>
		</>
	);
};

export default FrequentlyUpdating;
