<script>
    let { children } = $props();
</script>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<!--  The {@render children()} tag is where the page content will be rendered -->
{@render children()}