<script>
	import { setupNetwork } from '../utils/setupNetwork.js';

	let awaitingApproval = false;
	let acceptedNetwork = true;

	async function addNetwork(chainName, chainId, rpcURLs) {
		awaitingApproval = true;
		acceptedNetwork = await setupNetwork(chainName, chainId, rpcURLs);
		awaitingApproval = false;
	}

	async function reset() {
		acceptedNetwork = true;
	}
</script>

<div class="main">
	<h1>Nahmii 2.0 connect</h1>
	{#if acceptedNetwork}
		<div class="card">
			<div class="row"><h2>Nahmii 2.0 L1 Testnet</h2></div>
			<div class="row">
				<div class="item">Network</div>
				<div class="item">Nahmii 2.0 L1 Testnet</div>
			</div>
			<div class="row">
				<div class="item">Chain ID</div>
				<div class="item">31337</div>
			</div>
			<div class="row">
				<div class="item">Symbol</div>
				<div class="item">ETH</div>
			</div>
			<div class="row">
				<div class="item">RPC URL</div>
				<div class="item">https://l1.testnet.nahmii.io/</div>
			</div>
			<button
				on:click={() =>
					addNetwork('Nahmii 2.0 L1 Testnet', '0x7a69', [`https://l1.testnet.nahmii.io/`])}
				disabled={awaitingApproval}>Add Nahmii L1</button
			>
		</div>
		<div class="card">
			<div class="row"><h2>Nahmii 2.0 L2 Testnet</h2></div>
			<div class="row">
				<div class="item">Network</div>
				<div class="item">Nahmii 2.0 L2 Testnet</div>
			</div>
			<div class="row">
				<div class="item">Chain ID</div>
				<div class="item">555</div>
			</div>
			<div class="row">
				<div class="item">Symbol</div>
				<div class="item">ETH</div>
			</div>
			<div class="row">
				<div class="item">RPC URL</div>
				<div class="item">https://l2.testnet.nahmii.io/</div>
			</div>
			<button
				on:click={() =>
					addNetwork('Nahmii 2.0 L2 Testnet', '0x22b', [`https://l2.testnet.nahmii.io/`])}
				disabled={awaitingApproval}>Add Nahmii L2</button
			>
		</div>
	{:else}
		<div class="card">
			<div class="row">
				User rejected request or did not install an Ethereum provider like MetaMask.
			</div>
			<button on:click={reset}>Click to continue</button>
		</div>
	{/if}
</div>

<style>
	.main {
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		background: #15202b;
		color: white;
		margin: auto;
		width: 20rem;
		text-align: center;
	}

	.card {
		display: flex;
		flex-direction: column;
		background: #162330;
		padding: 15px;
		border-radius: 6px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		transition: background-color 0.2s linear;
		text-align: center;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.row {
		display: block;
		margin: 0.4rem;
	}

	.item {
		display: inline-block;
		padding: 10px;
		margin: 3px;
		border-width: 1px;
		border-style: solid;
		border-color: white;
	}

	button {
		padding: 1rem 2rem;
		border-width: 0;
		border-style: solid;
		text-transform: uppercase;
		border-radius: 0.375rem;
		border-color: white;
		color: inherit;
		background: rgb(255, 6, 184);
		opacity: 0.8;
		transition: 0.3s;
		margin: 0.6rem;
	}

	button:disabled {
		background: rgba(48, 48, 48, 0.1);
	}

	button:hover {
		opacity: 1;
	}

	@media (min-width: 32rem) {
		.main {
			width: 24rem;
			font-size: 12px;
		}
	}

	@media (min-width: 36rem) {
		.main {
			width: 32rem;
			font-size: 14px;
		}
	}
</style>
