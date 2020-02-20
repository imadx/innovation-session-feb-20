import React from 'react';

const SellButton = ({ onClick }) => {
	return <button onClick={onClick}>Sell</button>;
};

export default React.memo(SellButton);
