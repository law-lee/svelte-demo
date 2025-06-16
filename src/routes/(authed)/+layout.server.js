// As we saw in the routing introduction, layouts are a way to share UI and data loading logic between different routes.

// Sometimes it’s useful to use layouts without affecting the route — for example, 
// you might need your /app and /account routes to be behind authentication, while your /about page 
// is open to the world. We can do this with a route group, which is a directory in parentheses.
// Create an (authed) group by renaming account to (authed)/account then renaming app to (authed)/app.
// Now we can control access to these routes by creating src/routes/(authed)/+layout.server.js:
import { redirect } from "@sveltejs/kit";

export function load({ cookies, url }) {
    if (!cookies.get('logged_in')) {
        redirect(303, `/login?redirectFrom=${url.pathname}`);
    }
}