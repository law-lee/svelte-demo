/*
Inside a load function (as well as in form actions, hooks and API routes, 
which we’ll learn about later) you have access to a setHeaders function, 
which — unsurprisingly — can be used to set headers on the response.

export function load({ setHeaders }) {
    setHeaders({
        'Content-Type': 'text/html'
    });
}

*/

// export function load({ cookies }) {
//     const visited = cookies.get('visited');

//     cookies.set('visited', 'true', { path: '/' });

//     return {
//         visited: visited === 'true',
//     };
// }


//The event object passed into handle is the same object — an instance of a RequestEvent — 
// that is passed into API routes in +server.js files, form actions in +page.server.js files, 
// and load functions in +page.server.js and +layout.server.js.

// It contains a number of useful properties and methods, some of which we’ve already encountered:
// cookies — the cookies API
// fetch — the standard Fetch API, with additional powers
// getClientAddress() — a function to get the client’s IP address
// isDataRequest — true if the browser is requesting data for a page during client-side navigation, false if a page/route is being requested directly
// locals — a place to put arbitrary data
// params — the route parameters
// request — the Request object
// route — an object with an id property representing the route that was matched
// setHeaders(...) — a function for setting HTTP headers on the response
// url — a URL object representing the current request
// A useful pattern is to add some data to event.locals in handle so that it can be read in subsequent load functions:
// export function load(event) {
//     return {
//         message: `the answer is ${event.locals.answer}`
//     };
// }

// The event object has a fetch method that behaves like the standard Fetch API, but with superpowers:

// it can be used to make credentialed requests on the server, as it inherits the cookie and authorization headers from the incoming request
// it can make relative requests on the server (ordinarily, fetch requires a URL with an origin when used in a server context)
// internal requests (e.g. for +server.js routes) go directly to the handler function when running on the server, without the overhead of an HTTP call
// Its behaviour can be modified with the handleFetch hook, which by default looks like this:
export async function load({ fetch, cookies }) {
    const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/' });

    const response = await fetch('/b');

    return {
        visited: visited === 'true',
        message: await response.text()
    };
}

// Server-side rendering (SSR) is the process of generating HTML on the server, and is what SvelteKit does by default. 
// It’s important for performance and resilience, and is very beneficial for search engine optimization (SEO) — while 
// some search engines can index content that is rendered in the browser with JavaScript, it happens less frequently and reliably.

//That said, some components can’t be rendered on the server, perhaps because they expect to be able to access browser globals 
// like window immediately. If you can, you should change those components so that they can render on the server, but if you 
// can’t then you can disable SSR:
// export const ssr = false;

// Setting ssr to false inside your root +layout.server.js effectively turns your entire app into a single-page app (SPA).