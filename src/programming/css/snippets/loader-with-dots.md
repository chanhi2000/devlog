---
lang: ko-KR
title: Loader with dots
description: Snippets > Loader with dots
icon: fas fa-spinner
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - loader
prev: /programming/css/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Snippets",
  "desc": "Snippets",
  "link": "/programming/css/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

::: normal-demo Loader (with dots)

```html
<ul id="loader">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```css
ul#loader {
  list-style-type:none;display:flex;
}
ul#loader li {
  margin:0.2rem;width:0.4rem;height: 0.4rem;border-radius:50%;background-color:#ff4754;
  animation: dotanimation 0.8s ease infinite alternate both;
}
ul#loader li:nth-child(2) { animation-delay:0.2s; }
ul#loader li:nth-child(3) { animation-delay:0.4s; }
ul#loader li:nth-child(4) { animation-delay:0.6s; }

@keyframes dotanimation {
  from { transform: translateY(0); }
  to { transform: translateY(-1rem); }
}
```

:::

---

<TagLinks />