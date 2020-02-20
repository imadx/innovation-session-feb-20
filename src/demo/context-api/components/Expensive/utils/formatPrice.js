// Number formatter for the price value
const formatter = new Intl.NumberFormat('en-US', {
	maximumSignificantDigits: 2,
	minimumSignificantDigits: 2
});

/**
 * Formats a price in the format Rs. #.##/=
 * @param {number} price Price to be formatted
 */
const formatPrice = price => {
	if (!price || Number.isNaN(price)) {
		return 'Rs. 0.00/=';
	}

	return `Rs ${formatter.format(price)}/=`;
};

export default formatPrice;
