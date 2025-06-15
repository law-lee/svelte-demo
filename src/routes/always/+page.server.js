// Two URLs like /foo and /foo/ might look the same, but they’re actually different. 
// A relative URL like ./bar will resolve to /bar in the first case and /foo/bar 
// in the second, and search engines will treat them as separate entries, harming your SEO.

// In short, being loosey-goosey about trailing slashes is a bad idea. By default, 
// SvelteKit strips trailing slashes, meaning that a request for /foo/ will result in a redirect to /foo.

// If you instead want to ensure that a trailing slash is always present, you can specify the trailingSlash option accordingly:
export const trailingSlash = 'always';

// The default value is 'never'.

// Whether or not trailing slashes are applied affects prerendering. 
// A URL like /always/ will be saved to disk as always/index.html whereas a URL like /never will be saved as never.html.