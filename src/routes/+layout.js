// When the user navigates from one page to another, SvelteKit calls your load functions, but only if it thinks something has changed.
// In this example, navigating between timezones causes the load function in src/routes/[...timezone]/+page.js to re-run 
// because params.timezone is invalid. But the load function in src/routes/+layout.js does not re-run, because as far as 
// SvelteKit is concerned it wasn’t invalidated by the navigation.
// We can fix that by manually invalidating it using the invalidate(...) function, which takes a URL and re-runs any load 
// functions that depend on it. Because the load function in src/routes/+layout.js calls fetch('/api/now'), it depends on /api/now.
// In src/routes/[...timezone]/+page.svelte, add an onMount callback that calls invalidate('/api/now') once a second:
// Calling fetch(url) inside a load function registers url as a dependency. Sometimes it’s not appropriate to use fetch, 
// in which case you can specify a dependency manually with the depends(url) function.
// Since any string that begins with an [a-z]+: pattern is a valid URL, we can create custom invalidation keys like data:now.
// Update src/routes/+layout.js to return a value directly rather than making a fetch call, and add the depends:
export async function load({ depends }) {
	depends('data:now')

	return {
		now: Date.now(),
        a: 1
	};
}