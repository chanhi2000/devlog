---
lang: ko-KR
title: Was this helpful?
description: Snippets > Was this helpful?
icon: fas fa-comment-dots
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - commant
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

::: normal-demo Was this helpful?

```html
<section class="review">
  <h4 class="review__title">Was this helpful?</h4>
  <ul class="review__list">
    <li class="review__list__item">😭</li>
    <li class="review__list__item">😕</li>
    <li class="review__list__item">😀</li>
    <li class="review__list__item">😍</li>
  </ul>
</section>
```

```css
.review {
  min-width:18rem;padding:3rem;border-top:1px solid rgba(#1a202c, 0.15);border-bottom:1px solid rgba(#1a202c, 0.15);
}
.review .review__title {
  margin-top:0;text-align:center;font-weight:700;font-size:1.2rem;
}
.review .review__list {
  list-style-type:none;margin:0;padding:0;display:flex;justify-content:space-between;
}

.review .review__list .review__list__item {
    font-size:1.6rem;user-select:none;filter:grayscale(1);transition:filter 0.2s, transform 0.2s;
}

.review .review__list .review__list__item:hover {
  cursor:pointer;filter:grayscale(0);transform:scale(1.4);
}
```

:::

---

<TagLinks />