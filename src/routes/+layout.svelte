<script>
    let { children } = $props();
</script>

<nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/about">About</a>
    <a href="/a/deeply/nested/route">a deeply nested route</a>
    <a href="/todos">Todo Lists</a>
</nav>

<!--  The {@render children()} tag is where the page content will be rendered -->
{@render children()}