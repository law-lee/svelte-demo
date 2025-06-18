// As we saw in the introduction to layout data, +page.svelte and +layout.svelte components have access to 
// everything returned from their parent load functions.
// Occasionally it’s useful for the load functions themselves to access data from their parents. 
// This can be done with await parent().

// To show how it works, we’ll sum two numbers that come from different load functions.
//  First, return some data from src/routes/+layout.server.js:
export async function load() {
	return { a: 1};
}