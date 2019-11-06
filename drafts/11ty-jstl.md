---
keywords: eleventy, 11ty, 11ty.js, jstl
---

# Use JavaScript template literals as a templating language in Eleventy

Why use template literals instead of a proven templating language?
Use all the modern JavaScript features right inside your templating code. Similar to JSX.

Eleventy has a great getting started: https://www.11ty.io/docs/getting-started/
Follow this first. Here a small excerpt:

As all the cool kids use yarn nowadays:

```sh
yarn add @11ty/eleventy

echo '# Hi there!' > index.md

yarn eleventy --serve
```

```sh
npm init
npm install --save-dev @11ty/eleventy

echo '# Hi there!' > index.md

npx @11ty/eleventy
```

:info: I know there is an `eleventy` package but it is a different project.

Great! You can now visit your Eleventy website from `localhost:8080`!

Eleventy's documentation for JavaScript as a template language: https://www.11ty.io/docs/languages/javascript/.

JavaScript files that Eleventy should process as either layouts or pages have the ending 11ty.js.

So let us create a template for our front page

Create a new file `layout.11ty.js`:

```js
module.exports = ({ content }) => `
  <!doctype html>
  <html>
    <body>
      ${content}
    </body>
  </html>
`
```

When templating with JSTL the map function and lambda expressions (arrow functions) will become your best friend.

Create a new file `links.11ty.js`:

```js
module.exports = class Links {
  data() {
    return {
      layout: 'layout',
    }
  }

  render({ content, links }) {
    return /*html*/ `
      ${content}

      <ul>
        ${links.map(link => `<li><a href="${link}">${link}</a></li>`).join('')}
      </ul>
    `
  }
}
```

Maybe you want to gather useful resources on using JSTL with Eleventy.

Add a file `links.md`:

```md
---
layout: links
links:
  - https://www.11ty.io/docs/languages/jstl/
  - https://www.re1.dev/blog/11ty-jstl
---

# Useful resources on using Eleventy with JSTL
```
