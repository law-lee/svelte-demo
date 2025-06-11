/*
Any other error — such as the one in src/routes/unexpected/+page.server.js — is treated as unexpected
*/
export function load() {
    throw new Error('Kabbom!')
}