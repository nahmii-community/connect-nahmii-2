export const setupNetwork = async (blockExplorerUrls, chainName, chainId, rpcUrls) => {
	const provider = window.ethereum;
	if (provider) {
		try {
			await provider.request({
				method: 'wallet_addEthereumChain',
				params: [
					{
						blockExplorerUrls,
						chainId,
						chainName,
						nativeCurrency: {
							name: 'Ethereum',
							symbol: 'ETH',
							decimals: 18
						},
						rpcUrls
					}
				]
			});
			return true;
		} catch (error) {
			return false;
		}
	} else {
		return false;
	}
};
