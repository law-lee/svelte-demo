import {fail} from '@sveltejs/kit';
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
    create: async ({ request, cookies }) => {
        const data = await request.formData();
        try {
db.createTodo(cookies.get('userid'), data.get('description'));
        } catch (error) {
            return fail(422, {
                description: data.get('description'),
                error: error.message
            });
        }
        
    },
    delete: async ({ request, cookies }) => {
        const data = await request.formData();
        db.deleteTodo(cookies.get('userid'), data.get('id'));
    },
};