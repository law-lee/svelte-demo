<!--
To match an unknown number of path segments, use a [...rest] parameter, so named for its resemblance to rest parameters in JavaScript.

Rename src/routes/[path] to src/routes/[...path]. The route now matches any path.
-->
<script>
	import { page } from '$app/state';

	let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];

	let depth = $derived(page.params.path.split('/').filter(Boolean).length);
	let next = $derived(
		depth === words.length
			? '/rest/parameter'
			: `/rest/parameter/${words.slice(0, depth + 1).join('/')}`
	);
</script>

<div class="flex">
	{#each words.slice(0, depth) as word}
		<p>{word}={depth}</p>
	{/each}

	<p><a href={next}>{words[depth] ?? '?'}</a></p>
</div>

<style>
	.flex {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	p {
		margin: 0.5rem 0;
		line-height: 1;
	}

	a {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		font-size: 4rem;
	}
</style>
