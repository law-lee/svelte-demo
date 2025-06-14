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
    
    return await resolve(event, {
        transformPageChunk: ({ html }) => html.replace(
            '<body',
            '<body style="color: hotpink'
        )
    });
}