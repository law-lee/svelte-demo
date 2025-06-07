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

export function load({ cookies }) {
    const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/' });

    return {
        visited: visited === 'true'
    };
}