---
title: TIL – Today I learned
layout: layout
styles:
  - /static/css/prism.css
---

# TIL – Today I learned

## TIL #3

The `:placeholder-shown` pseudo class selects `input` elements currently showing a placeholder.

In <cite><a href="https://dev.to/xtrp/possibly-the-most-useful-css-trick-jl3">Possibly the Most Useful CSS Trick</a></cite> Fred Adams is using it to show a search button only when an `input` field has been filled.

```html
<input placeholder="Search …" />
```

```html
<button>Search!</button>
```

```css
input + button {
  display: none;
}

input:not(:placeholder-shown) + button {
  display: block;
}
```

**Note**: The `::placeholder` pseudo element styles the placeholder text.

## TIL #2

Editor theme variants are meant to be used on different daytimes.

## TIL #1

CSS **`box-shadow`** values are animatable.

```css
a {
  box-shadow: inset 0 -0.4em 0 #00ff00;
  transition: box-shadow 0.3s;
}

a:hover {
  box-shadow: inset 0 -1.2em #00ffff;
}
```

<style>
.til-1 {
  cursor: pointer;
  box-shadow: inset 0 -0.4em 0 #00ff00;
  transition: box-shadow 0.3s;
}

.til-1:hover {
  box-shadow: inset 0 -1.2em 0 #00ffff;
}
</style>

The result looks like this: <a class="til-1">Hover me!</a>
