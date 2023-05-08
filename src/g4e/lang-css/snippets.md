---
lang: ko-KR
title: 🛹Snippets
description: 🎨CSS > 🛹Snippets
category: 🎨CSS
tags: ["snippets", "css"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Loader

::: details Loader (with dots)

```html
<ul id="loader">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### CSS

```css
ul#loader {
  list-style-type:none;display:flex;
}
ul#loader li {
  margin:0.2rem;width:0.4rem;height: 0.4rem;border-radius:50%;background-color:#ff4754;
  animation: dotanimation 0.8s ease infinite alternate both;
}
ul#loader li:nth-child(2) {animation-delay:0.2s;}
ul#loader li:nth-child(3) {animation-delay:0.4s;}
ul#loader li:nth-child(4) {animation-delay:0.6s;}

@keyframes dotanimcatino {
  from {transform: translateY(0);}
  to {transform: translateY(-1rem);}
}
```

<TagLinks />
