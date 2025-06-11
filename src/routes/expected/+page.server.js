/*	There are two types of errors in SvelteKit — expected errors and unexpected errors.
    An expected error is one that was thrown via the error helper
*/

import { error } from '@sveltejs/kit';

export function load() {
    error(420, 'Enhance your calm')
}