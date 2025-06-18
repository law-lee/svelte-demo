<script>
	let { data } = $props();
	import { message } from '$lib/message.js';
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<h1>home</h1>
<p>this is the home page.</p>

<p>{message}</p>

<a href="/ping">ping</a>

<h2>Advanced SvelteKit/Hooks/The RequestEvent object</h2>
<h3>{data.message}</h3>


<h2>Advanced SvelteKit/Hooks/handleFetch</h2>
<h3>{data.message}</h3>


<h2>Advanced SvelteKit/Page options/ssr</h2>
<h3>{window.innerWidth}x{window.innerHeight}</h3>

<p>if a = 1 and b = a + 1, what is a + b?</p>
<a href="/sum">show answer</a>