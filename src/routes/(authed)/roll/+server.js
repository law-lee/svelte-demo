/**
SvelteKit allows you to create more than just pages. 
We can also create API routes by adding a +server.js file 
that exports functions corresponding to HTTP methods: GET, PUT, POST, PATCH and DELETE.
 */

/*
Request handlers must return a Response object. Since it’s common to return JSON from an API route, 
SvelteKit provides a convenience function for generating these responses:
*/
import { json } from '@sveltejs/kit';
export function GET() {

    const number = Math.floor(Math.random() * 6) + 1;

    // return new Response(number, {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    return json(number);
}