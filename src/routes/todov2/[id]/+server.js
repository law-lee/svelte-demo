import * as database from '$lib/serverv2/database.js'

// Similarly, we can add handlers for other HTTP verbs. 
// Add a /todo/[id] route by creating a src/routes/todo/[id]/+server.js file 
// with PUT and DELETE handlers for toggling and removing todos
export async function PUT({ params, request, cookies }) {
    const { done } = await request.json();
    const userid = cookies.get('userid');

    await database.toggleTodo({ userid, id: params.id, done });
    return new Response(null, { status: 204 });
}

export async function DELETE({ params, cookies }) {
    const userid = cookies.get('userid');

    await database.deleteTodo({ userid, id: params.id });
    return new Response(null, { status: 204 });
}