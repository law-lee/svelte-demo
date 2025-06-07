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