import React from 'react';

const AddToCartButton = ({ onClick }) => {
	return <button className="cart-button" onClick={onClick}>Add To Cart</button>;
};

export default React.memo(AddToCartButton);
