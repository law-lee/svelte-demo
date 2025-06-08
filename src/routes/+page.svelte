<script>
	let { data } = $props();
    import { message } from '$lib/message.js';
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<h1>home</h1>
<p>this is the home page.</p>

<p>{message}</p>