# jsdoc in gitbook

With this plugin a book can contain jsdoc from a specified Javascript file. 

## How to use it?

To use the jsdoc plugin in your Gitbook project, add the jsdoc plugin to the book.json file, then install plugins using gitbook install.

```
{
    "plugins": ["jsdoc"]
}
```

## jsdoc format

```
{{ "/absolute/path/to/js/file.js" | jsdoc }}
```