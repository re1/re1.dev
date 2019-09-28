---
title: TIL – Today I learned
layout: layout
styles:
  - /static/css/prism.css
---

# TIL – Today I learned

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
