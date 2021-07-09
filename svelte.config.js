/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: '/connect-nahmii-2',
			assets: '/connect-nahmii-2'
		},
	},
};

export default config;
