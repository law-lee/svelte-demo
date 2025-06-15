// To prevent the router from matching on invalid input, you can specify a matcher. 
// For example, you might want a route like /colors/[value] to match hex values like /colors/ff3e00 
// but not named colors like /colors/octarine or any other arbitrary input.

// First, create a new file called src/params/hex.js and export a match function from it:
export function match(value) {
    return /^[0-9a-fA-F]{6}$/.test(value);
}