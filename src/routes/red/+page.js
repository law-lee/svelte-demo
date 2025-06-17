// https://svelte.dev/docs/kit/load#Universal-vs-server

import component from './red.svelte';

export function load() {
	return {
		color: 'red',
		component
	};
}
