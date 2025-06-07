/*
 For the sake of the tutorial, we’re importing data from src/routes/blog/data.js.
 In a real app, you’d be more likely to load the data from a database or a CMS, 
 but for now we’ll do it like this.
 */
import { posts } from './data.js';

export function load() {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    };
}

/**
 Just as +layout.svelte files create UI for every child route, +layout.server.js files load data for every child route.

Suppose we’d like to add a ‘more posts’ sidebar to our blog post page. We could return summaries from the load function 
in src/routes/blog/[slug]/+page.server.js, like we do in src/routes/blog/+page.server.js, but that would be repetitive.

Instead, let’s rename src/routes/blog/+page.server.js to src/routes/blog/+layout.server.js. 
Notice that the /blog route continues to work — data.summaries is still available to the page.
*/