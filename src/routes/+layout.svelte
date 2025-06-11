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
	let { children } = $props();
</script>

<nav>
	<a href="/" aria-current={page.url.pathname === '/'}>Home</a>
	<a href="/blog" aria-current={page.url.pathname === '/blog'}>Blog</a>
	<a href="/about" aria-current={page.url.pathname === '/about'}>About</a>
	<a href="/a/deeply/nested/route" aria-current={page.url.pathname === '/a/deeply/nested/route'}
		>a deeply nested route</a
	>
	<a href="/todos" aria-current={page.url.pathname === '/todos'}>Todo Lists</a>
	<a href="/roll" aria-current={page.url.pathname === '/roll'}>Roll Dice</a>
	<a href="/todov2" aria-current={page.url.pathname === '/todov2'}>Todo v2</a>

	<a href="/expected"  aria-current={page.url.pathname === '/expected'}>Expected error page</a>	
	<a href="/unexpected"  aria-current={page.url.pathname === '/unexpected'}>Unxpected error page</a>
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

<!--  The {@render children()} tag is where the page content will be rendered -->
{@render children()}

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
</style>
