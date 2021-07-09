export const setupNetwork = async (chainName, chainId, rpcURLs) => {
	const provider = window.ethereum;
	if (provider) {
		try {
			await provider.request({
				method: 'wallet_addEthereumChain',
				params: [
					{
						chainId: chainId,
						chainName: chainName,
						nativeCurrency: {
							name: 'Ethereum',
							symbol: 'ETH',
							decimals: 18
						},
						rpcUrls: rpcURLs
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
