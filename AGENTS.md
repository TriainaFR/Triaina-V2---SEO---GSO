
## Blog Management
When adding a new blog post to `BLOG_DATA` in `constants.ts`, ALWAYS append it to the END of the array before the closing `];`. The application reverses the array before displaying it, so appending to the end makes the article appear at the top of the list as the newest article. Do not prepend it.
