<!--
Sometimes, code is used in multiple places. When this happens, it’s useful to have a place to put them that can be accessed 
by all routes without needing to prefix imports with ../../../../. In SvelteKit, that place is the src/lib directory. 
Anything inside this directory can be accessed by any module in src via the $lib alias.
-->
<script>
	import { message } from '$lib/message.js';
</script>

<h1>a deeply nested route</h1>
<p>{message}</p>
