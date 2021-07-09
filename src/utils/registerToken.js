export const registerToken = async (address, symbol, decimals, image) => {
	const tokenAdded = await window.ethereum.request({
		method: 'wallet_watchAsset',
		params: {
			type: 'ERC20',
			options: {
				address,
				symbol,
				decimals,
				image
			}
		}
	});
	return tokenAdded;
};
