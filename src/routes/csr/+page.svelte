<script>
    import {browser} from '$app/environment';

    let count = $state(0);

    function increment() {
        count++;
    }
</script>

<h1> Rendered {browser ? 'in the browser' : 'on the server'}</h1>

<button onclick={increment}>Clicks: {count}</button>