/*
The most elementary hook is handle, which lives in src/hooks.server.js. 
It receives an event object along with a resolve function, and returns a Response.

resolve is where the magic happens: SvelteKit matches the incoming request URL to a route of your app, 
imports the relevant code (+page.server.js and +page.svelte files and so on), loads the data needed by the route, and generates the response.
The default handle hook looks like this:
*/
export async function handle({ event, resolve }) {
    if (event.url.pathname === '/ping') {
        return new Response('pong');
    }
    event.locals.answer = 42;

    return await resolve(event, {
        transformPageChunk: ({ html }) => html.replace(
            '<body',
            '<body style="color: hotpink'
        )
    });
}

export async function handleFetch({ event, request, fetch }) {
    const url = new URL(request.url);
    if (url.pathname === '/b') {
        return await fetch('/c');
    }

    return await fetch(request);
}


// Notice that we’re not showing the error message to the user. 
// That’s because error messages can include sensitive information 
// that at best will confuse your users, and at worst could benefit evildoers. 
// Instead, the error object available to your application — represented as page.error in your +error.svelte pages, 
// or %sveltekit.error% in your src/error.html fallback — is just this:
// In some situations you may want to customise this object. To do so, you can return an object from handleError:
export function handleError({ event, error }) {
    console.error(error);

    return {
        message: 'everything is fine',
		code: 'JEREMYBEARIMY'
	};
}