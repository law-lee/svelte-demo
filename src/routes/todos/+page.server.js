import * as db from '$lib/server/database.js'

export function load({ cookies}) {
    let id = cookies.get('userid');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/todos' });
    }

    return {
        todos: db.getTodos(id)
    };
}

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        db.createTodo(cookies.get('userid'), data.get('description'));
    }
};