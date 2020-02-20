import React from 'react';

import ExpensiveComponent from '../Expensive';

const MemoizedComponent = ({ price, lastUpdated, ...others }) => {
  console.log('TCL: MemoizedComponent -> MemoizedComponent', others['data-component-id'])
	return <ExpensiveComponent className="memoized-content" price={price} lastUpdated={lastUpdated} {...others}/>;
};

export default React.memo(MemoizedComponent);
