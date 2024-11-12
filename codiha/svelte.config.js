import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess"
import { importAssets } from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "demo",
			assets: "demo",
			fallback: "bundle.html",
			precompress: false,
			strict: true
		}),
		appDir: "build",
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// // ignore deliberate link to shiny 404 page
				// if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
				// 	return;
				// }

				// // otherwise fail the build
				// throw new Error(message);

				// ? This is the code part

				console.error(`HTTP error: ${message} (${path})`);

				// If the error is a 404, redirect to the custom 404 page.
				if (message.includes('404')) {
					return {
						statusCode: 404,
						headers: {
							Location: '/not-found',
						},
					};
				}

				// Otherwise, fail the build.
				throw new Error(message)
			}
		}
	},

	preprocess: [
		preprocess(
			[importAssets()]
		)
	],

	vite: {
		optimizeDeps: {
			include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
		}
	},

};

export default config;
