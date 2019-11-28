---
title: TIL – Today I learned
layout: layout
styles:
  - /static/css/prism.css
---

# TIL – Today I learned

## TIL #7

A horizontal bar of variable height can be animated through `background-size` when using a linear gradient background.

```css
#til-7 + label {
  background-image: linear-gradient(transparent 60%, #6ea 60%);
  background-repeat: no-repeat;
  background-size: 0;
  transition: all 0.6s;
}

#til-7:checked + label {
  background-size: 100%;
}
```

```html
<input id="til-7" type="checkbox" hidden /><label for="til-7">Tap me</label>
```

<style>
#til-7 + label {
  background-image: linear-gradient(transparent 60%, #6ea 60%);
  background-repeat: no-repeat;
  background-size: 0;
  transition: all 0.6s;
  font-weight: bold;
}

#til-7:checked + label {
  background-size: 100%;
}
</style>

The result looks like this: <input id="til-7" type="checkbox" hidden /><label for="til-7">Tap me</label>.

## TIL #6

When using your OpenPGP keys with a smartcard (like YubiKey) remember to do a backup **before** executing `keytocard`! Keys are not written but moved and will be irretrievable.

## TIL #5

In his post <cite><a href="https://www.filamentgroup.com/lab/load-css-simpler/">The Simplest Way to Load CSS Asynchronously</a></cite> Scott Jehl uses the `media` and `onload` attributes to lazy load CSS.

```html
<link
  rel="stylesheet"
  href="style.css"
  media="print"
  onload="this.media='all'"
/>
```

This can be combined with link preloading:

```html
<link rel="preload" href="style.css" as="style" />
```

Make sure to have a fallback for loading without JavaScript!

```html
<noscript>
  <link rel="stylesheet" href="style.css" />
</noscript>
```

## TIL #4

Vim's `r` modifier suffix from the `expand` command can be used to strip the file extension of a file name which comes in handy when converting files.

```vim
:! pandoc % -o %:r.pdf
```

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
