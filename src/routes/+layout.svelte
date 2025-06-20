<!--
SvelteKit makes three readonly state objects available via the $app/state module — page, navigating and updated. 
The one you’ll use most often is page, which provides information about the current page:

url — the URL of the current page
params — the current page’s parameters
route — an object with an id property representing the current route
status — the HTTP status code of the current page
error — the error object of the current page, if any (you’ll learn more about error handling in later exercises)
data — the data for the current page, combining the return values of all load functions
form — the data returned from a form action
-->
<script>
	import { page, navigating, updated } from '$app/state';
	import { onMount } from 'svelte';
	let { children } = $props();
	let seconds = $state(0);
	//
	let previous = $state();
	let start = $state();
	let end = $state();

	$effect(() => {
		if (navigating.to) {
			start = Date.now();
			end = null;
			previous = navigating;
		} else {
			end = Date.now();
		}
	});

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	const colors = ['ff3e00', '676779', '42b4ff', 'invalid'];
</script>

<!--
Ordinarily, SvelteKit will navigate between pages without refreshing the page. 
In this exercise, if we navigate between / and /about, the timer keeps on ticking.

In rare cases, you might want to disable this behaviour. You can do so by adding the 
data-sveltekit-reload attribute on an individual link, or any element that contains links:
-->
<nav data-sveltekit-reload>
	<a href="/" aria-current={page.url.pathname === '/'}>Home</a>
	<a href="/blog" aria-current={page.url.pathname === '/blog'}>Blog</a>
	<a href="/about" aria-current={page.url.pathname === '/about'}>About</a>
	<a href="/a/deeply/nested/route" aria-current={page.url.pathname === '/a/deeply/nested/route'}
		>a deeply nested route</a
	>
	<a href="/todos" aria-current={page.url.pathname === '/todos'}>Todo Lists</a>
	<a href="/roll" aria-current={page.url.pathname === '/roll'}>Roll Dice</a>
	<a href="/todov2" aria-current={page.url.pathname === '/todov2'}>Todo v2</a>

	<a href="/expected" aria-current={page.url.pathname === '/expected'}>Expected error page</a>
	<a href="/unexpected" aria-current={page.url.pathname === '/unexpected'}>Unxpected error page</a>

	<a href="/the-good-place" aria-current={page.url.pathname === '/the-good-place'}>the good place</a
	>
	<a href="/the-bad-place" aria-current={page.url.pathname === '/the-bad-place'}>the bad place</a>
	<a href="/csr" aria-current={page.url.pathname === '/csr'}>csr</a>
	<a href="/prerender" aria-current={page.url.pathname === '/prerender'}>prerender</a>

	<a href="/always">/always</a>
	<a href="/always/">/always/</a>
	<a href="/ignore">/ignore</a>
	<a href="/ignore/">/ignore/</a>
	<a href="/never">/never</a>
	<a href="/never/">/never/</a>

	<a href="/en">english</a>
	<a href="/de">german</a>
	<a href="/fr">french</a>
	<a href="/rest/parameter" aria-current={page.url.pathname === '/rest/parameter'}>rest parameter</a>

	<a href="/root" aria-current={page.url.pathname === '/root'}>root</a>
	<!--
    The navigating object represents the current navigation. 
    When a navigation starts — because of a link click, or a back/forward navigation, or a programmatic goto — 
    the value of navigating will become an object with the following properties:

    from and to — objects with params, route and url properties
    type — the type of navigation, e.g. link, popstate or goto
    -->
	{#if navigating.to}
		navigating to {navigating.to.url.pathname}
	{/if}
</nav>

<nav>
	{#each colors as color}
		<a href="/colors/{color}" style="--color: #{color}">#{color}</a>
	{/each}

</nav>

<nav
	class={[page.data.color && 'has-color']}
	style:background={page.data.color ?? 'var(--bg-2)'}
>
	<a href="/red">red</a>
	<a href="/green">green</a>
	<a href="/blue">blue</a>

	{#if page.data.component}
		<page.data.component />
	{/if}
</nav>


<nav>
	<a href="/America/New_York">New York</a>
	<a href="/America/Sao_Paulo">São Paulo</a>
	<a href="/Europe/London">London</a>
	<a href="/Europe/Paris">Paris</a>
	<a href="/Africa/Cairo">Cairo</a>
	<a href="/Asia/Shanghai">Shanghai</a>
	<a href="/Asia/Tokyo">Tokyo</a>
	<a href="/Australia/Sydney">Sydney</a>
	<a href="/America/Los_Angeles">Los Angeles</a>
</nav>
<!--  The {@render children()} tag is where the page content will be rendered -->
{@render children()}

{#if previous && end}
	<p>
		navigated from {previous.from.url.pathname} to {previous.to.url.pathname} in
		<strong>{end - start}ms</strong>
	</p>
{/if}

<p>the page has been open for {seconds} seconds</p>
<!--
Version changes only happen in production, not during development. 
For that reason, updated.current will always be false in this tutorial.

You can manually check for new versions, regardless of pollInterval, by calling updated.check().
-->
{#if updated.current}
	<div class="toast">
		<p>
			A new version of the app is available
			<button onclick={() => location.reload()}> reload the page </button>
		</p>
	</div>
{/if}

<style>
	nav.has-color,
	nav.has-color a {
		color: white;
	}
	.toast {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.toast p {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--bg-2);
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		border-radius: 4px;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a::before {
		content: '';
		width: 2em;
		height: 2em;
		background: var(--color);
	}
</style>
