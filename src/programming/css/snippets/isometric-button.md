---
lang: ko-KR
title: Isometric Button
description: Snippets > Isometric Button
icon: iconfont icon-select
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - button
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

::: normal-demo Isometric Button

```html
<button class="s-btn-iso">Touch me</button>
```

```css
.s-btn-iso {
  font-family: Bebas Neue, Arial;font-style:normal;font-weight:normal;font-size:24px;line-height:19px;color:#ffffff;background:#ba3f3f;border:none;padding:16px 28px 16px 28px;cursor:pointer;
  transition: 200ms ease;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg)
}
.s-btn-iso:hover {
  background:#ef4040;padding-top:5px;padding-bottom:5px;
}
.s-btn-iso:active {
  padding-left:20px;padding-right:20px;background:#ba3232
}
```

:::

---

<TagLinks />