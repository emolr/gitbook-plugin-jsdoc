# jsdoc in gitbook

With this plugin a book can contain jsdoc from a specified Javascript file. 

## How to use it?

To use the jsdoc plugin in your Gitbook project, add the jsdoc plugin to the book.json file, then install plugins using gitbook install.

```json
{
    "plugins": ["jsdoc"]
}
```

## jsdoc format

To inject a full jsdoc documentation to a page, add this snippet in the markdown file.

```html
{{ "/absolute/path/to/js/file.js" | jsdoc }}
```