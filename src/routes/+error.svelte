<!--
The default error page is somewhat bland. We can customize it by creating a src/routes/+error.svelte component:
-->
<script>
	import { page } from '$app/state';
	import { emojis } from './emojis.js';
</script>

<h1>{page.status} { page.error?.message}</h1>
<span style="font-size: 10em">
	{emojis[page.status] ?? emojis[500]}
</span>
