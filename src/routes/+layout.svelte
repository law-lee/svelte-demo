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
    import { page } from '$app/state';
    let { children } = $props();
</script>

<nav>
    <a href="/" aria-current={page.url.pathname === '/'}>Home</a>
    <a href="/blog" aria-current={page.url.pathname === '/blog'}>Blog</a>
    <a href="/about" aria-current={page.url.pathname === '/about'}>About</a>
    <a href="/a/deeply/nested/route" aria-current={page.url.pathname === '/a/deeply/nested/route'}>a deeply nested route</a>
    <a href="/todos" aria-current={page.url.pathname === '/todos'}>Todo Lists</a>
    <a href="/roll" aria-current={page.url.pathname === '/roll'}>Roll Dice</a>
    <a href="/todov2" aria-current={page.url.pathname === '/todov2'}>Todo v2</a>
</nav>

<!--  The {@render children()} tag is where the page content will be rendered -->
{@render children()}