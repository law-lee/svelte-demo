<!-- To create routes with dynamic parameters, use square brackets around a valid variable name. 
 For example, a file like src/routes/blog/[slug]/+page.svelte will create a route that matches 
 /blog/one, /blog/two, /blog/three and so on.

<h1>blog post</h1>

-->

<script>
    let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
